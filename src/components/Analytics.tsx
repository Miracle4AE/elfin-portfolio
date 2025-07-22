'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX', {
        page_path: pathname,
      });
    }
  }, [pathname]);

  useEffect(() => {
    // Track page views
    const trackPageView = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: pathname,
        });
      }
    };

    // Track scroll depth
    const trackScrollDepth = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      
      if (scrollPercent >= 25 && scrollPercent < 50) {
        window.gtag?.('event', 'scroll', { value: 25 });
      } else if (scrollPercent >= 50 && scrollPercent < 75) {
        window.gtag?.('event', 'scroll', { value: 50 });
      } else if (scrollPercent >= 75) {
        window.gtag?.('event', 'scroll', { value: 75 });
      }
    };

    // Track time on page
    let startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent >= 30) {
        window.gtag?.('event', 'time_on_page', { value: timeSpent });
      }
    };

    // Track CTA clicks
    const trackCTAClick = (action: string, label: string) => {
      window.gtag?.('event', 'click', {
        event_category: 'CTA',
        event_action: action,
        event_label: label,
      });
    };

    // Add event listeners
    document.addEventListener('scroll', trackScrollDepth);
    setInterval(trackTimeOnPage, 30000); // Every 30 seconds

    // Track CTA clicks
    const ctaButtons = document.querySelectorAll('a[href="#portfolio"], a[href="#contact"]');
    ctaButtons.forEach(button => {
      button.addEventListener('click', () => {
        const href = button.getAttribute('href');
        trackCTAClick('click', href || 'unknown');
      });
    });

    return () => {
      document.removeEventListener('scroll', trackScrollDepth);
      ctaButtons.forEach(button => {
        button.removeEventListener('click', () => {});
      });
    };
  }, [pathname]);

  return null; // This component doesn't render anything
} 