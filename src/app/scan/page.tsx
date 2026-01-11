'use client';

import React, { useRef } from 'react';
import { Camera, Image as ImageIcon, Globe, ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';
import { useDiseaseDetection } from '../hooks/useDiseaseDetection';
import { DiseaseResult } from '../components/DiseaseResult';

export default function ScanScreen() {
    const { language, toggleLanguage, t } = useLanguage();
    const router = useRouter();
    const { analyzeImage, result, isLoading, error, clearResult } = useDiseaseDetection();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handlePickImage = () => {
        fileInputRef.current?.click();
    };

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (typeof reader.result === 'string') {
                    analyzeImage(reader.result);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    if (result) {
        return (
            <div className="min-h-screen bg-white">
                <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-4 bg-slate-50 border-b border-slate-200">
                    <button
                        onClick={clearResult}
                        className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold text-sm"
                    >
                        {t.scanAgain}
                    </button>
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-1.5 bg-green-50 border border-green-600 px-3 py-2 rounded-full"
                    >
                        <Globe className="text-green-600 w-5 h-5" />
                        <span className="text-green-600 font-semibold text-sm">
                            {language === 'en' ? 'తె' : 'EN'}
                        </span>
                    </button>
                </div>
                <DiseaseResult result={result} />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-slate-50 border-b border-slate-200">
                <div className="flex items-center gap-2">
                    <button onClick={() => router.back()} className="p-1">
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    <h1 className="text-xl font-bold text-green-600">{t.scanYourCrop}</h1>
                </div>
                <button
                    onClick={toggleLanguage}
                    className="flex items-center gap-1.5 bg-green-50 border border-green-600 px-3 py-2 rounded-full"
                >
                    <Globe className="text-green-600 w-5 h-5" />
                    <span className="text-green-600 font-semibold text-sm">
                        {language === 'en' ? 'తె' : 'EN'}
                    </span>
                </button>
            </div>

            <input
                type="file"
                ref={fileInputRef}
                onChange={onFileChange}
                className="hidden"
                accept="image/*"
            />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Camera Placeholder (since web doesn't support easy camera access like native) */}
                <div className="flex-1 m-5 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-8 text-center">
                    <Camera className="text-green-600 w-16 h-16 mb-4" />
                    <p className="text-slate-500 font-medium">{t.cameraNotAvailableWeb}</p>
                </div>

                {/* Controls */}
                <div className="flex justify-around items-center p-5 bg-slate-50 border-t border-slate-200">
                    <button
                        onClick={handlePickImage}
                        className="flex flex-col items-center gap-2"
                    >
                        <ImageIcon className="text-green-600 w-6 h-6" />
                        <span className="text-xs font-bold text-green-600">{t.gallery}</span>
                    </button>

                    <div
                        className={`w-20 h-20 rounded-full bg-slate-400 flex items-center justify-center shadow-lg ${isLoading ? 'animate-pulse' : ''}`}
                    >
                        <Camera className="text-white w-8 h-8" />
                    </div>

                    {/* Placeholder for symmetry */}
                    <div className="w-10 opacity-0"></div>
                </div>


                {/* Error Message */}
                {error && (
                    <div className="p-4 mx-5 mb-5 bg-red-50 border border-red-200 rounded-xl">
                        <p className="text-red-600 text-center font-medium">{error}</p>
                    </div>
                )}

                {/* Loading Overlay */}
                {isLoading && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-2xl flex flex-col items-center animate-in zoom-in duration-300">
                            <div className="w-10 h-10 border-4 border-green-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                            <p className="text-green-800 font-bold">{t.analyzing}</p>
                        </div>
                    </div>
                )}

                {/* Tips */}
                <div className="bg-green-50 p-5">
                    <h3 className="text-green-700 font-bold mb-2">{t.scanningTips}</h3>
                    <p className="text-green-700 text-sm mb-1">• {t.tip1}</p>
                    <p className="text-green-700 text-sm mb-1">• {t.tip2}</p>
                    <p className="text-green-700 text-sm">• {t.tip3}</p>
                </div>
            </div>
        </div>
    );
}
