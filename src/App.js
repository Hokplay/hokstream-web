// Updated App.js to include routing between pages
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import IntroPage from './pages/IntroPage';
import AboutUs from './pages/AboutUs';
import SuccessCases from './pages/SuccessCases';
import Features from './pages/Features';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState('zh-TW');
  
  const toggleLanguage = () => {
    setLanguage(language === 'zh-TW' ? 'en' : 'zh-TW');
  };

  return (
    <Router>
      <div className="app">
        <Header language={language} toggleLanguage={toggleLanguage} />
        <Routes>
          <Route path="/" element={<IntroPage language={language} />} />
          <Route path="/about" element={<AboutUs language={language} />} />
          <Route path="/cases" element={<SuccessCases language={language} />} />
          <Route path="/features" element={<Features language={language} />} />
          {/* Add more routes for other pages here */}
        </Routes>
        <Footer language={language} />
      </div>
    </Router>
  );
}

export default App;