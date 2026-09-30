'use client';

import React from 'react';
import { useStore } from '@/store/useStore';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AuthModal } from '@/components/AuthModal';
import { ToastContainer } from '@/components/ToastContainer';
import { HomeView } from '@/components/views/HomeView';
import { MenuView } from '@/components/views/MenuView';
import { HeritageView } from '@/components/views/HeritageView';
import { LocationView } from '@/components/views/LocationView';
import { CustomEventView } from '@/components/views/CustomEventView';
import { CheckoutView } from '@/components/views/CheckoutView';
import { TicketView } from '@/components/views/TicketView';

export default function Home() {
  const { activeView } = useStore();

  const renderActiveView = () => {
    switch (activeView) {
      case 'home':
        return <HomeView />;
      case 'menu':
        return <MenuView />;
      case 'heritage':
        return <HeritageView />;
      case 'location':
        return <LocationView />;
      case 'custom':
        return <CustomEventView />;
      case 'checkout':
        return <CheckoutView />;
      case 'ticket':
        return <TicketView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#17110C] text-[#F8F4EC] selection:bg-[#D49B42] selection:text-[#17110C]">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Body */}
      <main className="flex-1">
        {renderActiveView()}
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <AuthModal />
      <ToastContainer />
    </div>
  );
}
