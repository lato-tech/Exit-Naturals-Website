import React from 'react';
import { ShieldCheckIcon, LeafIcon, HomeIcon, HeartIcon, SparklesIcon, DropletIcon } from 'lucide-react';
export function Features() {
  return <section id="features" className="w-full bg-green-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Exit Naturals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our products are designed with your family's safety and the
            environment in mind.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <ShieldCheckIcon className="text-green-700" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              100% Non-Toxic
            </h3>
            <p className="text-gray-600">
              Our formulations are free from harmful chemicals, making them safe
              for use around children and pets.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <LeafIcon className="text-green-700" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Eco-Friendly
            </h3>
            <p className="text-gray-600">
              Our products are biodegradable and environmentally responsible,
              minimizing impact on our planet.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <DropletIcon className="text-green-700" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Odorless Formula
            </h3>
            <p className="text-gray-600">
              Unlike chemical solutions, our products are odorless, allowing for
              comfortable indoor use.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <HomeIcon className="text-green-700" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Long-Lasting Protection
            </h3>
            <p className="text-gray-600">
              Our solutions provide durable protection, keeping your home safe
              for extended periods.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <HeartIcon className="text-green-700" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Family Safe
            </h3>
            <p className="text-gray-600">
              Designed with your family's health as our priority, ensuring peace
              of mind in your home.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <SparklesIcon className="text-green-700" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Effective Results
            </h3>
            <p className="text-gray-600">
              Natural doesn't mean less effective. Our products deliver
              commercial-grade results.
            </p>
          </div>
        </div>
      </div>
    </section>;
}