import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Briefcase } from 'lucide-react';
import type { PortfolioData } from '../types/portfolio';

interface ExperienceProps {
  data: PortfolioData;
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  const experiences = data.experience;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-nebula-900 via-space-900 to-cosmic-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_rgba(120,119,198,0.2),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(255,119,198,0.1),_transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-space-400 to-cosmic-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A timeline of my professional growth and the amazing projects I've worked on
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-space-400 via-cosmic-400 to-nebula-400"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-space-400 to-cosmic-400 rounded-full border-4 border-gray-900 z-10"
                whileHover={{ scale: 1.5 }}
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(79, 70, 229, 0.7)',
                    '0 0 0 10px rgba(79, 70, 229, 0)',
                    '0 0 0 0 rgba(79, 70, 229, 0)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Experience Card */}
              <motion.div
                className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="hover:border-space-400/50 transition-all duration-300">
                  <div className="professional-card rounded-2xl p-6 border border-white/10 hover:border-space-400/50 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{experience.position}</h3>
                        <div className="flex items-center space-x-2 mb-2">
                          <Briefcase size={16} className="text-space-400" />
                          <span className="text-space-300 font-medium">{experience.company}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{experience.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin size={14} />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <p className="text-gray-300 text-sm">
                        {experience.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="px-2 py-1 bg-space-500/20 text-space-300 rounded-md text-xs font-medium"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="text-cosmic-300 text-xs flex items-start space-x-2"
                          >
                            <span className="w-1 h-1 bg-cosmic-400 rounded-full mt-1.5 flex-shrink-0"></span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute -top-10 -right-10 opacity-10"
          animate={{ rotate: 360, y: [0, -20, 0] }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            y: { duration: 4, repeat: Infinity }
          }}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-space-400/20 to-cosmic-400/20 rounded-full"></div>
        </motion.div>

        <motion.div
          className="absolute -bottom-10 -left-10 opacity-10"
          animate={{ rotate: -360, x: [0, 20, 0] }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
            x: { duration: 5, repeat: Infinity }
          }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-nebula-400/20 to-space-400/20 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;