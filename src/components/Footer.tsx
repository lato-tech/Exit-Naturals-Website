import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, FacebookIcon, InstagramIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer id="contact" className="w-full bg-green-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
              <p className="mb-4 text-green-100">
                Stay updated with our latest natural pest control solutions and
                environmental initiatives.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300 transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="hover:text-green-300 transition-colors">
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>
          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-green-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-green-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-green-300 transition-colors">
                  Our Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-4">Policies</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms-conditions" className="hover:text-green-300 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-green-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPinIcon className="mr-2 mt-1 flex-shrink-0" size={18} />
                <span>
                  P.O. Box #4, Dhangu Road, Pathankot, Punjab, India - 145001
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="mr-2 flex-shrink-0" size={18} />
                <span>+91-186-2225256, 9988625256</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="mr-2 flex-shrink-0" size={18} />
                <span>info@exitnaturals.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-green-700 mt-12 pt-8 text-center text-sm text-green-200">
          <p>© {currentYear} Exit Naturals</p>
        </div>
      </div>
    </footer>;
}