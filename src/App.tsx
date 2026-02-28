import { type FC } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { useScrollSpy } from './hooks/useScrollSpy';
import CustomCursor from './components/CustomCursor';
import ThemeToggle from './components/ThemeToggle';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import portfolioData from '../data.json';
import type { PortfolioData } from './types/portfolio';

const AppContent: FC = () => {
  useScrollSpy();

  const data = portfolioData as PortfolioData;

  return (
    <div className="bg-gray-900 text-white overflow-x-hidden" data-theme="dark">
      <CustomCursor />
      <ThemeToggle />
      <Navigation data={data} />
      {data.hero && <Hero data={data} />}
      {data.about && <About data={data} />}
      {data.about?.skills && <Skills data={data} />}
      {data.experience && data.experience.length > 0 && <Experience data={data} />}
      {data.projects && data.projects.length > 0 && <Projects data={data} />}
      {data.contact && <Contact data={data} />}
      <Footer data={data} />
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;