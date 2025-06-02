import React from 'react';
export function PrivacyPolicy() {
  return <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Privacy Policy
        </h1>
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              We collect information that you provide directly to us, including
              when you:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Place an order</li>
              <li>Create an account</li>
              <li>Sign up for our newsletter</li>
              <li>Contact us for support</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Process your orders and payments</li>
              <li>Communicate with you about your orders</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our products and services</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Information Sharing
            </h2>
            <p className="text-gray-600 mb-4">
              We do not sell or rent your personal information to third parties.
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Service providers who assist in our operations</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Your Rights
            </h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about our Privacy Policy, please contact
              us at:
            </p>
            <div className="text-gray-600">
              <p>Exit Naturals</p>
              <p>P.O. Box #4, Dhangu Road</p>
              <p>Pathankot, Punjab</p>
              <p>India - 145001</p>
              <p>Landline: +91-186-2225256</p>
              <p>Mobile: +91-9988625256</p>
              <p>Email: info@exitnaturals.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>;
}