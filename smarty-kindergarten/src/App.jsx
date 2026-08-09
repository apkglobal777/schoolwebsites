import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import ProgramDetails from './pages/ProgramDetails';
import ClassDetails from './pages/ClassDetails';
import Contacts from './pages/Contacts';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar stays fixed at the top across all pages */}
        <Navbar />

        {/* Dynamic Page Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<ProgramDetails />} />
            <Route path="/classes" element={<ClassDetails />} />
            <Route path="/contact" element={<Contacts />} />
          </Routes>
        </main>

        {/* Footer stays at the bottom across all pages */}
        <Footer />
      </div>
    </Router>
  );
}