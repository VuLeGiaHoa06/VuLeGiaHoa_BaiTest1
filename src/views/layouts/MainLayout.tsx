import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useAppController } from '../../controllers/useAppController';
import { CheckCircle2 } from 'lucide-react';

export const MainLayout: React.FC = () => {
  const { toastMessage } = useAppController();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 selection:bg-indigo-500 selection:text-white relative">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {/* Toast notification nhẹ khi tương tác Add to cart */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#551760] text-white px-4 py-3 rounded-lg shadow-xl border border-white/20 animate-in fade-in slide-in-from-bottom-5 duration-300 pointer-events-none">
          <CheckCircle2 className="w-5 h-5 text-green-300 shrink-0" />
          <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
        </div>
      )}
    </div>
  );
};
