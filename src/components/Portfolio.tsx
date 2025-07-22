'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  year: string;
}

const ProjectCard = React.memo(({ project, onClick }: { project: Project; onClick: (project: Project) => void }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3 }}
    className="group cursor-pointer"
    onClick={() => onClick(project)}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick(project);
      }
    }}
    aria-label={`${project.title} projesini görüntüle`}
  >
    <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
      {/* Project Image */}
      <div className="relative h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Optimized Image */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
            {project.category === 'logo' && '🎨'}
            {project.category === 'web' && '💻'}
            {project.category === 'social' && '📱'}
            {project.category === 'print' && '📄'}
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
          <span className="text-white text-sm font-semibold">{project.year}</span>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-3 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  </motion.div>
));

ProjectCard.displayName = 'ProjectCard';

export default function Portfolio() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);


  const projects: Project[] = [
    {
      id: 1,
      title: t('portfolio.projects.techstart.title'),
      category: 'logo',
      image: '/projects/techstart-logo.jpg',
      description: t('portfolio.projects.techstart.description'),
      tags: ['Logo Design', 'Branding', 'Corporate Identity'],
      year: '2024'
    },
    {
      id: 2,
      title: t('portfolio.projects.ecofresh.title'),
      category: 'web',
      image: '/projects/ecofresh-website.jpg',
      description: t('portfolio.projects.ecofresh.description'),
      tags: ['Web Design', 'E-commerce', 'UI/UX', 'Responsive'],
      year: '2024'
    },
    {
      id: 3,
      title: t('portfolio.projects.fitnesspro.title'),
      category: 'social',
      image: '/projects/fitnesspro-campaign.jpg',
      description: t('portfolio.projects.fitnesspro.description'),
      tags: ['Social Media', 'Campaign Design', 'Instagram', 'Facebook'],
      year: '2024'
    },
    {
      id: 4,
      title: t('portfolio.projects.restaurant.title'),
      category: 'print',
      image: '/projects/restaurant-menu.jpg',
      description: t('portfolio.projects.restaurant.description'),
      tags: ['Print Design', 'Menu Design', 'Luxury Branding'],
      year: '2024'
    },
    {
      id: 5,
      title: t('portfolio.projects.healthapp.title'),
      category: 'web',
      image: '/projects/healthapp-ui.jpg',
      description: t('portfolio.projects.healthapp.description'),
      tags: ['Mobile Design', 'UI/UX', 'Health App', 'Accessibility'],
      year: '2024'
    },
    {
      id: 6,
      title: t('portfolio.projects.corporate.title'),
      category: 'print',
      image: '/projects/corporate-brochure.jpg',
      description: t('portfolio.projects.corporate.description'),
      tags: ['Print Design', 'Brochure', 'Corporate', 'Typography'],
      year: '2024'
    },
    {
      id: 7,
      title: t('portfolio.projects.artgallery.title'),
      category: 'logo',
      image: '/projects/artgallery-identity.jpg',
      description: t('portfolio.projects.artgallery.description'),
      tags: ['Logo Design', 'Exhibition', 'Art Direction', 'Print'],
      year: '2024'
    },
    {
      id: 8,
      title: t('portfolio.projects.travelapp.title'),
      category: 'web',
      image: '/projects/travelapp-interface.jpg',
      description: t('portfolio.projects.travelapp.description'),
      tags: ['UI Design', 'Travel App', 'Map Integration', 'Booking'],
      year: '2024'
    },
    {
      id: 9,
      title: t('portfolio.projects.fashion.title'),
      category: 'social',
      image: '/projects/fashion-social.jpg',
      description: t('portfolio.projects.fashion.description'),
      tags: ['Social Media', 'Fashion', 'Content Strategy', 'Trending'],
      year: '2024'
    }
  ];

  const categories = [
    { id: 'all', name: t('portfolio.filters.all'), count: projects.length, icon: '🌟' },
    { id: 'logo', name: t('portfolio.filters.logo'), count: projects.filter(p => p.category === 'logo').length, icon: '🎨' },
    { id: 'web', name: t('portfolio.filters.web'), count: projects.filter(p => p.category === 'web').length, icon: '💻' },
    { id: 'social', name: t('portfolio.filters.social'), count: projects.filter(p => p.category === 'social').length, icon: '📱' },
    { id: 'print', name: t('portfolio.filters.print'), count: projects.filter(p => p.category === 'print').length, icon: '📄' }
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects;
    return projects.filter(project => project.category === selectedCategory);
  }, [selectedCategory, projects]);

  const handleProjectClick = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <section
      id="portfolio" 
      className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Background Elements - Removed */}

      <div className="w-full px-8 sm:px-12 lg:px-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              {t('portfolio.title')}
            </span>
          </h2>
          <div className="flex flex-col items-center space-y-6">
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed text-center"
               dangerouslySetInnerHTML={{ __html: t('portfolio.description1') }}
            />
            <p className="text-lg text-gray-400 max-w-4xl leading-relaxed text-center"
               dangerouslySetInnerHTML={{ __html: t('portfolio.description2') }}
            />
            <p className="text-lg text-gray-300 max-w-3xl leading-relaxed text-center"
               dangerouslySetInnerHTML={{ __html: t('portfolio.description3') }}
            />
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-80"
        >
          <div className="flex flex-wrap justify-center gap-8 bg-black/50 backdrop-blur-md rounded-2xl p-6 border-2 border-purple-500/40">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                whileTap={{ scale: 0.95 }}
                style={{ transformOrigin: 'center' }}
                className={`px-8 py-4 rounded-xl transition-all duration-300 flex items-center space-x-3 text-lg font-semibold relative ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl shadow-purple-500/25'
                    : 'bg-black/40 text-gray-200 hover:text-white hover:bg-white/20 border border-gray-600 hover:border-purple-500/50'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span className="font-bold">{category.name} - {category.count} {t('portfolio.filters.count')}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={handleProjectClick}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🎨</div>
            <h3 className="text-white text-2xl font-bold mb-2">{t('portfolio.empty.title')}</h3>
            <p className="text-gray-400">{t('portfolio.empty.description')}</p>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/20"
            >
              <div className="relative h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl opacity-30">
                    {selectedProject.category === 'logo' && '🎨'}
                    {selectedProject.category === 'web' && '💻'}
                    {selectedProject.category === 'social' && '📱'}
                    {selectedProject.category === 'print' && '📄'}
                  </div>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-300"
                >
                  ✕
                </button>
              </div>
              
              <div className="p-8">
                <h2 className="text-white font-bold text-3xl mb-4">{selectedProject.title}</h2>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedProject.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">{t('portfolio.modal.year')}: {selectedProject.year}</span>
                  <span className="text-purple-400 font-semibold capitalize">{selectedProject.category}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 