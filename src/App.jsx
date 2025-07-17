import { BrowserRouter as Router } from 'react-router-dom'
import Aside from './components/Aside'
import React from 'react'
import Home from './components/Home'
import './App.css'
import About from './components/About'
import ServicesSection from './components/Services'
import Portfolio from './components/Portfolio'
import BuyCourse from './components/BuyCourse'
import ContactSection from './components/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
        {/* Fixed sidebar */}
        <Aside className="fixed md:relative inset-y-0 left-0 z-20 w-64 h-full" />
        
        {/* Main content area */}
        <div className="flex-1 flex flex-col">
          {/* Home section (full viewport height) */}
          <section className="min-h-screen w-full">
            <Home />
          </section>
          
          {/* Scrollable content section */}
          <main className="flex-1 md:ml-64 transition-all duration-300">
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
  )
}

export default App