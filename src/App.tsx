import React, { useState, useRef, useEffect } from 'react';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hire from './pages/Hire';
import Sales from './pages/Sales';
import Contact from './pages/Contact';
import ComingSoon from './pages/ComingSoon';
import Terms from './pages/Terms';
import About from './pages/About';



function ContactInfo({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center space-x-4 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-black/40 transition-all duration-300">
      <div className="text-blue-300">{icon}</div>
      <span className="text-lg font-semibold text-blue-100">{text}</span>
    </div>
  );
}

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative pt-20">
        <div className="relative h-[600px]">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="./forklift-wearhouse_bg.png"
            alt="Warehouse with forklifts"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-end pb-16">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="flex flex-col md:flex-row md:justify-between md:items-end">
                <div className="flex flex-col items-start max-w-3xl">
                  <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
                    Forklift
                  </h1>
                  <h2 className="text-3xl md:text-5xl font-bold text-blue-300 mt-2 md:mt-4">
                    Fast, Flexible & Reliable
                  </h2>
                  <p className="text-lg md:text-2xl text-gray-200 mt-4 md:mt-8 max-w-2xl leading-relaxed">
                    Short-term and long-term hire available. With or without operator.
                    Delivered to your site within 24 hours.
                  </p>
                  <div className="mt-4 space-y-2">
                    <ContactInfo icon={<Phone />} text="Phone (24/7): 01582 967 987" />
                    <ContactInfo icon={<Phone />} text="Mobile / WhatsApp: +44 (0) 7534 629 583" />
                  </div>
                </div>
                <div className="mt-6 md:mt-0">
                  <Link to="/contact" className="bg-[#004AAD] text-white px-6 py-3 md:px-8 md:py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 inline-block">
                    Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Box */}
        <div ref={dropdownRef} className="absolute left-1/2 -translate-x-1/2 top-32 w-full max-w-2xl px-4 z-20 md:block hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-full bg-white px-6 py-4 flex items-center justify-between rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <span className="text-lg text-gray-600">What are you looking for?</span>
            <ChevronDown className={`transform transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isMenuOpen && (
            <div className="absolute w-full bg-white shadow-2xl rounded-xl mt-2">
              <div className="py-2">
                <Link to="/hire" className="block px-6 py-3 text-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Hire a forklift</Link>
                <Link to="/sales" className="block px-6 py-3 text-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Buy a forklift</Link>
                
                {/* Additional options with proper links */}
                <Link to="/services" className="block px-6 py-3 text-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Rent a forklift with operator</Link>
                <Link to="/services" className="block px-6 py-3 text-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Fix my forklift</Link>
                <Link to="/equipment" className="block px-6 py-3 text-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Forklift equipment</Link>
                <Link to="/services" className="block px-6 py-3 text-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Transport & removal</Link>
                <Link to="/services" className="block px-6 py-3 text-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Forklift operator</Link>
                <Link to="/contact" className="block px-6 py-3 text-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>Something else...</Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Request a Quote Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Need a forklift for your business?</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Whether you need a forklift for a day, a week, or long-term, we've got you covered. 
                  Fill out our quick quote form and we'll get back to you within 24 hours with the best options for your needs.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">No obligation quotes</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Fast response within 24 hours</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Competitive pricing guaranteed</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Link 
                    to="/contact" 
                    className="inline-block bg-[#004AAD] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
              <div className="md:w-1/3 bg-[#004AAD] p-8 md:p-12 flex flex-col justify-center">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-4">Contact Us Directly</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="mr-3 text-blue-300" />
                      <span>01582 967 987</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="mr-3 text-blue-300" />
                      <span>+44 (0) 7534 629 583</span>
                    </div>
                    <div className="mt-6">
                      <p className="text-blue-200">Email us at:</p>
                      <p className="text-white font-semibold">info@forklifthiresolutions.org</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-[#004AAD] text-white fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16 md:h-20">
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center">
                  <div className="bg-transparent">
                    <img src="./forklift-logo.png" alt="Forklift Logo" className="h-12 md:h-20 w-auto" style={{filter: 'brightness(1.4)', border: 'none', boxShadow: 'none'}} />
                  </div>
                </Link>
              </div>
              <div className="hidden md:flex space-x-4 lg:space-x-8">
                {['Home', 'About', 'Contact', 'Sales', 'Hire', 'Equipment', 'Services', 'Terms'].map((item) => (
                  <Link
                    key={item}
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-lg font-medium px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    {item === 'Terms' ? 'T&Cs' : item}
                  </Link>
                ))}
              </div>
              <div className="md:hidden">
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                  className="text-white p-2"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/equipment" element={<ComingSoon pageName="Equipment" />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/services" element={<ComingSoon pageName="Services" />} />
        </Routes>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div className="fixed inset-0 bg-black opacity-50" onClick={() => setMobileMenuOpen(false)}></div>
            <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#004AAD] shadow-xl z-50 overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                    <img src="./forklift-logo.png" alt="Forklift Logo" className="h-16 w-auto" style={{filter: 'brightness(1.2)'}} />
                  </Link>
                  <button 
                    onClick={() => setMobileMenuOpen(false)} 
                    className="text-white p-2"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="space-y-4">
                  {['Home', 'About', 'Contact', 'Sales', 'Hire', 'Equipment', 'Services', 'Terms'].map((item) => (
                    <Link
                      key={item}
                      to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block text-lg font-medium py-3 text-white hover:bg-blue-600 hover:text-white transition-colors duration-200 px-4 rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item === 'Terms' ? 'T&Cs' : item}
                    </Link>
                  ))}
                </div>
                <div className="mt-8 space-y-4">
                  <Link 
                    to="/contact" 
                    className="block w-full bg-white text-[#004AAD] px-6 py-3 rounded-lg text-center text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link 
                    to="/contact" 
                    className="block w-full bg-blue-700 text-white px-6 py-3 rounded-lg text-center text-lg font-semibold hover:bg-blue-800 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">About Us</h3>
                <p className="text-gray-400 leading-relaxed">
                  Your Trusted Partner for Lifting, Hire & Workforce Solutions. We are a UK-based, customer-focused company providing forklifts, operators, transport, and training — with speed, flexibility, and integrity at our core.
                </p>
                <p className="text-gray-400 leading-relaxed mt-3">
                  We're not just a hire company. We're your partner in solving day-to-day site, warehouse, and event challenges.
                </p>
                <Link to="/about" className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition-colors duration-200">
                  Learn more about us →
                </Link>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
                <ul className="space-y-4 text-gray-400">
                  <li>
                    <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-200">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="/equipment" className="text-gray-400 hover:text-white transition-colors duration-200">
                      Equipment
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">Services</h3>
                <ul className="space-y-4 text-gray-400">
                  <li>
                    <Link to="/hire" className="text-gray-400 hover:text-white transition-colors duration-200">
                      Forklift Hire
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-200">
                      Operator Hire
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-200">
                      Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-200">
                      Transport
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact</h3>
                <ul className="space-y-4 text-gray-400">
                  <li>Phone (24/7): 01582 967 987</li>
                  <li>Mobile / WhatsApp: +44 (0) 7534 629 583</li>
                  <li>info@forklifthiresolutions.org</li>
                  <li>122 Tenby Drive</li>
                  <li>Luton, Bedfordshire</li>
                  <li>LU4 9BN</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Forklift Hire Solutions Ltd. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;