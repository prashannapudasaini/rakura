import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import Layout from './components/Layout';
import Home from './pages/Home';
import Story from './pages/Story';
import Factory from './pages/Factory';
import Teas from './pages/Teas';
import SustainabilityPage from './pages/SustainabilityPage';
import ContactPage from './pages/ContactPage';

import AllProducts from './pages/AllProducts';

function App() {
  return (
    <HelmetProvider>
      <div className="app-container relative bg-brand-white text-brand-black transition-colors duration-700">
        <Helmet>
          <title>Rakura Tea | Premium Nepalese Tea Experiences</title>
          <meta name="description" content="From the tea gardens of Nepal to tea lovers around the world. Discover Rakura's finest export-grade organic teas." />
        </Helmet>
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="story" element={<Story />} />
              <Route path="factory" element={<Factory />} />
              <Route path="teas" element={<Teas />} />
              <Route path="products" element={<AllProducts />} />
              <Route path="sustainability" element={<SustainabilityPage />} />
              <Route path="contact" element={<ContactPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;
