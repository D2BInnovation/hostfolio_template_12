import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Code, Rocket, Star, Zap } from 'lucide-react';
import type { PortfolioData } from '../types/portfolio';

interface AboutProps {
  data: PortfolioData;
}

const About: FC<AboutProps> = ({ data }) => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time.',
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency across all platforms.',
    },
    {
      icon: Star,
      title: 'Innovation',
      description: 'Embracing cutting-edge technologies to solve complex problems.',
    },
    {
      icon: Zap,
      title: 'Collaboration',
      description: 'Working effectively with teams to deliver exceptional results.',
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-space-900 to-cosmic-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(120,119,198,0.3),_transparent_50%)] bg-[radial-gradient(circle_at_80%_20%,_rgba(255,119,198,0.3),_transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-space-400 to-cosmic-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {data.about.description[0]}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.div
                className="professional-card rounded-2xl p-8 border border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
                <p className="text-gray-300 leading-relaxed">
                  {data.about.description[1]}
                </p>
              </motion.div>

              <motion.div
                className="professional-card rounded-2xl p-8 border border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">My Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  {data.about.description[2]}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-space-400/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-space-400 to-cosmic-400 rounded-full flex items-center justify-center mb-3">
                    <feature.icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Astronaut */}
        <motion.div
          className="absolute top-20 right-10 hidden xl:block"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="text-6xl opacity-20">🚀</div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;