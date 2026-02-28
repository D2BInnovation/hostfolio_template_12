import { type FC } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import type { PortfolioData } from '../types/portfolio';

interface FooterProps {
  data: PortfolioData;
}

const Footer: FC<FooterProps> = ({ data }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github': return Github;
      case 'linkedin': return Linkedin;
      case 'email': return Mail;
      default: return Github;
    }
  };

  const socialLinks = data.contact.socialLinks.map(link => ({
    icon: getIcon(link.icon),
    href: link.url,
    label: link.platform
  }));

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-space-900 to-cosmic-900 py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(120,119,198,0.1),_transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <div className="text-center">
          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-space-500 to-cosmic-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mb-8"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-space-400/50 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                title={link.label}
              >
                <link.icon size={20} className="text-gray-300 group-hover:text-white transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="space-y-2">
            <motion.p
              className="text-gray-300 flex items-center justify-center space-x-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart size={16} className="text-space-400 fill-current" />
              </motion.span>
              <span>by {import.meta.env.VITE_PORTFOLIO_NAME || 'Space Developer'}</span>
            </motion.p>

            <motion.p
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              © {new Date().getFullYear()} All rights reserved.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute -bottom-10 -left-10 opacity-5"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-space-400/20 to-cosmic-400/20 rounded-full"></div>
      </motion.div>

      <motion.div
        className="absolute -top-10 -right-10 opacity-5"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-nebula-400/20 to-space-400/20 rounded-full"></div>
      </motion.div>
    </footer>
  );
};

export default Footer;