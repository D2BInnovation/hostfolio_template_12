import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveSection } from '../redux/slices/uiSlice';

export const useScrollSpy = () => {
  const dispatch = useDispatch();
  const [activeSection, setActive] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (activeSection !== section) {
              setActive(section);
              dispatch(setActiveSection(section));
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, dispatch]);

  return activeSection;
};