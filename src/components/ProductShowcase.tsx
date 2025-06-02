import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldIcon, DropletIcon, LeafIcon, SparklesIcon } from 'lucide-react';
export function ProductShowcase() {
  const products = [{
    id: 1,
    name: 'Anti-termite Solution',
    price: '₹229.00',
    size: '500ml',
    image: "/01.jpg",
    icon: ShieldIcon,
    link: '/products/anti-termite'
  }, {
    id: 2,
    name: 'Insect Repellent Solution',
    price: '₹299.00',
    size: '500ml',
    image: "/04.jpg",
    icon: DropletIcon,
    link: '/products/insect-repellent'
  }, {
    id: 3,
    name: 'Garden Pest Solution',
    price: '₹285.00',
    size: '500ml',
    image: "/02.jpg",
    icon: LeafIcon,
    link: '/products/garden-pest'
  }, {
    id: 4,
    name: 'Anti-fungal Solution',
    price: '₹249.00',
    size: '500ml',
    image: "/03.jpg",
    icon: SparklesIcon,
    link: '/products/anti-fungal'
  }];
  return <section id="products" className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore Exit Works' Organic Pest & Insect Repellents collection – a
            haven of natural solutions crafted to keep unwanted guests at bay.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => <Link key={product.id} to={product.link} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {product.name} {product.size}
                </h3>
                <p className="text-gray-600 mb-4">From {product.price}</p>
                <span className="w-full inline-block bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition-colors text-center">
                  View Details
                </span>
              </div>
            </Link>)}
        </div>
      </div>
    </section>;
}