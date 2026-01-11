'use client';

import React from 'react';
import { Camera, Users, TrendingUp, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useLanguage } from './context/LanguageContext';

export default function HomeScreen() {
  const { language, toggleLanguage, t } = useLanguage();
  const router = useRouter();

  const handleScanCrop = () => {
    router.push('/scan');
  };

  const handleForum = () => {
    router.push('/forum');
  };

  const handlePrices = () => {
    router.push('/prices');
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-green-600 via-green-500 to-lime-500 flex flex-col pb-24">
      {/* Header */}
      <div className="flex justify-between items-center px-5 pt-8 pb-5">
        <div className="flex items-center gap-3">
          <span className="text-4xl">🌾</span>
          <div>
            <h1 className="text-xl font-bold text-white">CropSaviour</h1>
            <p className="text-sm text-white/90">{t.smartFarmingAssistant}</p>
          </div>
        </div>
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 transition-colors px-3 py-2 rounded-full backdrop-blur-sm"
        >
          <Globe className="text-white w-5 h-5" />
          <span className="text-white font-semibold text-sm">
            {language === 'en' ? 'తె' : 'EN'}
          </span>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-5 pb-10">
        <h2 className="text-5xl md:text-6xl font-bold text-amber-300 text-center mb-2 drop-shadow-md">
          CropSaviour
        </h2>
        <p className="text-xl text-white text-center mb-5 font-semibold">
          {t.smartFarmingAssistant}
        </p>
        <p className="text-white text-center mb-10 text-base md:text-lg max-w-md leading-relaxed opacity-95">
          {t.homeDescription}
        </p>

        <div className="w-full max-w-sm flex flex-col gap-4">
          <button
            onClick={handleScanCrop}
            className="w-full bg-amber-300 hover:bg-amber-400 text-green-700 font-bold text-lg py-4 rounded-3xl flex items-center justify-center gap-3 shadow-lg transition-transform hover:scale-105 active:scale-95"
          >
            <Camera className="w-6 h-6" />
            {t.scanMyCrop}
          </button>

          <button
            onClick={handleForum}
            className="w-full bg-white/20 hover:bg-white/30 border border-white/30 text-white font-semibold text-lg py-4 rounded-3xl flex items-center justify-center gap-3 backdrop-blur-sm transition-transform hover:scale-105 active:scale-95"
          >
            <Users className="w-6 h-6" />
            {t.joinFarmerForum}
          </button>

          <button
            onClick={handlePrices}
            className="w-full bg-white/20 hover:bg-white/30 border border-white/30 text-white font-semibold text-lg py-4 rounded-3xl flex items-center justify-center gap-3 backdrop-blur-sm transition-transform hover:scale-105 active:scale-95"
          >
            <TrendingUp className="w-6 h-6" />
            {t.checkMandiPrices}
          </button>
        </div>
      </div>
    </div>
  );
}
