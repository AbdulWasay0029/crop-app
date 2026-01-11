'use client';

import React, { useState } from 'react';
import { Search, TrendingUp, TrendingDown, Globe, ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

interface PriceData {
    id: number;
    crop: string;
    cropTe: string;
    price: number;
    unit: string;
    change: number;
    market: string;
}

export default function PricesScreen() {
    const { language, toggleLanguage, t } = useLanguage();
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');

    const priceData: PriceData[] = [
        {
            id: 1,
            crop: 'Rice',
            cropTe: 'వరి',
            price: 2850,
            unit: 'quintal',
            change: 2.5,
            market: 'Hyderabad',
        },
        {
            id: 2,
            crop: 'Wheat',
            cropTe: 'గోధుమ',
            price: 2200,
            unit: 'quintal',
            change: -1.2,
            market: 'Delhi',
        },
        {
            id: 3,
            crop: 'Cotton',
            cropTe: 'పత్తి',
            price: 6800,
            unit: 'quintal',
            change: 4.8,
            market: 'Mumbai',
        },
        {
            id: 4,
            crop: 'Tomato',
            cropTe: 'టమాటో',
            price: 1200,
            unit: 'quintal',
            change: -8.5,
            market: 'Bangalore',
        },
        {
            id: 5,
            crop: 'Onion',
            cropTe: 'ఉల్లిపాయ',
            price: 1800,
            unit: 'quintal',
            change: 12.3,
            market: 'Pune',
        },
        {
            id: 6,
            crop: 'Potato',
            cropTe: 'బంగాళాదుంప',
            price: 1500,
            unit: 'quintal',
            change: 3.7,
            market: 'Kolkata',
        },
    ];

    const filteredData = priceData.filter(item =>
        item.crop.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.cropTe.includes(searchQuery)
    );

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-slate-50 border-b border-slate-200 sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    <button onClick={() => router.back()} className="p-1">
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    <h1 className="text-xl font-bold text-green-600">{t.mandiPrices}</h1>
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

            {/* Search */}
            <div className="p-5 bg-slate-50">
                <div className="flex items-center bg-white px-4 py-3 rounded-full border border-slate-200 shadow-sm focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100 transition-all">
                    <Search className="text-gray-400 w-5 h-5 mr-3" />
                    <input
                        type="text"
                        className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                        placeholder={t.searchCrops}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Content */}
            <div className="pb-10">
                <div className="bg-green-50 px-5 py-3 mb-4">
                    <p className="text-xs text-green-700 text-center">
                        {t.lastUpdated}: {new Date().toLocaleString()}
                    </p>
                </div>

                <div className="px-5 space-y-3">
                    {filteredData.map((item) => (
                        <div key={item.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">
                                        {language === 'en' ? item.crop : item.cropTe}
                                    </h3>
                                    <p className="text-xs text-gray-500">{item.market}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xl font-bold text-green-600">₹{item.price.toLocaleString()}</p>
                                    <p className="text-xs text-gray-500">per {item.unit}</p>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${item.change >= 0 ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                                    {item.change >= 0 ? (
                                        <TrendingUp className="w-4 h-4" />
                                    ) : (
                                        <TrendingDown className="w-4 h-4" />
                                    )}
                                    <span className="text-xs font-semibold">
                                        {item.change >= 0 ? '+' : ''}{item.change}%
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-5 mt-4 bg-slate-50">
                    <p className="text-xs text-gray-500 text-center leading-relaxed">
                        {t.priceDisclaimer}
                    </p>
                </div>
            </div>
        </div>
    );
}
