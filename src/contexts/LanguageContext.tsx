'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Çeviri verileri
const translations = {
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımda',
    'nav.portfolio': 'Portfolyo',
    'nav.contact': 'İletişim',
    
    // Hero Section
    'hero.title': 'Elfin Şahin',
    'hero.subtitle': 'Grafik Tasarımcı & Adobe Uzmanı',
    'hero.description': 'Modern ve yaratıcı tasarım çözümleri ile markalarınızı hayata geçiriyorum. Logo tasarımı, web tasarımı ve sosyal medya projeleriniz için profesyonel hizmet.',
    'hero.cta.portfolio': 'Portfolyomu Görüntüle',
    'hero.cta.contact': 'İletişime Geç',
    
    // About Section
    'about.title': 'Hakkımda',
    'about.subtitle': 'Yaratıcılık ve Teknoloji Buluşuyor',
    'about.description': '<span class="text-purple-300 font-semibold">Adobe Creative Suite uzmanı</span> olarak, modern ve yaratıcı tasarımlar üretiyorum. <span class="text-pink-300 font-semibold">Uluslararası sertifikalı grafik tasarımcı</span> olarak, her projeye özgün bir yaklaşım getiriyorum ve müşterilerimin hayallerini gerçeğe dönüştürüyorum.<br /><br /><span class="text-blue-300 font-medium">Her tasarım bir hikaye anlatır</span> ve ben bu hikayeleri <span class="text-purple-300 font-semibold">renklerle, şekillerle ve yaratıcılıkla</span> hayata geçiriyorum. <span class="text-pink-300 font-medium">Mükemmellik arayışım</span> ve <span class="text-purple-300 font-semibold">detaylara olan tutkum</span>, her projeyi benzersiz bir sanat eserine dönüştürüyor.<br /><br /><span class="text-green-300 font-medium">Yaratıcılık sınır tanımaz</span> ve ben <span class="text-purple-300 font-semibold">sınırları zorlayarak</span> <span class="text-pink-300 font-medium">vizyoner tasarımlar</span> yaratıyorum. <span class="text-blue-300 font-semibold">Her pikselin önemini bilen</span> bir tasarımcı olarak, <span class="text-purple-300 font-medium">kalite ve estetiği</span> bir araya getiriyorum.',
    'about.services': 'Hizmetler',
    'about.certification': 'Sertifikalar',
    'about.skills.title': 'Uzmanlık Alanlarım',
    'about.skills.proficiency': 'Yeterlilik',
    'about.skills.photoshop': 'Fotoğraf düzenleme ve manipülasyon',
    'about.skills.illustrator': 'Vektörel grafik tasarımı',
    'about.skills.indesign': 'Sayfa düzeni ve yayın tasarımı',
    'about.skills.aftereffects': 'Motion graphics ve animasyon',
    'about.skills.premiere': 'Video düzenleme ve post-prodüksiyon',
    'about.skills.xd': 'UI/UX prototip tasarımı',
    'about.skills.logo': 'Logo Tasarımı',
    'about.skills.web': 'Web Tasarımı',
    'about.skills.social': 'Sosyal Medya',
    'about.skills.branding': 'Marka Kimliği',
    'about.skills.print': 'Baskı Tasarımı',
    'about.skills.illustration': 'İllüstrasyon',
    
    // Services
    'about.services.logo': 'Logo Tasarımı',
    'about.services.logo_desc': 'Marka kimliği ve logo tasarımı',
    'about.services.web': 'Web Tasarımı',
    'about.services.web_desc': 'Modern ve responsive web tasarımı',
    'about.services.social': 'Sosyal Medya',
    'about.services.social_desc': 'Instagram, Facebook, Twitter tasarımları',
    'about.services.print': 'Print Tasarımı',
    'about.services.print_desc': 'Broşür, kartvizit, afiş tasarımı',
    'about.services.uiux': 'UI/UX Tasarımı',
    'about.services.uiux_desc': 'Kullanıcı deneyimi tasarımı',
    'about.services.motion': 'Motion Graphics',
    'about.services.motion_desc': 'Animasyonlu grafik tasarımları',
    
    // Certifications
    'about.certification.title': 'Adobe Creative Suite Uluslararası Sertifikası',
    'about.certification.description': 'Adobe\'nin resmi eğitim programından alınan uluslararası geçerli sertifika. Tüm Adobe Creative Suite uygulamalarında uzmanlık seviyesinde yetkinlik.',
    
    // Portfolio Section
    'portfolio.title': 'Portfolio',
    'portfolio.description1': '<span class="text-purple-300 font-semibold">Yaratıcı vizyonum</span> ve <span class="text-pink-300 font-semibold">teknik uzmanlığım</span> ile her projeye özgün bir yaklaşım getiriyorum.',
    'portfolio.description2': '<span class="text-blue-300 font-medium">Her tasarım bir hikaye anlatır</span> ve ben bu hikayeleri <span class="text-purple-300 font-semibold">renklerle, şekillerle ve yaratıcılıkla</span> hayata geçiriyorum. <span class="text-pink-300 font-medium">Mükemmellik arayışım</span> ve <span class="text-purple-300 font-semibold">detaylara olan tutkum</span>, her projeyi benzersiz bir sanat eserine dönüştürüyor.',
    'portfolio.description3': '<span class="text-purple-400 font-semibold">Aşağıdaki projelerimi inceleyerek</span> <span class="text-pink-400 font-semibold">yaratıcılığımı</span> ve <span class="text-blue-400 font-semibold">teknik becerilerimi</span> keşfedin. Her proje, <span class="text-purple-300 font-medium">benzersiz bir deneyim</span> ve <span class="text-pink-300 font-medium">sonsuz yaratıcılık</span> sunuyor.',
    'portfolio.filters.all': 'Tümü',
    'portfolio.filters.logo': 'Logo Tasarımı',
    'portfolio.filters.web': 'Web Tasarımı',
    'portfolio.filters.social': 'Sosyal Medya',
    'portfolio.filters.print': 'Print Tasarımı',
    'portfolio.filters.count': 'Adet',
    'portfolio.empty.title': 'Henüz Proje Yok',
    'portfolio.empty.description': 'Bu kategoride henüz proje bulunmuyor.',
    'portfolio.modal.year': 'Yıl',
    
    // Portfolio Projects
    'portfolio.projects.techstart.title': 'TechStart Logo & Branding',
    'portfolio.projects.techstart.description': 'Yeni nesil teknoloji startup\'ı için modern ve minimalist logo tasarımı. Marka kimliği ve kurumsal kimlik paketi.',
    'portfolio.projects.ecofresh.title': 'EcoFresh E-Ticaret Platformu',
    'portfolio.projects.ecofresh.description': 'Organik ürün satışı yapan e-ticaret platformu için responsive web tasarımı. UI/UX odaklı kullanıcı deneyimi.',
    'portfolio.projects.fitnesspro.title': 'FitnessPro Sosyal Medya Kampanyası',
    'portfolio.projects.fitnesspro.description': 'Fitness merkezi için Instagram ve Facebook kampanya tasarımları. Yüksek engagement oranı elde edildi.',
    'portfolio.projects.restaurant.title': 'Restaurant Elite Menü Tasarımı',
    'portfolio.projects.restaurant.description': 'Lüks restaurant için elegant menü tasarımı. Özel kağıt seçimi ve baskı teknikleri kullanıldı.',
    'portfolio.projects.healthapp.title': 'HealthApp Mobile UI/UX',
    'portfolio.projects.healthapp.description': 'Sağlık takip uygulaması için modern mobil arayüz tasarımı. Kullanıcı dostu ve erişilebilir tasarım.',
    'portfolio.projects.corporate.title': 'Corporate Brochure Collection',
    'portfolio.projects.corporate.description': 'Çok uluslu şirket için kurumsal broşür koleksiyonu. Profesyonel layout ve tipografi.',
    'portfolio.projects.artgallery.title': 'ArtGallery Exhibition Identity',
    'portfolio.projects.artgallery.description': 'Modern sanat galerisi için kapsamlı kimlik tasarımı. Logo, kartvizit, afiş ve dijital materyaller.',
    'portfolio.projects.travelapp.title': 'TravelApp Interface Design',
    'portfolio.projects.travelapp.description': 'Seyahat uygulaması için kullanıcı arayüzü tasarımı. Harita entegrasyonu ve booking sistemi.',
    'portfolio.projects.fashion.title': 'Fashion Brand Social Media',
    'portfolio.projects.fashion.description': 'Moda markası için sosyal medya içerik stratejisi ve tasarımları. Trend analizi ve hedef kitle.',
    
    // Contact Section
    'contact.title': 'İletişim',
    'contact.description': '<span class="text-purple-300 font-semibold">Yaratıcı projeleriniz</span> için <span class="text-pink-300 font-semibold">benimle iletişime geçin</span>. Her detayı özenle planlayarak <span class="text-blue-300 font-semibold">hayalinizdeki tasarımı</span> <span class="text-purple-400 font-bold">gerçeğe dönüştürelim</span>.',
    'contact.form.title': 'Mesaj Gönderin',
    'contact.form.name': 'İsim',
    'contact.form.name_placeholder': 'Adınız',
    'contact.form.email': 'Email',
    'contact.form.email_placeholder': 'email@example.com',
    'contact.form.subject': 'Konu',
    'contact.form.subject_placeholder': 'Proje konusu',
    'contact.form.message': 'Mesaj',
    'contact.form.message_placeholder': 'Projeniz hakkında detayları paylaşın...',
    'contact.form.submit': 'Mesaj Gönder',
    'contact.form.sending': 'Gönderiliyor...',
    'contact.form.success': 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.',
    'contact.form.error': 'Bir hata oluştu. Lütfen tekrar deneyin.',
    'contact.form.connection_error': 'Bağlantı hatası. Lütfen tekrar deneyin.',
    'contact.form.unexpected_error': 'Beklenmeyen bir hata oluştu.',
    'contact.info.title': 'İletişim Bilgileri',
    'contact.info.email': 'Email',
    'contact.info.location': 'Konum',
    'contact.info.location_value': 'İstanbul, Türkiye',
    'contact.info.hours': 'Çalışma Saatleri',
    'contact.info.hours_value': 'Pazartesi - Cuma, 09:00 - 18:00',
    'contact.social.title': 'Sosyal Medya',
    
    // Footer
    'footer.description': 'Yaratıcı tasarımlar ve profesyonel çözümler ile markanızı bir üst seviyeye taşıyoruz.',
    'footer.quickLinks': 'Hızlı Linkler',
    'footer.contact': 'İletişim',
    'footer.location': 'İstanbul, Türkiye',
    'footer.hours': 'Pazartesi - Cuma, 09:00 - 18:00',
    'footer.copyright': 'Tüm hakları saklıdır.',
    'footer.privacy': 'Gizlilik Politikası',
    'footer.terms': 'Kullanım Şartları',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Elfin Şahin',
    'hero.subtitle': 'Graphic Designer & Adobe Expert',
    'hero.description': 'I bring your brands to life with modern and creative design solutions. Professional service for your logo design, web design and social media projects.',
    'hero.cta.portfolio': 'View Portfolio',
    'hero.cta.contact': 'Get in Touch',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Where Creativity Meets Technology',
    'about.description': 'As an <span class="text-purple-300 font-semibold">Adobe Creative Suite expert</span>, I produce modern and creative designs. As an <span class="text-pink-300 font-semibold">internationally certified graphic designer</span>, I bring a unique approach to every project and turn my clients\' dreams into reality.<br /><br />Every design tells a story, and I bring these stories to life with <span class="text-purple-300 font-semibold">colors, shapes, and creativity</span>. My <span class="text-pink-300 font-medium">pursuit of perfection</span> and <span class="text-purple-300 font-semibold">passion for details</span> transform every project into a unique work of art.<br /><br /><span class="text-green-300 font-medium">Creativity knows no bounds</span> and I create <span class="text-pink-300 font-medium">visionary designs</span> by <span class="text-purple-300 font-semibold">pushing boundaries</span>. As a designer who <span class="text-blue-300 font-semibold">understands the importance of every pixel</span>, I bring <span class="text-purple-300 font-medium">quality and aesthetics</span> together.',
    'about.services': 'Services',
    'about.certification': 'Certifications',
    'about.skills.title': 'My Expertise',
    'about.skills.proficiency': 'Proficiency',
    'about.skills.photoshop': 'Photo editing and manipulation',
    'about.skills.illustrator': 'Vector graphic design',
    'about.skills.indesign': 'Page layout and publishing design',
    'about.skills.aftereffects': 'Motion graphics and animation',
    'about.skills.premiere': 'Video editing and post-production',
    'about.skills.xd': 'UI/UX prototype design',
    'about.skills.logo': 'Logo Design',
    'about.skills.web': 'Web Design',
    'about.skills.social': 'Social Media',
    'about.skills.branding': 'Brand Identity',
    'about.skills.print': 'Print Design',
    'about.skills.illustration': 'Illustration',
    
    // Services
    'about.services.logo': 'Logo Design',
    'about.services.logo_desc': 'Brand identity and logo design',
    'about.services.web': 'Web Design',
    'about.services.web_desc': 'Modern and responsive web design',
    'about.services.social': 'Social Media',
    'about.services.social_desc': 'Instagram, Facebook, Twitter designs',
    'about.services.print': 'Print Design',
    'about.services.print_desc': 'Brochure, business card, poster design',
    'about.services.uiux': 'UI/UX Design',
    'about.services.uiux_desc': 'User experience design',
    'about.services.motion': 'Motion Graphics',
    'about.services.motion_desc': 'Animated graphic designs',
    
    // Certifications
    'about.certification.title': 'Adobe Creative Suite International Certificate',
    'about.certification.description': 'An internationally valid certificate obtained from Adobe\'s official training program. Proficiency at an expert level in all Adobe Creative Suite applications.',
    
    // Portfolio Section
    'portfolio.title': 'Portfolio',
    'portfolio.description1': '<span class="text-purple-300 font-semibold">Creative vision</span> and <span class="text-pink-300 font-semibold">technical expertise</span> with a unique approach to every project.',
    'portfolio.description2': '<span class="text-blue-300 font-medium">Every design tells a story</span> and I bring these stories to life with <span class="text-purple-300 font-semibold">colors, shapes, and creativity</span>. My <span class="text-pink-300 font-medium">pursuit of perfection</span> and <span class="text-purple-300 font-semibold">passion for details</span> transform every project into a unique work of art.',
    'portfolio.description3': '<span class="text-purple-400 font-semibold">Explore my creativity</span> and <span class="text-pink-400 font-semibold">technical skills</span> by examining the projects below. Each project offers a <span class="text-purple-300 font-medium">unique experience</span> and <span class="text-pink-300 font-medium">endless creativity</span>.',
    'portfolio.filters.all': 'All',
    'portfolio.filters.logo': 'Logo Design',
    'portfolio.filters.web': 'Web Design',
    'portfolio.filters.social': 'Social Media',
    'portfolio.filters.print': 'Print Design',
    'portfolio.filters.count': 'Items',
    'portfolio.empty.title': 'No Projects Yet',
    'portfolio.empty.description': 'No projects found in this category yet.',
    'portfolio.modal.year': 'Year',
    
    // Portfolio Projects
    'portfolio.projects.techstart.title': 'TechStart Logo & Branding',
    'portfolio.projects.techstart.description': 'Modern and minimalist logo design for next-generation technology startup. Brand identity and corporate identity package.',
    'portfolio.projects.ecofresh.title': 'EcoFresh E-Commerce Platform',
    'portfolio.projects.ecofresh.description': 'Responsive web design for e-commerce platform selling organic products. UI/UX focused user experience.',
    'portfolio.projects.fitnesspro.title': 'FitnessPro Social Media Campaign',
    'portfolio.projects.fitnesspro.description': 'Instagram and Facebook campaign designs for fitness center. High engagement rate achieved.',
    'portfolio.projects.restaurant.title': 'Restaurant Elite Menu Design',
    'portfolio.projects.restaurant.description': 'Elegant menu design for luxury restaurant. Special paper selection and printing techniques used.',
    'portfolio.projects.healthapp.title': 'HealthApp Mobile UI/UX',
    'portfolio.projects.healthapp.description': 'Modern mobile interface design for health tracking app. User-friendly and accessible design.',
    'portfolio.projects.corporate.title': 'Corporate Brochure Collection',
    'portfolio.projects.corporate.description': 'Corporate brochure collection for multinational company. Professional layout and typography.',
    'portfolio.projects.artgallery.title': 'ArtGallery Exhibition Identity',
    'portfolio.projects.artgallery.description': 'Comprehensive identity design for modern art gallery. Logo, business card, poster and digital materials.',
    'portfolio.projects.travelapp.title': 'TravelApp Interface Design',
    'portfolio.projects.travelapp.description': 'User interface design for travel app. Map integration and booking system.',
    'portfolio.projects.fashion.title': 'Fashion Brand Social Media',
    'portfolio.projects.fashion.description': 'Social media content strategy and designs for fashion brand. Trend analysis and target audience.',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.description': 'Get in touch with me for your <span class="text-purple-300 font-semibold">creative projects</span>. Let\'s meticulously plan every detail and turn your <span class="text-blue-300 font-semibold">dream design</span> into <span class="text-purple-400 font-bold">reality</span>.',
    'contact.form.title': 'Send Message',
    'contact.form.name': 'Name',
    'contact.form.name_placeholder': 'Your Name',
    'contact.form.email': 'Email',
    'contact.form.email_placeholder': 'email@example.com',
    'contact.form.subject': 'Subject',
    'contact.form.subject_placeholder': 'Project subject',
    'contact.form.message': 'Message',
    'contact.form.message_placeholder': 'Share details about your project...',
    'contact.form.submit': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Your message has been sent successfully! We will get back to you as soon as possible.',
    'contact.form.error': 'An error occurred. Please try again.',
    'contact.form.connection_error': 'Connection error. Please try again.',
    'contact.form.unexpected_error': 'An unexpected error occurred.',
    'contact.info.title': 'Contact Information',
    'contact.info.email': 'Email',
    'contact.info.location': 'Location',
    'contact.info.location_value': 'Istanbul, Turkey',
    'contact.info.hours': 'Working Hours',
    'contact.info.hours_value': 'Monday - Friday, 09:00 - 18:00',
    'contact.social.title': 'Social Media',
    
    // Footer
    'footer.description': 'We take your brand to the next level with creative designs and professional solutions.',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.location': 'Istanbul, Turkey',
    'footer.hours': 'Monday - Friday, 09:00 - 18:00',
    'footer.copyright': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('tr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 