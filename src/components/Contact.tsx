'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const socialLinks: SocialLink[] = [
    {
      name: 'Instagram',
      url: '#',
      icon: '📷',
      color: 'hover:text-pink-400'
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: '💼',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Behance',
      url: '#',
      icon: '🎨',
      color: 'hover:text-purple-400'
    },
    {
      name: 'Dribbble',
      url: '#',
      icon: '🏀',
      color: 'hover:text-red-400'
    },
    {
      name: 'Email',
      url: 'mailto:elfin@example.com',
      icon: '✉️',
      color: 'hover:text-green-400'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Simulate API call
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate 90% success rate
          if (Math.random() > 0.1) {
            resolve('success');
          } else {
            reject(new Error(t('contact.form.connection_error')));
          }
        }, 2000);
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);

    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : t('contact.form.unexpected_error'));
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements - Removed */}

      <div className="w-full px-8 sm:px-12 lg:px-16 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
            {t('contact.title')}
          </h2>
          <div className="flex justify-center">
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed text-center"
               dangerouslySetInnerHTML={{ __html: t('contact.description') }}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
            {/* Contact Form - Senior+ Level */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-gradient-to-br from-black/40 via-purple-900/20 to-pink-900/20 backdrop-blur-xl rounded-3xl p-10 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500 group flex flex-col justify-between"
            >
              {/* Animated Background */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
              />
              
              <h3 className="text-3xl font-bold text-white mb-12 relative z-10">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  {t('contact.form.title')}
                </span>
              </h3>
              
              <form onSubmit={handleSubmit} className="flex flex-col h-full relative z-10">
                {/* Name & Email Row */}

                  <div className="space-y-6 flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="group">
                      <label htmlFor="name" className="block text-gray-300 text-sm font-semibold mb-4 flex items-center">
                        <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mr-2"></span>
                        {t('contact.form.name')}
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-8 py-5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border-2 border-cyan-500/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/60 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-100 group-hover:border-cyan-500/50 group-hover:shadow-lg group-hover:shadow-cyan-500/20 group-hover:scale-[1.01] group-hover:-translate-y-0.5"
                          placeholder={t('contact.form.name_placeholder')}
                        />
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
                          👤
                        </div>
                      </div>
                    </div>
                    
                    {/* Email Field */}
                    <div className="group">
                      <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-4 flex items-center">
                        <span className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mr-2"></span>
                        {t('contact.form.email')}
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-8 py-5 bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm border-2 border-pink-500/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500/60 focus:ring-4 focus:ring-pink-500/20 transition-all duration-100 group-hover:border-pink-500/50 group-hover:shadow-lg group-hover:shadow-pink-500/20 group-hover:scale-[1.01] group-hover:-translate-y-0.5"
                          placeholder={t('contact.form.email_placeholder')}
                        />
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
                          📧
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Subject Field */}
                  <div className="group">
                    <label htmlFor="subject" className="block text-gray-300 text-sm font-semibold mb-4 flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-2"></span>
                      {t('contact.form.subject')}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-8 py-5 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border-2 border-blue-500/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/20 transition-all duration-100 group-hover:border-blue-500/50 group-hover:shadow-lg group-hover:shadow-blue-500/20 group-hover:scale-[1.01] group-hover:-translate-y-0.5"
                        placeholder={t('contact.form.subject_placeholder')}
                      />
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
                        📝
                      </div>
                    </div>
                  </div>
                  
                  {/* Message Field */}
                  <div className="group">
                    <label htmlFor="message" className="block text-gray-300 text-sm font-semibold mb-4 flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2"></span>
                      {t('contact.form.message')}
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-8 py-5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/60 focus:ring-4 focus:ring-purple-500/20 transition-all duration-100 group-hover:border-purple-500/50 group-hover:shadow-lg group-hover:shadow-purple-500/20 group-hover:scale-[1.01] group-hover:-translate-y-0.5 resize-none"
                        placeholder={t('contact.form.message_placeholder')}
                      />
                      <div className="absolute right-4 top-6 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
                        💬
                      </div>
                    </div>
                                      </div>
                  </div>
                  
                  {/* Submit Button - Senior+ Level */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden mt-auto"
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ 
                      scale: 1.02,
                      rotateY: 5,
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-5 px-8 rounded-2xl font-bold text-xl transition-all duration-500 relative overflow-hidden ${
                      isSubmitting
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 shadow-2xl hover:shadow-purple-500/30'
                    }`}
                  >
                    {/* Animated Background */}
                    <motion.div
                      animate={{
                        background: [
                          "linear-gradient(45deg, #8b5cf6, #ec4899, #3b82f6)",
                          "linear-gradient(45deg, #ec4899, #3b82f6, #8b5cf6)",
                          "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)",
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
                    />
                    
                    {/* Button Content */}
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="mr-3"
                          >
                            ⏳
                          </motion.div>
                          {t('contact.form.sending')}
                        </>
                      ) : (
                        <>
                          <span className="mr-3">🚀</span>
                          {t('contact.form.submit')}
                        </>
                      )}
                    </span>
                  </motion.button>
                </motion.div>

                {/* Status Messages - Senior+ Level */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="mt-6 p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border-2 border-green-500/40 rounded-2xl text-green-300 text-center relative overflow-hidden"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="text-2xl mb-2"
                    >
                      ✅
                    </motion.div>
                    {t('contact.form.success')}
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="mt-6 p-6 bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-sm border-2 border-red-500/40 rounded-2xl text-red-300 text-center relative overflow-hidden"
                  >
                    <motion.div
                      animate={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="text-2xl mb-2"
                    >
                      ❌
                    </motion.div>
                    {errorMessage || t('contact.form.error')}
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Info - Senior+ Level */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative overflow-hidden bg-gradient-to-br from-black/40 via-purple-900/20 to-pink-900/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500 group"
              >
                {/* Animated Background */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
                />
                
                <h3 className="text-3xl font-bold text-white mb-8 relative z-10">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    {t('contact.info.title')}
                  </span>
                </h3>
                
                <div className="space-y-6 relative z-10">
                  {/* Email Card */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.05, 
                      y: -8,
                      rotateY: 5,
                    }}
                    className="group/item flex items-center space-x-6 p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.8 }}
                      className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover/item:shadow-cyan-500/50"
                    >
                      <span className="text-3xl">📧</span>
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-gray-300 text-sm font-medium mb-1">{t('contact.info.email')}</p>
                      <p className="text-white font-bold text-lg group-hover/item:text-cyan-300 transition-colors duration-300">elfin@example.com</p>
                    </div>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="text-cyan-400 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                    >
                      →
                    </motion.div>
                  </motion.div>
                  
                  {/* Location Card */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.05, 
                      y: -8,
                      rotateY: -5,
                    }}
                    className="group/item flex items-center space-x-6 p-6 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl border border-pink-500/30 hover:border-pink-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/20"
                  >
                    <motion.div
                      whileHover={{ rotate: -360, scale: 1.2 }}
                      transition={{ duration: 0.8 }}
                      className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover/item:shadow-pink-500/50"
                    >
                      <span className="text-3xl">📍</span>
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-gray-300 text-sm font-medium mb-1">{t('contact.info.location')}</p>
                      <p className="text-white font-bold text-lg group-hover/item:text-pink-300 transition-colors duration-300">{t('contact.info.location_value')}</p>
                    </div>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      className="text-pink-400 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                    >
                      →
                    </motion.div>
                  </motion.div>
                  
                  {/* Hours Card */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.05, 
                      y: -8,
                      rotateY: 5,
                    }}
                    className="group/item flex items-center space-x-6 p-6 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl border border-blue-500/30 hover:border-blue-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.8 }}
                      className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover/item:shadow-blue-500/50"
                    >
                      <span className="text-3xl">⏰</span>
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-gray-300 text-sm font-medium mb-1">{t('contact.info.hours')}</p>
                      <p className="text-white font-bold text-lg group-hover/item:text-blue-300 transition-colors duration-300">{t('contact.info.hours_value')}</p>
                    </div>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="text-blue-400 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                    >
                      →
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Social Links - Senior+ Level */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                viewport={{ once: true }}
                className="relative overflow-hidden bg-gradient-to-br from-black/40 via-purple-900/20 to-pink-900/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500 group"
              >
                {/* Animated Background */}
                <motion.div
                  animate={{
                    scale: [1.1, 1, 1.1],
                    opacity: [0.3, 0.6, 0.3],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full blur-3xl"
                />
                
                <h3 className="text-3xl font-bold text-white mb-8 relative z-10">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    {t('contact.social.title')}
                  </span>
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 30, scale: 0.8 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.15, 
                        y: -15,
                        rotateY: 15,
                        rotateZ: 5,
                      }}
                      whileTap={{ scale: 0.95 }}
                      className={`group relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-md border-2 border-transparent hover:border-purple-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 ${social.color}`}
                    >
                      {/* Animated Background */}
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      
                      {/* Icon Container */}
                      <motion.div
                        whileHover={{ 
                          scale: 1.3,
                          rotate: [0, -15, 15, 0],
                        }}
                        className="relative z-10 w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 mb-4 mx-auto"
                      >
                        <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                          {social.icon}
                        </span>
                      </motion.div>
                      
                      {/* Text */}
                      <div className="relative z-10 text-center">
                        <div className="font-bold text-lg text-white group-hover:text-purple-300 transition-colors duration-300 mb-1">
                          {social.name}
                        </div>
                        <div className="text-xs text-gray-400 group-hover:text-purple-200 transition-colors duration-300">
                          {social.name === 'Instagram' && 'Follow me'}
                          {social.name === 'LinkedIn' && 'Connect'}
                          {social.name === 'Behance' && 'View work'}
                          {social.name === 'Dribbble' && 'See designs'}
                          {social.name === 'Email' && 'Get in touch'}
                        </div>
                      </div>
                      
                      {/* Hover Effect */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl"
                      />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
  );
} 