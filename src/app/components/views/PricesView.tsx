import React, { useState } from 'react';
import { Search, TrendingUp, TrendingDown, Globe } from 'lucide-react';

interface PriceData {
    id: number;
    crop: string;
    price: number;
    unit: string;
    change: number;
    market: string;
}

export function PricesView() {
    const [searchQuery, setSearchQuery] = useState('');

    const priceData: PriceData[] = [
        { id: 1, crop: 'Rice', price: 2850, unit: 'quintal', change: 2.5, market: 'Hyderabad' },
        { id: 2, crop: 'Wheat', price: 2200, unit: 'quintal', change: -1.2, market: 'Delhi' },
        { id: 3, crop: 'Cotton', price: 6800, unit: 'quintal', change: 4.8, market: 'Mumbai' },
        { id: 4, crop: 'Tomato', price: 1200, unit: 'quintal', change: -8.5, market: 'Bangalore' },
        { id: 5, crop: 'Onion', price: 1800, unit: 'quintal', change: 12.3, market: 'Pune' },
        { id: 6, crop: 'Potato', price: 1500, unit: 'quintal', change: 3.7, market: 'Kolkata' },
    ];

    const filteredData = priceData.filter(item =>
        item.crop.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex-1 bg-gray-50 flex flex-col h-full overflow-hidden">
            {/* Header */}
            <div className="pt-12 pb-4 px-6 bg-white border-b border-gray-200 flex justify-between items-center sticky top-0 z-10">
                <h2 className="text-xl font-bold text-green-700">Mandi Prices</h2>
                <button className="flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-full border border-green-200 text-green-700">
                    <Globe size={16} />
                    <span className="font-semibold text-xs">EN</span>
                </button>
            </div>

            {/* Search */}
            <div className="p-5 bg-white border-b border-gray-100">
                <div className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-xl border border-transparent focus-within:border-green-500 focus-within:bg-white transition-all">
                    <Search size={20} className="text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search crops..."
                        className="bg-transparent border-none outline-none flex-1 text-gray-800 placeholder:text-gray-400"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto pb-24">
                <div className="px-5 py-3 bg-green-50/50 mb-2">
                    <p className="text-xs text-green-700 text-center font-medium">Last Updated: {new Date().toLocaleDateString()}</p>
                </div>

                <div className="px-5 space-y-3 pb-6">
                    {filteredData.map((item) => (
                        <div key={item.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">{item.crop}</h3>
                                <p className="text-sm text-gray-500">{item.market} Market</p>
                            </div>

                            <div className="text-right">
                                <div className="text-xl font-bold text-green-600">₹{item.price.toLocaleString()}</div>
                                <div className="text-xs text-gray-500">per {item.unit}</div>

                                <div className={`flex items-center justify-end gap-1 mt-1 ${item.change >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                                    {item.change >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                                    <span className="text-xs font-bold">{item.change > 0 ? '+' : ''}{item.change}%</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="px-6 py-4 bg-gray-50">
                    <p className="text-xs text-gray-400 text-center leading-relaxed">
                        Market prices are indicative and sourced from various Mandis. Actual prices may vary based on quality and location.
                    </p>
                </div>
            </div>
        </div>
    );
}
