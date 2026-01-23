import React from 'react';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { Sun, Moon } from 'lucide-react';
import { RootState } from '../redux/store';
import { toggleTheme } from '../redux/slices/uiSlice';

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.ui);

  return (
    <motion.button
      className="fixed top-6 left-6 z-50 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:border-space-400/50 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => dispatch(toggleTheme())}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Sun size={20} className="text-yellow-400" />
        ) : (
          <Moon size={20} className="text-blue-400" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;