import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { AntiTermite } from './pages/AntiTermite';
import { AntiFungal } from './pages/AntiFungal';
import { GardenPest } from './pages/GardenPest';
import { InsectRepellent } from './pages/InsectRepellent';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { ShippingPolicy } from './pages/ShippingPolicy';
import { TermsConditions } from './pages/TermsConditions';
import { RefundPolicy } from './pages/RefundPolicy';
import { Contact } from './pages/Contact';
export function App() {
  return <Router>
      <div className="flex flex-col min-h-screen w-full bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/anti-termite" element={<AntiTermite />} />
            <Route path="/products/anti-fungal" element={<AntiFungal />} />
            <Route path="/products/garden-pest" element={<GardenPest />} />
            <Route path="/products/insect-repellent" element={<InsectRepellent />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>;
}