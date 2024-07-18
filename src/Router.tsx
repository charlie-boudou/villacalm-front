import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Construction } from './pages/Construction';
import { Contact } from './pages/Contact';

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/construction" element={<Construction />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export { Router };