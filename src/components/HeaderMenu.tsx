'use client';

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaTshirt, FaImages, FaCalendarCheck, FaComments } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

interface HeaderMenuProps {
  primaryColor?: string;
  secondaryColor?: string;
  language?: string;
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({
  primaryColor = '#45B7D1',
  secondaryColor = '#96CEB4',
  language = 'he'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'services', 'portfolio', 'booking', 'testimonials'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { id: 'home', text: 'דף הבית', icon: <FaHome className="ml-2" /> },
    { id: 'about', text: 'אודות', icon: <FaInfoCircle className="ml-2" /> },
    { id: 'services', text: 'שירותים', icon: <FaTshirt className="ml-2" /> },
    { id: 'portfolio', text: 'קולקציה', icon: <FaImages className="ml-2" /> },
    { id: 'booking', text: 'הזמנות', icon: <FaCalendarCheck className="ml-2" /> },
    { id: 'testimonials', text: 'המלצות', icon: <FaComments className="ml-2" /> },
  ];

  return (
    <header 
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold" style={{ color: primaryColor }}>
            חנות בגדים ביתא
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <FaTimes size={24} className="text-gray-800" />
              ) : (
                <FaBars size={24} className="text-gray-800" />
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 flex-row-reverse">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <ScrollLink
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={`flex items-center cursor-pointer hover:text-primary transition-colors px-2 py-1 rounded-md ${
                      activeSection === item.id 
                        ? 'text-white font-medium' 
                        : 'text-gray-700'
                    }`}
                    style={{
                      backgroundColor: activeSection === item.id ? primaryColor : 'transparent',
                      color: activeSection === item.id ? 'white' : 'inherit'
                    }}
                    onClick={() => setActiveSection(item.id)}
                  >
                    {item.icon}
                    {item.text}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="bg-white rounded-lg shadow-lg p-4">
            {menuItems.map((item) => (
              <li key={item.id} className="mb-3">
                <ScrollLink
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`flex items-center cursor-pointer py-2 px-3 rounded-md transition-colors ${
                    activeSection === item.id 
                      ? 'text-white font-medium' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  style={{
                    backgroundColor: activeSection === item.id ? primaryColor : 'transparent',
                  }}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsOpen(false);
                  }}
                >
                  {item.icon}
                  {item.text}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeaderMenu;