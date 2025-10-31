// App.js
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // ✅ Import du nouveau Footer
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 font-['Times_New_Roman'] text-[16px]">
      {/* ✅ Navbar toujours visible */}
      <Navbar />

      {/* ✅ Contenu principal avec marge haute pour la navbar */}
      <main className="pt-24 md:pt-28 min-h-screen">
        <Routes>
          {/* Page d'accueil */}
          <Route path="/" element={<Home />} />

          {/* Page des programmes */}
          <Route path="/program" element={<Programs />} />

          {/* Page À propos */}
          <Route path="/about" element={<About />} />

          {/* ✅ Page Contact */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* ✅ Nouveau Footer professionnel */}
      <Footer />
    </div>
  );
}

export default App;