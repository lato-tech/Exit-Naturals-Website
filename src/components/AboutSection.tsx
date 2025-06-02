import React from 'react';
export function AboutSection() {
  return <section id="about" className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500&q=80" alt="Exit Naturals team" className="rounded-lg shadow-lg max-w-full h-auto" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About Exit Naturals
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At Exit Naturals, we're committed to providing effective pest
              control solutions that don't compromise on safety. Our journey
              began with a simple question: why should families have to choose
              between a pest-free home and a chemical-free environment?
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Founded by experts in sustainable chemistry and environmental
              science, we've developed innovative formulations that harness the
              power of nature to protect your home and loved ones.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is to revolutionize pest control through natural,
              eco-friendly products that deliver professional results without
              the harmful side effects of traditional chemical solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-green-50 px-6 py-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-1">10+ Years</h3>
                <p className="text-gray-600">Industry Experience</p>
              </div>
              <div className="bg-green-50 px-6 py-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-1">100%</h3>
                <p className="text-gray-600">Natural Ingredients</p>
              </div>
              <div className="bg-green-50 px-6 py-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-1">50,000+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}