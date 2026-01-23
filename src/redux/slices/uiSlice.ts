import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  theme: 'dark' | 'light';
  isMenuOpen: boolean;
  activeSection: string;
  cursorPosition: { x: number; y: number };
  scrollProgress: number;
}

const initialState: UIState = {
  theme: 'dark',
  isMenuOpen: false,
  activeSection: 'home',
  cursorPosition: { x: 0, y: 0 },
  scrollProgress: 0,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      // Apply theme to document root for CSS variables
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', state.theme);
      }
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload;
    },
    setCursorPosition: (state, action: PayloadAction<{ x: number; y: number }>) => {
      state.cursorPosition = action.payload;
    },
    setScrollProgress: (state, action: PayloadAction<number>) => {
      state.scrollProgress = action.payload;
    },
  },
});

export const { toggleTheme, toggleMenu, setActiveSection, setCursorPosition, setScrollProgress } = uiSlice.actions;
export default uiSlice.reducer;