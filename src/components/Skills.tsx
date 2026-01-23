import React from 'react';
import { motion } from 'framer-motion';
import type { PortfolioData } from '../types/portfolio';

interface SkillsProps {
  data: PortfolioData;
}

const Skills: React.FC<SkillsProps> = ({ data }) => {
  const skills = data.about.skills;

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-space-900 via-cosmic-900 to-nebula-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(120,119,198,0.1),_transparent_50%)]" />
      
      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-space-400 to-cosmic-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="professional-card rounded-full px-6 py-3 border border-white/10 hover:border-space-400/50 transition-all duration-300"
            >
              <span className="text-gray-300 font-medium">{skill}</span>
            </motion.div>
          ))}
        </div>

        {/* Floating Skills Icons */}
        <motion.div
          className="absolute -top-10 -left-10 opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full"></div>
        </motion.div>
        
        <motion.div
          className="absolute -bottom-10 -right-10 opacity-10"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-16 h-16 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;