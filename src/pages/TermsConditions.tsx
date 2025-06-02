import React from 'react';
export function TermsConditions() {
  return <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Terms & Conditions
        </h1>
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-600 mb-4">
              By accessing and placing an order with Exit Naturals, you confirm
              that you are in agreement with and bound by the terms and
              conditions contained in this document.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              2. Product Use
            </h2>
            <p className="text-gray-600 mb-4">
              Our products are intended for use as described on the product
              labels. Users agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Follow all usage instructions carefully</li>
              <li>Use products only for their intended purpose</li>
              <li>Store products safely and away from children</li>
              <li>Not modify or tamper with the products</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              3. Ordering & Payment
            </h2>
            <p className="text-gray-600 mb-4">
              When placing an order, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Pay the full amount when placing your order</li>
              <li>Use valid and authorized payment methods</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              4. Shipping & Delivery
            </h2>
            <p className="text-gray-600 mb-4">
              We strive to deliver products within the specified timeframe.
              However:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Delivery times are estimates and not guaranteed</li>
              <li>We are not responsible for delays outside our control</li>
              <li>Risk of loss transfers upon delivery</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              5. Contact Information
            </h2>
            <p className="text-gray-600 mb-4">
              For any questions regarding these terms, please contact us at:
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