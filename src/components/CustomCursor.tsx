import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { setCursorPosition } from '../redux/slices/uiSlice';
import { RootState } from '../redux/store';

const CustomCursor: React.FC = () => {
  const dispatch = useDispatch();
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const { cursorPosition } = useSelector((state: RootState) => state.ui);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      dispatch(setCursorPosition({ x: clientX, y: clientY }));
      
      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [dispatch]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          transform: 'translate(-50%, -50%)',
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div className="w-full h-full bg-white rounded-full shadow-lg animate-pulse" />
        <div className="absolute inset-0 w-full h-full border-2 border-white rounded-full animate-ping" />
      </motion.div>

      {/* Trail effect */}
      <motion.div
        ref={trailRef}
        className="fixed w-2 h-2 pointer-events-none z-40 bg-cosmic-400 rounded-full opacity-50"
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          transform: 'translate(-50%, -50%)',
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 10 }}
      />
    </>
  );
};

export default CustomCursor;