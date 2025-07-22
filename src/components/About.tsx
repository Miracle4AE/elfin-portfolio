'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('skills');
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  
  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  const adobeSkills = [
    { name: 'Photoshop', level: 95, icon: '🎨', description: t('about.skills.photoshop') },
    { name: 'Illustrator', level: 90, icon: '✏️', description: t('about.skills.illustrator') },
    { name: 'InDesign', level: 85, icon: '📄', description: t('about.skills.indesign') },
    { name: 'After Effects', level: 80, icon: '🎬', description: t('about.skills.aftereffects') },
    { name: 'Premiere Pro', level: 75, icon: '🎥', description: t('about.skills.premiere') },
    { name: 'XD', level: 85, icon: '💻', description: t('about.skills.xd') },
  ];

  const services = [
    { name: t('about.services.logo'), icon: '🎨', description: t('about.services.logo_desc'), color: 'from-purple-500 to-pink-500' },
    { name: t('about.services.web'), icon: '💻', description: t('about.services.web_desc'), color: 'from-blue-500 to-purple-500' },
    { name: t('about.services.social'), icon: '📱', description: t('about.services.social_desc'), color: 'from-pink-500 to-red-500' },
    { name: t('about.services.print'), icon: '📄', description: t('about.services.print_desc'), color: 'from-green-500 to-blue-500' },
    { name: t('about.services.uiux'), icon: '🎯', description: t('about.services.uiux_desc'), color: 'from-purple-500 to-indigo-500' },
    { name: t('about.services.motion'), icon: '🎬', description: t('about.services.motion_desc'), color: 'from-orange-500 to-red-500' },
  ];

  const tabs = [
    { id: 'skills', name: 'Adobe Skills', icon: '🎨' },
    { id: 'services', name: t('about.services'), icon: '⚡' },
    { id: 'certification', name: t('about.certification'), icon: '🏆' },
  ];

  return (
    <motion.section
      ref={containerRef}
      style={{ y: springY, opacity: springOpacity, scale: springScale }}
      id="about" 
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden min-h-screen"
    >
      {/* Background Elements - Removed */}

      {/* Ultra Compact Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center w-full px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            {t('about.title')}
          </span>
        </h2>
        <div className="w-full flex justify-center mb-60">
          <p 
            className="max-w-4xl text-center text-lg text-gray-300 leading-relaxed px-4"
            dangerouslySetInnerHTML={{ __html: t('about.description') }}
          />
        </div>
      </motion.div>
        
        {/* Tabs - Separated from header with more space */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6 mt-20"
        >
          <div className="flex bg-black/30 backdrop-blur-md rounded-2xl p-4 border border-purple-500/20 gap-6">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-14 py-7 rounded-xl transition-all duration-300 flex items-center space-x-4 text-xl ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-3xl">{tab.icon}</span>
                <span className="font-semibold">{tab.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-[500px] w-full"
      >
        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {adobeSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-3xl">{skill.icon}</div>
                  <div>
                    <h3 className="text-white font-bold text-xl">{skill.name}</h3>
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 text-sm">{t('about.skills.proficiency')}</span>
                    <span className="text-purple-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                      className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 relative"
                    >

                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'services' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
              >
                <div className={`text-4xl mb-4 p-4 rounded-xl bg-gradient-to-r ${service.color} w-fit`}>
                  {service.icon}
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{service.name}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'certification' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center w-full"
          >
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/20 max-w-4xl mx-auto">
              <div className="text-8xl mb-8">🏆</div>
              <h3 className="text-white font-bold text-3xl mb-6">
                {t('about.certification.title')}
              </h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {t('about.certification.description')}
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-purple-500/20 rounded-xl p-4 border border-purple-500/30">
                  <div className="text-2xl mb-2">✅</div>
                  <div className="text-white font-semibold">Photoshop Expert</div>
                </div>
                <div className="bg-pink-500/20 rounded-xl p-4 border border-pink-500/30">
                  <div className="text-2xl mb-2">✅</div>
                  <div className="text-white font-semibold">Illustrator Expert</div>
                </div>
                <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-500/30">
                  <div className="text-2xl mb-2">✅</div>
                  <div className="text-white font-semibold">InDesign Expert</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.section>
  );
} 