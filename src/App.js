// App.js
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Contact from './pages/Contact'; // ✅ Ajout de la page Contact

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 font-['Times_New_Roman'] text-[16px]">
      {/* ✅ Navbar toujours visible */}
      <Navbar />

      {/* ✅ Contenu principal avec marge haute pour la navbar */}
      <main className="pt-24 md:pt-28">
        <Routes>
          {/* Page d’accueil */}
          <Route path="/" element={<Home />} />

          {/* Page des programmes */}
          <Route path="/program" element={<Programs />} />

          {/* Page À propos */}
          <Route path="/about" element={<About />} />

          {/* ✅ Nouvelle page Contact */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* ✅ Footer global */}
      <footer className="bg-gradient-to-r from-purple-700 to-pink-600 text-center py-6 text-white font-semibold mt-10 shadow-inner">
        © {new Date().getFullYear()} Techs Informatique — Tous droits réservés 💻
      </footer>
    </div>
  );
}

export default App;
