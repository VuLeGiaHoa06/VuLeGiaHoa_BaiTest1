import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './controllers/useAppController';
import { MainLayout } from './views/layouts/MainLayout';
import { HomePage } from './views/pages/HomePage';
import { DetailPage } from './views/pages/DetailPage';
import { ComingSoonPage } from './views/pages/ComingSoonPage';

export const App: React.FC = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ComingSoonPage pageTitle="Shop" />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/pages" element={<ComingSoonPage pageTitle="Pages" />} />
            <Route path="/pages/*" element={<ComingSoonPage pageTitle="Pages" />} />
            <Route path="/contact" element={<ComingSoonPage pageTitle="Contact" />} />
            <Route path="/login" element={<ComingSoonPage pageTitle="Login" />} />
            <Route path="/register" element={<ComingSoonPage pageTitle="Register" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
