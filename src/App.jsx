import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VillaOverviewSection from './components/VillaOverviewSection';
import VillaSpecsBar from './components/VillaSpecsBar';
import AmenitiesSection from './components/AmenitiesSection';
import RoomsSection from './components/RoomsSection';
import GallerySection from './components/GallerySection';
import GoogleMapsSection from './components/GoogleMapsSection';
import ContactFooter from './components/ContactFooter';
import ReservationModal from './components/ReservationModal';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [currentLang, setCurrentLang] = useState('PT');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [preselectedBooking, setPreselectedBooking] = useState(null);

  const handleOpenBooking = (preselectedData = null) => {
    setPreselectedBooking(preselectedData);
    setBookingModalOpen(true);
  };

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen w-full flex flex-col justify-between overflow-x-hidden transition-colors duration-400 ${
      isDark ? 'bg-[#353233] text-white theme-dark' : 'bg-[#fcfbfa] text-[#1a1919] theme-light'
    }`}>
      
      {/* Navbar */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking()} 
        theme={theme}
        setTheme={setTheme}
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
      />

      {/* Main Content Sections */}
      <main className="w-full">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} theme={theme} currentLang={currentLang} />

        {/* 2. Overview & Availability Widget */}
        <VillaOverviewSection onOpenBooking={handleOpenBooking} theme={theme} currentLang={currentLang} />

        {/* 3. Villa Specs Bar */}
        <VillaSpecsBar theme={theme} currentLang={currentLang} />

        {/* 4. Amenities & Spaces Grid */}
        <AmenitiesSection theme={theme} currentLang={currentLang} />

        {/* 5. Restaurant Rooms Showcase (Sala da Pipa & Sala da Oliveira) */}
        <RoomsSection onOpenBooking={handleOpenBooking} theme={theme} currentLang={currentLang} />

        {/* 6. Photo Gallery & Lightbox */}
        <GallerySection onOpenBooking={handleOpenBooking} theme={theme} currentLang={currentLang} />

        {/* 7. Embedded Google Maps (Replaces Attractions Grid as requested) */}
        <GoogleMapsSection theme={theme} currentLang={currentLang} />
      </main>

      {/* 8. Contact & Footer */}
      <ContactFooter theme={theme} currentLang={currentLang} />

      {/* Reservation Modal */}
      {bookingModalOpen && (
        <ReservationModal
          preselectedData={preselectedBooking}
          onClose={() => setBookingModalOpen(false)}
          theme={theme}
          currentLang={currentLang}
        />
      )}

    </div>
  );
}
