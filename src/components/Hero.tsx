import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Rocket, Download } from 'lucide-react';
import AnimatedText from './AnimatedText';
import ParticleBackground from './ParticleBackground';
import type { PortfolioData } from '../types/portfolio';

interface HeroProps {
  data: PortfolioData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-space-900 via-cosmic-900 to-nebula-900 opacity-90" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="relative w-32 h-32 mx-auto animate-float rounded-full">
              {/* Rotating & glowing ring */}
              <div className="absolute inset-0 rounded-full border-4 border-transparent animate-spin-slow ring-glow z-0"></div>

              {/* Profile Image */}
              <div className="w-full h-full rounded-full overflow-hidden z-10 relative ring-4 ring-white">
                <img
                  src="/assets/profile.png"
                  alt="Profile"
                  className="mt-1.5 w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>




          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-space-400 via-cosmic-400 to-nebula-400 bg-clip-text text-transparent">
              {data.hero.greeting} {data.personal.name}
            </span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl mb-2 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <AnimatedText
              text={[
                'Dotnet Core Developer',
                'Backend Developer',
                'React Developer',
                'Full Stack Developer',
                'React Native Developer',
              ]}
              className="text-xl md:text-2xl text-white"
              delay={500}
            />


          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {data.hero.description}
          </motion.p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { icon: Github, href: data.personal.github },
            { icon: Linkedin, href: data.personal.linkedin },
            { icon: Mail, href: `mailto:${data.personal.email}` },
          ].map(({ icon: Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center justify-center">
          {/* Primary Button */}
          <motion.button
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-space-500 to-cosmic-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-xs sm:text-lg font-medium hover:from-space-600 hover:to-cosmic-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const section = document.getElementById(data.hero.primaryButton.link.replace('#', ''));
              if (section) section.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
            {data.hero.primaryButton.text}
          </motion.button>

          {/* Secondary Button */}
          <motion.a
            href={data.hero.secondaryButton.link}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-cosmic-700 to-purple-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-xs sm:text-lg font-medium hover:from-cosmic-800 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            {data.hero.secondaryButton.text}
          </motion.a>
        </div>


        {/* Scroll Indicator */}
        <motion.div
          className="absolute pt-5 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="cursor-pointer"
            onClick={scrollToAbout}
            whileHover={{ scale: 1.1 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={32} className="text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;