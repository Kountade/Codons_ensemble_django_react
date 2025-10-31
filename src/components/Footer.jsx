// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HiAcademicCap, 
  HiMail, 
  HiPhone, 
  HiLocationMarker,
  HiGlobe,
  HiBookOpen
} from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-700 to-pink-600 dark:from-gray-800 dark:to-gray-900 text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Colonne 1 - Présentation */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <HiAcademicCap className="text-2xl text-white" />
              <span className="text-xl font-bold text-white">
                Codons Ensemble
              </span>
            </div>
            <p className="text-white/90 text-sm leading-relaxed mb-4">
              Votre plateforme d'apprentissage pour maîtriser les technologies modernes. 
              Formations pratiques et projets concrets pour booster votre carrière en développement.
            </p>
            <div className="flex items-center space-x-2 text-sm text-white/80">
              <HiGlobe className="text-white" />
              <span>Formations 100% en ligne</span>
            </div>
          </div>

          {/* Colonne 2 - Formations */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">
              Nos Formations
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/program" 
                  className="text-white/90 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                >
                  <HiBookOpen className="text-sm" />
                  <span>Développement Web</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/program" 
                  className="text-white/90 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                >
                  <HiBookOpen className="text-sm" />
                  <span>JavaScript Avancé</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/program" 
                  className="text-white/90 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                >
                  <HiBookOpen className="text-sm" />
                  <span>React & Next.js</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/program" 
                  className="text-white/90 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                >
                  <HiBookOpen className="text-sm" />
                  <span>Node.js Backend</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 - Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-white/90 hover:text-white transition-colors duration-200"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-white/90 hover:text-white transition-colors duration-200"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link 
                  to="/program" 
                  className="text-white/90 hover:text-white transition-colors duration-200"
                >
                  Programmes
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-white/90 hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4 - Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-lg">
              Contactez-nous
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-white/90">
                <HiMail className="text-white text-lg" />
                <span className="text-sm">contact@codons-ensemble.com</span>
              </li>
              <li className="flex items-center space-x-3 text-white/90">
                <HiPhone className="text-white text-lg" />
                <span className="text-sm">+33 1 84 88 48 48</span>
              </li>
              <li className="flex items-center space-x-3 text-white/90">
                <HiLocationMarker className="text-white text-lg" />
                <span className="text-sm">Paris, France</span>
              </li>
            </ul>
            
            {/* Horaires */}
            <div className="mt-4 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <p className="text-xs text-white/80">
                <strong>Support:</strong> Lun - Ven • 9h - 18h
              </p>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-white/90 text-sm">
                © {new Date().getFullYear()} <strong>Codons Ensemble</strong> - 
                Tous droits réservés. 💻
              </p>
            </div>
            
            {/* Mentions légales */}
            <div className="flex space-x-6 text-sm">
              <Link 
                to="/privacy" 
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                Confidentialité
              </Link>
              <Link 
                to="/terms" 
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;