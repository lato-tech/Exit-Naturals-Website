import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, LeafIcon, ShieldIcon, BugIcon } from 'lucide-react';
export function ProductsPage() {
  const categories = [{
    title: 'Home Protection',
    description: 'Solutions for protecting your home from pests',
    icon: HomeIcon,
    products: [{
      name: 'Anti-Termite Solution',
      price: '₹229.00',
      image: "/01.jpg",
      link: '/products/anti-termite'
    }]
  }, {
    title: 'Garden Care',
    description: 'Natural solutions for your garden',
    icon: LeafIcon,
    products: [{
      name: 'Garden Pest Solution',
      price: '₹285.00',
      image: "/02.jpg",
      link: '/products/garden-pest'
    }, {
      name: 'Anti-Fungal Solution',
      price: '₹249.00',
      image: "/03.jpg",
      link: '/products/anti-fungal'
    }]
  }, {
    title: 'Indoor Solutions',
    description: 'Safe and effective indoor pest control',
    icon: ShieldIcon,
    products: [{
      name: 'Insect Repellent Solution',
      price: '₹299.00',
      image: "/04.jpg",
      link: '/products/insect-repellent'
    }]
  }];
  return <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Our Products
        </h1>
        {categories.map((category, index) => <div key={index} className="mb-16">
            <div className="flex items-center mb-6">
              <category.icon className="w-8 h-8 text-green-700 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">
                {category.title}
              </h2>
            </div>
            <p className="text-gray-600 mb-6">{category.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products.map((product, productIndex) => <Link key={productIndex} to={product.link} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">From {product.price}</p>
                    <span className="text-green-700 font-medium">
                      View Details →
                    </span>
                  </div>
                </Link>)}
            </div>
          </div>)}
      </div>
    </div>;
}