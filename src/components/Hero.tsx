'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Mouse position'ı -1 ile +1 arasında normalize et
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      
      // Y eksenini ters çevir (browser koordinatları ters)
      const normalizedY = -y;
      
      setMousePosition({ x, y: normalizedY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const floatingElements = [
    { icon: '🎨', delay: 0, duration: 4 },
    { icon: '💻', delay: 1, duration: 5 },
    { icon: '📱', delay: 2, duration: 4 },
    { icon: '✨', delay: 3, duration: 6 },
    { icon: '🚀', delay: 0.5, duration: 4 },
    { icon: '🎯', delay: 1.5, duration: 5 },
  ];

  // Yıldız parıltıları için sabit pozisyonlar (performance için azaltıldı)
  const sparkles = [
    { id: 1, x: 10, y: 20, size: 3, delay: 0, duration: 4 },
    { id: 2, x: 25, y: 35, size: 4, delay: 1, duration: 5 },
    { id: 3, x: 40, y: 15, size: 2, delay: 2, duration: 4 },
    { id: 4, x: 55, y: 45, size: 5, delay: 3, duration: 6 },
    { id: 5, x: 70, y: 25, size: 3, delay: 0.5, duration: 4 },
    { id: 6, x: 85, y: 60, size: 4, delay: 1.5, duration: 5 },
    { id: 7, x: 15, y: 70, size: 2, delay: 2.5, duration: 4 },
    { id: 8, x: 30, y: 80, size: 5, delay: 3.5, duration: 6 },
    { id: 9, x: 45, y: 55, size: 3, delay: 1, duration: 4 },
    { id: 10, x: 60, y: 85, size: 4, delay: 2, duration: 5 },
    { id: 11, x: 75, y: 40, size: 2, delay: 3, duration: 4 },
    { id: 12, x: 90, y: 75, size: 5, delay: 0, duration: 6 },
  ];

  return (
    <motion.section
      ref={containerRef}
      style={{ y: springY, opacity: springOpacity, scale: springScale }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-purple-900/20 to-black"
      id="home"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-blue-600/10"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))",
              "linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
              "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Floating Elements */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${20 + index * 15}%`,
              top: `${30 + (index % 2) * 40}%`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 180],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {element.icon}
          </motion.div>
        ))}

        {/* Yıldız Parıltıları */}
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute text-white drop-shadow-2xl"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              fontSize: `${sparkle.size}px`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: sparkle.duration,
              delay: sparkle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>

      {/* Mouse Follow Effect - Removed */}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            className="relative w-32 h-32 mx-auto mb-8"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >

            <div className="relative w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-4xl font-bold border-4 border-white/20">
              E
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            animate={{
              rotateX: mousePosition.y * 12,
              rotateY: mousePosition.x * 12,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            style={{ perspective: 1000 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
                          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              {t('hero.title')}
            </span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-8 font-light"
          >
            <span className="text-purple-400">{t('hero.subtitle').split(' & ')[0]}</span> &{' '}
            <span className="text-pink-400">{t('hero.subtitle').split(' & ')[1]}</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl text-lg shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
            >
              {t('hero.cta.portfolio')}
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-purple-500/50 text-purple-400 font-bold rounded-xl text-lg hover:bg-purple-500/10 transition-all duration-300"
            >
              {t('hero.cta.contact')}
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-purple-400 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
} 