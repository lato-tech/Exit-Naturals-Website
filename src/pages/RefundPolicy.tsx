import React from 'react';
export function RefundPolicy() {
  return <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Refund & Return Policy
        </h1>
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Return Policy
            </h2>
            <p className="text-gray-600 mb-4">
              We accept returns within 30 days of purchase under the following
              conditions:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Product must be unused and in original packaging</li>
              <li>Product must not be opened or tampered with</li>
              <li>Original receipt or proof of purchase is required</li>
              <li>
                Return shipping costs are the responsibility of the customer
              </li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Refund Process
            </h2>
            <p className="text-gray-600 mb-4">Once we receive your return:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>We will inspect the returned item</li>
              <li>You will receive an email confirming the refund</li>
              <li>Refund will be processed to original payment method</li>
              <li>Please allow 5-7 business days for refund to appear</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Non-Returnable Items
            </h2>
            <p className="text-gray-600 mb-4">
              The following items cannot be returned:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Opened or used products</li>
              <li>Products without original packaging</li>
              <li>Products damaged by customer misuse</li>
              <li>Clearance or sale items</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about our refund policy, please contact
              us at:
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