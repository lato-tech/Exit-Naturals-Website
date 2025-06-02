import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheckIcon, LeafIcon } from 'lucide-react';
export function HeroSection() {
  return <section className="w-full bg-gradient-to-r from-green-50 to-green-100 py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Natural Protection for Your Home
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Eco-friendly, non-toxic pest control solutions that are safe for
            your family and the environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/products" className="bg-green-700 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-green-800 transition-colors text-center">
              Explore Products
            </Link>
            <Link to="/about" className="bg-white text-green-700 border border-green-700 px-6 py-3 rounded-md text-lg font-medium hover:bg-green-50 transition-colors text-center">
              Learn More
            </Link>
          </div>
          <div className="flex items-center mt-8 space-x-8">
            <div className="flex items-center">
              <ShieldCheckIcon className="text-green-700 mr-2" size={20} />
              <span className="text-gray-700">Non-toxic</span>
            </div>
            <div className="flex items-center">
              <LeafIcon className="text-green-700 mr-2" size={20} />
              <span className="text-gray-700">Eco-friendly</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="https://images.unsplash.com/photo-1626808642875-0aa545482dfb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500&q=80" alt="Natural pest control products" className="rounded-lg shadow-lg max-w-full h-auto" />
        </div>
      </div>
    </section>;
}