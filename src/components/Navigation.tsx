'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), href: '#home', id: 'nav-home' },
    { name: t('nav.about'), href: '#about', id: 'nav-about' },
    { name: t('nav.portfolio'), href: '#portfolio', id: 'nav-portfolio' },
    { name: t('nav.contact'), href: '#contact', id: 'nav-contact' }
  ];

  const handleKeyDown = (e: React.KeyboardEvent, href: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (href === '#home') {
        // Ana Sayfa için en üste git
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        // Diğer sayfalar için normal scroll
        const element = document.querySelector(href);
        if (element) {
          const navHeight = 96; // 24 * 4 = 96px (h-24)
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - navHeight,
            behavior: 'smooth'
          });
        }
      }
      setIsMobileMenuOpen(false);
    }
  };

  const handleMobileMenuKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Ana navigasyon"
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-4"
          >
            <div className="relative w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 animate-pulse opacity-75"></div>
              <svg className="w-7 h-7 relative z-10" viewBox="0 0 24 24" fill="none">
                <path d="M3 3L21 3L21 21L3 21L3 3Z" stroke="white" strokeWidth="2" fill="none"/>
                <path d="M3 9L21 9" stroke="white" strokeWidth="2"/>
                <path d="M9 3L9 21" stroke="white" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" fill="white" opacity="0.9"/>
                <path d="M8 8L16 16" stroke="white" strokeWidth="1.5" opacity="0.7"/>
                <path d="M16 8L8 16" stroke="white" strokeWidth="1.5" opacity="0.7"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Elfin Şahin</span>
              <span className="text-gray-300 text-sm font-medium">Graphic Designer</span>
            </div>
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-16 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  if (item.href === '#home') {
                    // Ana Sayfa için en üste git
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                  } else {
                    // Diğer sayfalar için normal scroll
                    const element = document.querySelector(item.href);
                    if (element) {
                      const navHeight = 96; // 24 * 4 = 96px (h-24)
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                      window.scrollTo({
                        top: elementPosition - navHeight,
                        behavior: 'smooth'
                      });
                    }
                  }
                }}
                onKeyDown={(e) => handleKeyDown(e, item.href)}
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group px-6 py-4 text-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                tabIndex={0}
                role="menuitem"
                aria-label={`${item.name} bölümüne git`}
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />

              </motion.button>
            ))}
          </div>

          {/* Language Toggle Button - Absolute Right */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
            className="hidden lg:flex items-center space-x-2 px-4 py-2 bg-black/30 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 text-white absolute right-8"
          >
            <span className="text-lg">{language === 'tr' ? '🇹🇷' : '🇺🇸'}</span>
            <span className="font-medium">{language === 'tr' ? 'TR' : 'EN'}</span>
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            onKeyDown={handleMobileMenuKeyDown}
            className="lg:hidden text-white p-2"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-6 h-1 bg-white rounded-full mb-1"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-1 bg-white rounded-full mb-1"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-6 h-1 bg-white rounded-full"
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
              role="menu"
              aria-label="Mobil menü"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ x: 10 }}
                    onClick={() => {
                      if (item.href === '#home') {
                        // Ana Sayfa için en üste git
                        window.scrollTo({
                          top: 0,
                          behavior: 'smooth'
                        });
                      } else {
                        // Diğer sayfalar için normal scroll
                        const element = document.querySelector(item.href);
                        if (element) {
                          const navHeight = 96; // 24 * 4 = 96px (h-24)
                          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                          window.scrollTo({
                            top: elementPosition - navHeight,
                            behavior: 'smooth'
                          });
                        }
                      }
                      setIsMobileMenuOpen(false);
                    }}
                    onKeyDown={(e) => handleKeyDown(e, item.href)}
                    className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-300 py-3 text-lg"
                    tabIndex={0}
                    role="menuitem"
                    aria-label={`${item.name} bölümüne git`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
} 