'use client';

import React, { useState, useEffect } from 'react';
import { MobileBottomNav, MobileTab } from '@/components/mobile/MobileBottomNav';
import { MobileAuth } from '@/components/mobile/MobileAuth';
import { MobileHome } from '@/components/mobile/MobileHome';
import { MobileMenu } from '@/components/mobile/MobileMenu';
import { MobileTakeawayForm } from '@/components/mobile/MobileTakeawayForm';
import { MobileTicket } from '@/components/mobile/MobileTicket';
import { MobileProfile } from '@/components/mobile/MobileProfile';
import { Smartphone, Monitor, ArrowLeft, RefreshCcw } from 'lucide-react';
import Link from 'next/link';

export default function MobileAppPage() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userData, setUserData] = useState<{ phone: string; name: string }>({ phone: '', name: '' });
  const [activeTab, setActiveTab] = useState<MobileTab>('home');
  const [showTakeawayForm, setShowTakeawayForm] = useState<boolean>(false);
  const [activeTicket, setActiveTicket] = useState<any>(null);
  const [isFrameView, setIsFrameView] = useState<boolean>(true);

  // Load state from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedUser = localStorage.getItem('puthu_mobile_user');
        if (savedUser) {
          setUserData(JSON.parse(savedUser));
          setIsLoggedIn(true);
        }

        const savedTicket = localStorage.getItem('puthu_active_ticket');
        if (savedTicket) {
          setActiveTicket(JSON.parse(savedTicket));
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleLoginSuccess = (phone: string, name: string) => {
    const data = { phone, name };
    setUserData(data);
    setIsLoggedIn(true);
    try {
      localStorage.setItem('puthu_mobile_user', JSON.stringify(data));
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData({ phone: '', name: '' });
    try {
      localStorage.removeItem('puthu_mobile_user');
    } catch (e) {
      console.error(e);
    }
  };

  const handleTicketSubmitted = (ticketData: any) => {
    setActiveTicket(ticketData);
    setShowTakeawayForm(false);
    setActiveTab('ticket');
  };

  return (
    <div className="min-h-screen bg-[#0E0A07] text-[#F8F4EC] font-sans flex flex-col items-center justify-start p-2 sm:p-6">
      
      {/* Top Controls Bar for Device Preview & Desktop Link */}
      <header className="w-full max-w-md mb-3 flex items-center justify-between bg-[#17110C] border border-[#3F2D23] px-3 py-2 rounded-xl text-xs">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-[#D49B42] hover:underline font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Web Desktop</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsFrameView(!isFrameView)}
            className="px-2.5 py-1 bg-[#241913] hover:bg-[#3F2D23] border border-[#3F2D23] text-[#F8F4EC] rounded-lg text-[10px] font-bold flex items-center gap-1"
          >
            {isFrameView ? <Monitor className="w-3 h-3" /> : <Smartphone className="w-3 h-3" />}
            <span>{isFrameView ? 'Tampilan Penuh' : 'Smartphone Frame'}</span>
          </button>
        </div>
      </header>

      {/* Main Container Viewport (375x812 Smartphone Screen) */}
      <div
        className={`w-full max-w-[380px] bg-[#17110C] border-[#3F2D23] shadow-2xl relative flex flex-col overflow-hidden ${
          isFrameView
            ? 'h-[812px] rounded-[40px] border-[10px] border-[#241913] ring-1 ring-[#3F2D23]'
            : 'min-h-[812px] rounded-2xl border'
        }`}
      >
        {/* Smartphone Camera Notch & Status Bar */}
        {isFrameView && (
          <div className="w-full bg-[#17110C] pt-2 pb-1 px-6 flex justify-between items-center text-[10px] font-bold text-[#C5B8A8] shrink-0 border-b border-[#3F2D23]/40 z-30">
            <span>16:30</span>
            {/* Dynamic Island / Speaker Notch */}
            <div className="w-24 h-4 bg-[#0E0A07] rounded-full flex items-center justify-center gap-1 border border-[#3F2D23]/50">
              <div className="w-2.5 h-2.5 rounded-full bg-[#2E7D32]/80" />
            </div>
            <span>5G 🔋 100%</span>
          </div>
        )}

        {/* Mobile Header Brand Bar */}
        <div className="bg-[#241913] border-b border-[#3F2D23] p-3 flex items-center justify-between shrink-0 z-30 shadow">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#2E7D32] flex items-center justify-center text-white font-black text-xs shadow">
              PL
            </div>
            <div>
              <h1 className="text-sm font-extrabold text-[#F8F4EC] leading-tight">Puthu Lanang</h1>
              <p className="text-[9px] text-[#D49B42] font-semibold">Mobile Smart Takeaway App</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#2E7D32] animate-ping" />
            <span className="text-[10px] text-[#2E7D32] font-bold">Celaket Online</span>
          </div>
        </div>

        {/* Scrollable Screen Content Body */}
        <main className="flex-1 overflow-y-auto custom-scrollbar">
          {!isLoggedIn ? (
            <MobileAuth onSuccess={({ phone, name }) => handleLoginSuccess(phone, name)} />
          ) : showTakeawayForm ? (
            <MobileTakeawayForm
              onBack={() => setShowTakeawayForm(false)}
              onSubmitSuccess={handleTicketSubmitted}
            />
          ) : (
            <>
              {activeTab === 'home' && (
                <MobileHome
                  userName={userData.name}
                  onNavigateTab={(tab) => {
                    if (tab === 'menu') {
                      setActiveTab('menu');
                    } else {
                      setActiveTab(tab);
                    }
                  }}
                />
              )}

              {activeTab === 'menu' && (
                <MobileMenu
                  onProceedToTakeaway={() => setShowTakeawayForm(true)}
                />
              )}

              {activeTab === 'ticket' && (
                <MobileTicket
                  ticketData={activeTicket}
                  onNewOrder={() => {
                    setActiveTab('menu');
                  }}
                />
              )}

              {activeTab === 'profile' && (
                <MobileProfile
                  userName={userData.name}
                  phone={userData.phone}
                  onLogout={handleLogout}
                />
              )}
            </>
          )}
        </main>

        {/* Bottom Navigation Bar */}
        {isLoggedIn && !showTakeawayForm && (
          <MobileBottomNav
            activeTab={activeTab}
            setActiveTab={(tab) => {
              setShowTakeawayForm(false);
              setActiveTab(tab);
            }}
            activeTicketCount={activeTicket ? 1 : 0}
          />
        )}
      </div>

      <footer className="mt-4 text-[11px] text-[#C5B8A8] text-center">
        Puthu Lanang Malang © 1935 - 2026 • Mobile Application End-User (UTS Web Framework)
      </footer>
    </div>
  );
}
