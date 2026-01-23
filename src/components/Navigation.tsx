import React from 'react';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { setActiveSection, toggleMenu } from '../redux/slices/uiSlice';
import { Menu, X, Home, User, Code, Briefcase, Mail, Clock } from 'lucide-react';
import type { PortfolioData } from '../types/portfolio';

interface NavigationProps {
  data: PortfolioData;
}

const Navigation: React.FC<NavigationProps> = ({ data }) => {
  const dispatch = useDispatch();
  const { activeSection, isMenuOpen } = useSelector((state: RootState) => state.ui);

  const allNavItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Clock, condition: data.experience && data.experience.length > 0 },
    { id: 'projects', label: 'Projects', icon: Briefcase, condition: data.projects && data.projects.length > 0 },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const navItems = allNavItems.filter(item => item.condition === undefined || item.condition);

  const handleNavClick = (sectionId: string) => {
    dispatch(setActiveSection(sectionId));
    dispatch(toggleMenu());
    
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile menu button */}
      <motion.button
        className="fixed top-6 right-6 z-50 lg:hidden bg-space-600 text-white p-3 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => dispatch(toggleMenu())}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-black/20 backdrop-blur-md rounded-full px-6 py-3">
        <div className="flex space-x-8">
          {navItems.map(({ id, label, icon: Icon }) => (
            <motion.button
              key={id}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                activeSection === id
                  ? 'bg-space-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick(id)}
            >
              <Icon size={18} />
              <span className="text-sm font-medium">{label}</span>
            </motion.button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <motion.nav
        className={`fixed inset-0 z-40 lg:hidden bg-black/95 backdrop-blur-md ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map(({ id, label, icon: Icon }) => (
            <motion.button
              key={id}
              className={`flex items-center space-x-4 px-8 py-4 rounded-full text-xl transition-all duration-300 ${
                activeSection === id
                  ? 'bg-space-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick(id)}
            >
              <Icon size={24} />
              <span className="font-medium">{label}</span>
            </motion.button>
          ))}
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;