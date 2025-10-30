import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { 
  HiMenu, 
  HiX, 
  HiSearch, 
  HiUser, 
  HiShoppingBag,
  HiMoon,
  HiSun
} from 'react-icons/hi';

import logo from '../logo.png';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  // Initialiser le mode sombre depuis le localStorage ou la préférence système
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode));
    } else {
      setDarkMode(systemPrefersDark);
    }
  }, []);

  // Appliquer le mode sombre au document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Effet pour détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Menu items SANS sous-menus
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Courses', path: '/courses' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Program', path: '/program' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div 
      className="text-sm w-full fixed top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Top Banner */}
      <div className="text-center font-medium py-2 bg-gradient-to-r from-violet-600 via-purple-600 to-orange-500 relative overflow-hidden dark:from-gray-800 dark:via-gray-700 dark:to-gray-600">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent dark:via-gray-400/10"
          animate={{ x: [-100, 400] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
        />
        <p className="relative z-10 dark:text-gray-200">
          🚀 Exclusive Price Drop! Hurry, 
          <span className="font-bold underline underline-offset-2 ml-1">
            Offer Ends Soon!
          </span>
        </p>
      </div>

      {/* Main Navigation */}
      <motion.nav 
        className={`relative flex items-center justify-between px-6 lg:px-16 py-3 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
            : 'bg-white dark:bg-gray-900'
        }`}
        initial={false}
        animate={{ 
          paddingTop: isScrolled ? '0.5rem' : '0.75rem',
          paddingBottom: isScrolled ? '0.5rem' : '0.75rem'
        }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 z-50">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="EduTech Logo"
              className="w-14 h-14 object-contain rounded-lg"
            />
          </motion.div>
          <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-purple-400">
            Codons Ensemble
          </span>
        </Link>

        {/* Desktop Menu - Version simplifiée sans dropdowns */}
        <div className="hidden lg:flex items-center space-x-1">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                location.pathname === item.path
                  ? 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/30 font-semibold'
                  : 'text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={darkMode ? "Activer le mode clair" : "Activer le mode sombre"}
          >
            {darkMode ? <HiSun className="text-xl" /> : <HiMoon className="text-xl" />}
          </motion.button>

          {/* Search Bar */}
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.02 }}
          >
            <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </motion.div>

          {/* Action Buttons */}
          <motion.button 
            className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiUser className="text-xl" />
            <span>Login</span>
          </motion.button>

          <motion.button
            className="bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-500 dark:to-purple-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <HiShoppingBag />
            <span>Get Started</span>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-2">
          {/* Dark Mode Toggle - Mobile */}
          <motion.button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {darkMode ? <HiSun className="text-xl" /> : <HiMoon className="text-xl" />}
          </motion.button>

          <motion.button
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
          </motion.button>
        </div>

        {/* Mobile Menu - Version simplifiée */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-2xl border-t border-gray-200 dark:border-gray-700 overflow-hidden"
              style={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}
            >
              <div className="p-6 space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block py-3 px-4 rounded-lg transition-all duration-200 ${
                      location.pathname === item.path
                        ? 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/30 font-semibold'
                        : 'text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Action Buttons */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
                  <button className="w-full text-center py-3 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                    Login
                  </button>
                  <button className="w-full text-center py-3 bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-500 dark:to-purple-500 text-white rounded-full hover:shadow-lg transition-all duration-200">
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.div>
  );
}

export default Navbar;