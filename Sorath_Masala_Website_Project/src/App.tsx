import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ProductsPage } from './pages/Products';
import { ContactPage } from './pages/Contact';

export function App() {
  const [activeView, setActiveView] = useState<'home' | 'about' | 'products' | 'contact'>('home');

  const handleNavigate = (sectionId: string) => {
    if (activeView !== 'home') {
      setActiveView('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F0E4] text-[#24140D] overflow-x-clip selection:bg-[#A51D25] selection:text-[#FFF9F0]">
      {/* Navigation */}
      <Navbar onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <div className="flex-1">
        {activeView === 'home' && <Home />}
        {activeView === 'about' && <About />}
        {activeView === 'products' && <ProductsPage />}
        {activeView === 'contact' && <ContactPage />}
      </div>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
