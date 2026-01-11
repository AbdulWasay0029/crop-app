import React from 'react';
import { Camera, Users, TrendingUp, Globe } from 'lucide-react';

interface HomeViewProps {
    onNavigate: (tab: string) => void;
}

export function HomeView({ onNavigate }: HomeViewProps) {
    return (
        <div className="flex-1 min-h-full bg-gradient-to-b from-green-600 to-lime-500 text-white flex flex-col">
            {/* Header */}
            <div className="pt-12 pb-6 px-6 flex justify-between items-center bg-green-700/20 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                    <span className="text-4xl">🌾</span>
                    <div>
                        <h1 className="text-2xl font-bold">CropSaviour</h1>
                        <p className="text-sm text-green-100">Smart Farming Assistant</p>
                    </div>
                </div>
                <button className="flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-md active:scale-95 transition-transform">
                    <Globe size={18} />
                    <span className="font-semibold text-sm">EN</span>
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-8">
                <div className="space-y-4">
                    <h2 className="text-5xl font-bold text-yellow-300 drop-shadow-md">CropSaviour</h2>
                    <p className="text-xl font-medium">Your AI Plant Doctor</p>
                    <p className="text-green-50 leading-relaxed max-w-xs mx-auto">
                        Detect diseases, get treatment advice, and connect with other farmers instantly.
                    </p>
                </div>

                <div className="w-full max-w-sm space-y-4">
                    <button
                        onClick={() => onNavigate('scan')}
                        className="w-full bg-yellow-400 hover:bg-yellow-300 text-green-800 p-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-black/10 transform active:scale-[0.98] transition-all font-bold text-lg"
                    >
                        <Camera size={24} className="text-green-700" />
                        Scan My Crop
                    </button>

                    <button
                        onClick={() => onNavigate('forum')}
                        className="w-full bg-white/20 hover:bg-white/30 border border-white/30 backdrop-blur-sm p-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg transform active:scale-[0.98] transition-all font-semibold"
                    >
                        <Users size={24} />
                        Join Farmer Forum
                    </button>

                    <button
                        onClick={() => onNavigate('prices')}
                        className="w-full bg-white/20 hover:bg-white/30 border border-white/30 backdrop-blur-sm p-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg transform active:scale-[0.98] transition-all font-semibold"
                    >
                        <TrendingUp size={24} />
                        Check Mandi Prices
                    </button>
                </div>
            </div>
        </div>
    );
}
