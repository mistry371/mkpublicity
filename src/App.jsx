import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/chatbot/ChatWidget';
import PageTransition from './components/PageTransition';
import CustomCursor from './components/CustomCursor';
import NeedsAnalysisModal from './components/NeedsAnalysisModal';

// Context
import { ModalProvider, useModal } from './context/ModalContext';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Industries from './pages/Industries';
import Portfolio from './pages/Portfolio';
import Process from './pages/Process';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

// Global Modal Wrapper Component
function GlobalModal() {
  const { isModalOpen, closeModal } = useModal();
  return <NeedsAnalysisModal isOpen={isModalOpen} onClose={closeModal} />;
}

function App() {
  const location = useLocation();

  return (
    <ModalProvider>
      <CustomCursor />
      <GlobalModal />
      <div className="app-container">
        <Navbar />
        
        <main className="main-content">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
              <Route path="/services/:slug" element={<PageTransition><ServiceDetail /></PageTransition>} />
              <Route path="/industries" element={<PageTransition><Industries /></PageTransition>} />
              <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
              <Route path="/process" element={<PageTransition><Process /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </main>
        
        <Footer />
        <ChatWidget />
      </div>
    </ModalProvider>
  );
}

export default App;
