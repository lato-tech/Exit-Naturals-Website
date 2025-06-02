import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src="/logo.png" alt="Exit Naturals" className="h-8 md:h-10 w-auto" />
          </Link>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-green-700 font-medium">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-green-700 font-medium">
            About Us
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-green-700 font-medium">
            Our Solutions
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-green-700 font-medium">
            Contact
          </Link>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white w-full px-4 py-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-green-700 font-medium" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-700 font-medium" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-green-700 font-medium" onClick={() => setIsMenuOpen(false)}>
              Our Solutions
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-700 font-medium" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>}
    </header>;
}