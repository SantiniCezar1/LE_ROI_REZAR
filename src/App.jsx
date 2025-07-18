import { BrowserRouter as Router } from 'react-router-dom';
import Aside from './components/Aside';
import React from 'react';
import Home from './components/Home';
import './App.css';
import About from './components/About';
import ServicesSection from './components/Services';
import Portfolio from './components/Portfolio';
import BuyCourse from './components/BuyCourse';
import ContactSection from './components/Contact';

function App() {
  return (
    <Router>
      {/* Main container - Added overflow-hidden and removed potential spacing */}
      <div className="min-h-screen bg-darkblue-900 flex flex-col md:flex-row overflow-hidden">
        {/* Fixed sidebar with full height */}
        <Aside className="fixed md:relative inset-y-0 left-0 z-20 w-64 h-screen" />
        
        {/* Main content area */}
        <div className="flex-1 flex flex-col">
          {/* Home section - removed any potential spacing */}
          <section className="min-h-screen w-full bg-darkblue-900 -mt-0 pt-0">
            <Home />
          </section>
          
          {/* Scrollable content section */}
          <main className="flex-1 md:ml-64 bg-darkblue-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
              <About />
              <ServicesSection />
              <Portfolio />
              <BuyCourse />
              <ContactSection />
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;