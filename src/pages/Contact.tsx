import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react';
export function Contact() {
  return <div className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Contact Us
        </h1>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPinIcon className="w-6 h-6 text-green-700 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-600">
                    P.O. Box #4, Dhangu Road
                    <br />
                    Pathankot, Punjab
                    <br />
                    India - 145001
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="w-6 h-6 text-green-700 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600">
                    Landline: +91-186-2225256
                    <br />
                    Mobile: +91-9988625256
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <MailIcon className="w-6 h-6 text-green-700 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">info@exitnaturals.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}