import React from 'react';
export function ShippingPolicy() {
  return <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Shipping Policy
        </h1>
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Processing Time
            </h2>
            <p className="text-gray-600 mb-4">
              All orders are processed within 1-2 business days. Orders placed
              on weekends or holidays will be processed the next business day.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Shipping Methods
            </h2>
            <p className="text-gray-600 mb-4">
              We offer the following shipping methods:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Standard Shipping (3-5 business days)</li>
              <li>Express Shipping (1-2 business days)</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Shipping Rates
            </h2>
            <p className="text-gray-600 mb-4">Shipping rates vary based on:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Total order weight</li>
              <li>Delivery location</li>
              <li>Shipping method selected</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              For any shipping-related queries, please contact us at:
            </p>
            <div className="text-gray-600">
              <p>Exit Naturals</p>
              <p>P.O. Box #4, Dhangu Road</p>
              <p>Pathankot, Punjab, India - 145001</p>
              <p>Email: info@exitnaturals.com</p>
              <p>Phone: +91-186-2225256, 9988625256</p>
            </div>
          </section>
        </div>
      </div>
    </div>;
}