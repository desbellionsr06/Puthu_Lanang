'use client';

import React from 'react';
import { useStore } from '@/store/useStore';
import { MapPin, Navigation, Clock, MessageSquare, Flame, Users, CheckCircle2, ArrowRight } from 'lucide-react';

export const LocationView: React.FC = () => {
  const { setActiveView } = useStore();

  return (
    <div className="py-12 bg-[#17110C] animate-fadeIn min-h-screen space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D49B42]/15 border border-[#D49B42]/40 rounded-lg text-[11px] font-extrabold uppercase tracking-wider text-[#D49B42]">
              🏷️ PUSAT KULINER LEGENDARIS 1935
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F8F4EC]">
              Titik Gerai Asli di Pusat Malang
            </h1>
            <p className="text-xs sm:text-sm text-[#C5B8A8] leading-relaxed">
              Menyajikan kelezatan Puthu bambu otentik langsung dari tungku. Rasakan aroma daun pandan dan gula aren murni di bawah temaram malam Kota Malang.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-semibold">
              <span className="px-3 py-1 bg-[#241913] border border-[#3F2D23] rounded-lg text-[#D49B42] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#D49B42]" /> Jam Operasional: 17:30 - 21:30 WIB
              </span>
              <span className="px-3 py-1 bg-[#241913] border border-[#3F2D23] rounded-lg text-[#2E7D32] flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#2E7D32]" /> Status Antrean Live: 12 Porsi Menunggu (±10 Mnt)
              </span>
            </div>
          </div>

          {/* Gerai Banner Photo Card */}
          <div className="bg-[#241913] border border-[#3F2D23] rounded-2xl overflow-hidden shadow-xl max-w-xs shrink-0 relative group">
            <div className="h-44 bg-[#17110C] overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80"
                alt="Gerai Puthu Lanang Celaket Malang"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241913] via-transparent to-transparent" />
              <span className="absolute top-3 right-3 px-2.5 py-1 bg-[#2E7D32] text-white text-[10px] font-extrabold rounded-md shadow-md">
                Buka
              </span>
            </div>
            <div className="p-3 text-center bg-[#17110C]">
              <p className="text-xs font-bold text-[#F8F4EC]">Puthu Lanang Celaket</p>
              <p className="text-[10px] text-[#C5B8A8]">Gerai Utama Sejak 1935</p>
            </div>
          </div>
        </div>

        {/* Section LOKASI GERAI */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold text-[#F8F4EC]">LOKASI GERAI</h2>
            <button
              onClick={() => window.open("https://maps.google.com/?q=Puthu+Lanang+Malang+Jl+Jaksa+Agung+Suprapto+73", "_blank")}
              className="px-4 py-2 bg-[#2E7D32] text-white text-xs font-bold rounded-xl shadow-md"
            >
              Gerai Pusat
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Map Canvas Left */}
            <div className="lg:col-span-7 bg-[#241913] border border-[#3F2D23] rounded-3xl overflow-hidden shadow-2xl relative flex flex-col justify-between">
              
              <div className="relative h-[380px] w-full bg-[#1A1A1A] overflow-hidden flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 0 180 L 1000 180" stroke="#3F2D23" strokeWidth="12" />
                  <path d="M 450 0 L 450 500" stroke="#543E31" strokeWidth="10" />
                  <circle cx="450" cy="180" r="150" stroke="#D49B42" strokeWidth="1" strokeDasharray="4,4" fill="none" />
                </svg>

                {/* Map Marker Pin */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#2E7D32]/30 border-2 border-[#2E7D32] flex items-center justify-center animate-ping absolute" />
                  <div className="w-16 h-16 rounded-2xl bg-[#241913] border-2 border-[#D49B42] flex items-center justify-center shadow-2xl z-10 mb-2">
                    <MapPin className="w-9 h-9 text-[#D49B42]" />
                  </div>
                  <div className="bg-[#17110C] border border-[#3F2D23] px-4 py-2 rounded-xl shadow-xl max-w-xs text-center">
                    <p className="text-xs font-extrabold text-[#F8F4EC]">Puthu Lanang Malang (Original)</p>
                  </div>
                </div>

                {/* Bottom Address Overlay on Map */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#17110C]/95 backdrop-blur-md p-3.5 rounded-2xl border border-[#3F2D23] flex items-center justify-between gap-2">
                  <div className="text-xs text-[#C5B8A8] truncate">
                    <span className="font-bold text-[#F8F4EC]">Jl. Jaksa Agung Suprapto No.73, Samaan</span>
                    <p className="text-[10px] text-[#C5B8A8]">Kec. Klojen, Kota Malang (Dekat Klenteng Eng An Kiong)</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Puthu+Lanang+Malang+Jl+Jaksa+Agung+Suprapto+73"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#2E7D32] hover:bg-[#388E3C] text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-1.5 shrink-0 transition-all"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Buka Rute Maps</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Side Outlet Info Card */}
            <div className="lg:col-span-5 bg-[#241913] border border-[#3F2D23] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-[#D49B42]/15 border border-[#D49B42]/40 text-[#D49B42] text-[10px] font-extrabold rounded-md">
                    GERAI UTAMA • SEJAK 1935
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-[#17110C] border border-[#3F2D23] flex items-center justify-center text-[#D49B42]">
                    🏠
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-[#F8F4EC]">Puthu Lanang</h3>

                <div className="space-y-3 text-xs">
                  <div className="flex items-start gap-2 text-[#C5B8A8]">
                    <MapPin className="w-4 h-4 text-[#D49B42] shrink-0 mt-0.5" />
                    <span>
                      Jl. Jaksa Agung Suprapto No. 73, Samaan, Kec. Klojen, Kota Malang, Jawa Timur 65111 (Kawasan Celaket, dekat RS Lavalette).
                    </span>
                  </div>

                  <div className="flex items-start gap-2 text-[#C5B8A8]">
                    <Clock className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#F8F4EC]">Buka Setiap Hari: 17.30 – 21.30 WIB</span>
                      <p className="text-[11px] text-[#C5B8A8]/80 mt-0.5">
                        Sangat disarankan datang lebih awal sebelum antrean memuncak pada pukul 19.00 WIB.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-[#C5B8A8]">
                    <Navigation className="w-4 h-4 text-[#D49B42] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#F8F4EC]">Panduan Rute:</span>
                      <p className="text-[11px] text-[#C5B8A8]/80 mt-0.5 leading-relaxed">
                        Dari Alun-Alun Malang ke utara arah Jl. Basuki Rachmat, lurus terus melewati Gereja Ijen/Celaket. Posisi gerai berada di sisi kiri jalan sebelum lampu merah simpang Rampal.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Live Queue Box inside Card */}
                <div className="bg-[#17110C] p-4 rounded-xl border border-[#3F2D23] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#C5B8A8] uppercase tracking-wider font-bold">
                      ANTREAN LANGSUNG
                    </span>
                    <p className="text-sm font-extrabold text-[#2E7D32]">12 Porsi / ± 10 Menit</p>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-[#2E7D32] animate-ping" />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#3F2D23]">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Admin%20Puthu%20Lanang,%20saya%20ingin%20tanya%20antrean"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 bg-[#17110C] border border-[#2E7D32]/50 text-[#2E7D32] font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Tanya Antrean WA</span>
                </a>

                <button
                  onClick={() => setActiveView('custom')}
                  className="py-3 px-3 bg-[#2E7D32] hover:bg-[#388E3C] text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Pesan Tampah</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* 2 Split Feature Cards below map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Pantau Sisa Porsi & Waktu Tunggu */}
          <div className="bg-[#241913] border border-[#3F2D23] rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
            <div>
              <span className="text-[10px] font-extrabold text-[#D49B42] uppercase tracking-wider">
                ⚡ REAL-TIME KITCHEN STEAM MONITOR
              </span>
              <h3 className="text-2xl font-extrabold text-[#F8F4EC] mt-1">
                Pantau Sisa Porsi & Waktu Tunggu
              </h3>
              <p className="text-xs text-[#C5B8A8] mt-1 leading-relaxed">
                Setiap porsi Puthu dikukus secara presisi menggunakan cetakan bambu tradisional di atas tungku arang. Gunakan pelacak ini untuk memastikan kebagian sebelum adonan malam habis.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 bg-[#17110C] p-4 rounded-xl border border-[#3F2D23] text-center">
              <div>
                <p className="text-[10px] text-[#C5B8A8]">SISA ADONAN</p>
                <p className="text-base font-extrabold text-[#F8F4EC]">± 45 Porsi</p>
              </div>
              <div>
                <p className="text-[10px] text-[#C5B8A8]">RATA-RATA TUNGGU</p>
                <p className="text-base font-extrabold text-[#D49B42]">10–15 Mnt</p>
              </div>
              <div>
                <p className="text-[10px] text-[#C5B8A8]">STATUS TUNGKU</p>
                <p className="text-base font-extrabold text-[#2E7D32]">Membara</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <p className="text-[11px] text-[#C5B8A8]">
                ⓘ Pemesanan online ditutup otomatis jika kuota malam tercapai.
              </p>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 bg-[#17110C] border border-[#3F2D23] text-[#F8F4EC] font-bold text-xs rounded-xl flex items-center justify-center gap-2 shrink-0"
              >
                <span>Hotline WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 2: Pemesanan Tampah */}
          <div className="bg-[#241913] border border-[#3F2D23] rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-[10px] font-extrabold text-[#D49B42] uppercase tracking-wider">
                📌 LAYANAN ACARA & HAJATAN
              </span>
              <h3 className="text-2xl font-extrabold text-[#F8F4EC]">
                Pemesanan Tampah
              </h3>
              <p className="text-xs text-[#C5B8A8] leading-relaxed">
                Sajikan jajanan pasar legendaris Puthu Lanang untuk acara spesial Anda: pernikahan, arisan, seminar, atau rapat kantor. Dikemas eksklusif dalam tampah anyaman bambu asli dengan daun pisang segar.
              </p>

              <div className="space-y-1.5 text-xs text-[#2E7D32] pt-1">
                <p className="flex items-center gap-1.5">✓ Kombinasi Puthu, Cenil, Klepon, & Lupis sesuai permintaan</p>
                <p className="flex items-center gap-1.5">✓ Pemesanan minimal H-1 untuk penyiapan bahan segar</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#3F2D23]">
              <div>
                <p className="text-[10px] text-[#C5B8A8]">Mulai Dari</p>
                <p className="text-base font-extrabold text-[#D49B42]">Rp 150.000 / Tampah</p>
              </div>

              <button
                onClick={() => setActiveView('custom')}
                className="w-full sm:w-auto px-6 py-3 bg-[#D49B42] hover:bg-[#F3B251] text-[#17110C] font-extrabold text-xs rounded-xl shadow-lg flex items-center justify-center gap-2 shrink-0 transition-colors"
              >
                <span>📦 Pesan Tampah via WA</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
