'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', icon: '📷', url: '#', color: 'hover:text-pink-400', bgColor: 'hover:bg-pink-500/20' },
    { name: 'LinkedIn', icon: '💼', url: '#', color: 'hover:text-blue-400', bgColor: 'hover:bg-blue-500/20' },
    { name: 'Behance', icon: '🎨', url: '#', color: 'hover:text-purple-400', bgColor: 'hover:bg-purple-500/20' },
    { name: 'Dribbble', icon: '🏀', url: '#', color: 'hover:text-red-400', bgColor: 'hover:bg-red-500/20' },
    { name: 'Email', icon: '✉️', url: 'mailto:elfin@example.com', color: 'hover:text-green-400', bgColor: 'hover:bg-green-500/20' }
  ];

  const services = [
    { name: t('about.services.logo'), icon: '🎨', description: t('about.services.logo_desc') },
    { name: t('about.services.web'), icon: '💻', description: t('about.services.web_desc') },
    { name: t('about.services.social'), icon: '📱', description: t('about.services.social_desc') },
    { name: t('about.services.print'), icon: '📄', description: t('about.services.print_desc') }
  ];

  const quickLinks = [
    { name: t('nav.home'), href: '#home', icon: '🏠' },
    { name: t('nav.about'), href: '#about', icon: '👤' },
    { name: t('nav.portfolio'), href: '#portfolio', icon: '🎨' },
    { name: t('nav.contact'), href: '#contact', icon: '📞' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-60 -right-60 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute -bottom-60 -left-60 w-96 h-96 bg-gradient-to-br from-pink-500/30 to-blue-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 w-full px-8 sm:px-12 lg:px-16 py-32">
        {/* Main Footer Content */}
        <div className="w-full">
          {/* Top Section - Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            {/* Animated Logo */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="inline-block mb-8"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/25 relative overflow-hidden">
                <span className="text-white font-bold text-4xl relative z-10">E</span>
                <motion.div
                  animate={{
                    background: [
                      "linear-gradient(45deg, #8b5cf6, #ec4899, #3b82f6)",
                      "linear-gradient(45deg, #ec4899, #3b82f6, #8b5cf6)",
                      "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                />
              </div>
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
              />
            </motion.div>
            
            {/* Brand Info */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4"
            >
              Elfin Şahin
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl text-gray-300 font-medium mb-8"
            >
              Graphic Designer & Creative Professional
            </motion.p>
            
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex justify-center mb-12"
            >
              <p className="text-xl text-gray-400 max-w-4xl leading-relaxed text-center">
                <span className="text-purple-300 font-semibold">Yaratıcı vizyonum</span> ve 
                <span className="text-pink-300 font-semibold"> teknik uzmanlığım</span> ile 
                her projeye <span className="text-blue-300 font-semibold">benzersiz değer</span> katıyorum.
              </p>
            </motion.div>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              viewport={{ once: true }}
              className="flex justify-center space-x-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.1 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -10,
                    rotate: [0, -15, 15, 0],
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-20 h-20 bg-black/50 backdrop-blur-md rounded-3xl flex items-center justify-center text-3xl transition-all duration-500 border-2 border-purple-500/40 hover:border-purple-500/80 ${social.color} ${social.bgColor} shadow-2xl hover:shadow-3xl hover:shadow-purple-500/30 group relative overflow-hidden`}
                  aria-label={`${social.name} profilini ziyaret et`}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative z-10 group-hover:scale-125 transition-transform duration-300">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Middle Section - Services & Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            {/* Services & Quick Links Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Services Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-4xl font-bold text-white mb-8">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {t('about.services')}
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl group-hover:scale-125 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-xl mb-2">{service.name}</h4>
                        <p className="text-gray-400 text-sm">{service.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-4xl font-bold text-white mb-8">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {t('footer.quickLinks')}
                </span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      if (link.href === '#home') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        const element = document.querySelector(link.href);
                        if (element) {
                          // Daha basit yöntem - offsetTop kullan
                          const offsetTop = (element as HTMLElement).offsetTop;
                          window.scrollTo({
                            top: offsetTop - 120, // 120px offset (navigation + extra space)
                            behavior: 'smooth'
                          });
                        }
                      }
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.08, 
                      y: -5,
                      x: 8,
                    }}
                    className="group flex items-center space-x-4 p-6 bg-black/30 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:bg-white/10"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className="text-3xl group-hover:scale-125 transition-transform duration-300"
                    >
                      {link.icon}
                    </motion.div>
                    <span className="text-white font-semibold text-xl group-hover:text-purple-300 transition-colors duration-300">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            </div>
          </motion.div>

          {/* Bottom Section - Copyright & Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
            viewport={{ once: true }}
            className="border-t border-purple-500/20 pt-16"
          >
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <span className="text-white font-bold text-lg">E</span>
                </motion.div>
                <div>
                  <p className="text-gray-300 text-lg">
                    © {currentYear} <span className="text-purple-300 font-bold">Elfin Şahin</span>. 
                    <span className="text-gray-500"> {t('footer.copyright')}</span>
                  </p>
                </div>
              </motion.div>

              {/* Additional Links */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                viewport={{ once: true }}
                className="flex items-center space-x-10"
              >
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="text-gray-400 hover:text-purple-300 transition-colors duration-300 font-medium text-base"
                >
                  {t('footer.privacy')}
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="text-gray-400 hover:text-purple-300 transition-colors duration-300 font-medium text-base"
                >
                  {t('footer.terms')}
                </motion.a>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center space-x-3 text-gray-400 hover:text-purple-300 transition-colors duration-300 cursor-pointer"
                >
                  <span className="text-xl">🚀</span>
                  <span className="text-base font-medium">Ready to collaborate?</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Center Credit Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            viewport={{ once: true }}
            className="text-center mt-8 pt-8 border-t border-purple-500/10"
          >
            <p className="text-gray-400 text-sm">
              {language === 'tr' ? (
                <>
                  Tasarım & Geliştirme: <span className="text-purple-300 font-semibold">Atakan Şahin</span>
                </>
              ) : (
                <>
                  Designed & Developed by <span className="text-purple-300 font-semibold">Atakan Şahin</span>
                </>
              )}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
} 