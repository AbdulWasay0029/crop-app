'use client';

import React from 'react';
import { MessageCircle, Users, TrendingUp, Globe, ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';

export default function ForumScreen() {
    const { language, toggleLanguage, t } = useLanguage();
    const router = useRouter();

    const forumTopics = [
        {
            id: 1,
            title: language === 'en' ? 'Organic Farming Tips' : 'సేంద్రీయ వ్యవసాయ చిట్కాలు',
            replies: 24,
            lastActivity: '2h ago',
        },
        {
            id: 2,
            title: language === 'en' ? 'Pest Control Solutions' : 'కీటకాల నియంత్రణ పరిష్కారాలు',
            replies: 18,
            lastActivity: '4h ago',
        },
        {
            id: 3,
            title: language === 'en' ? 'Crop Rotation Strategies' : 'పంట మార్పిడి వ్యూహాలు',
            replies: 31,
            lastActivity: '6h ago',
        },
        {
            id: 4,
            title: language === 'en' ? 'Weather Updates' : 'వాతావరణ నవీకరణలు',
            replies: 12,
            lastActivity: '1d ago',
        },
    ];

    return (
        <div className="min-h-screen bg-white pb-20">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-slate-50 border-b border-slate-200 sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    <button onClick={() => router.back()} className="p-1">
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    <h1 className="text-xl font-bold text-green-600">{t.farmerForum}</h1>
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

            {/* Stats */}
            <div className="flex p-5 gap-3 overflow-x-auto">
                <div className="flex-1 min-w-[100px] bg-green-50 p-4 rounded-xl flex flex-col items-center gap-2 border border-green-100">
                    <Users className="text-green-600 w-6 h-6" />
                    <span className="text-xl font-bold text-green-600">1,247</span>
                    <span className="text-xs text-green-700 text-center">{t.activeFarmers}</span>
                </div>
                <div className="flex-1 min-w-[100px] bg-green-50 p-4 rounded-xl flex flex-col items-center gap-2 border border-green-100">
                    <MessageCircle className="text-green-600 w-6 h-6" />
                    <span className="text-xl font-bold text-green-600">3,891</span>
                    <span className="text-xs text-green-700 text-center">{t.discussions}</span>
                </div>
                <div className="flex-1 min-w-[100px] bg-green-50 p-4 rounded-xl flex flex-col items-center gap-2 border border-green-100">
                    <TrendingUp className="text-green-600 w-6 h-6" />
                    <span className="text-xl font-bold text-green-600">156</span>
                    <span className="text-xs text-green-700 text-center">{t.todaysPosts}</span>
                </div>
            </div>

            {/* Topics */}
            <div className="px-5 pb-5">
                <h2 className="text-lg font-bold text-gray-800 mb-4">{t.popularTopics}</h2>
                <div className="space-y-3">
                    {forumTopics.map((topic) => (
                        <div key={topic.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="font-semibold text-gray-800 pr-4">{topic.title}</h3>
                                <span className="text-xs text-gray-500 whitespace-nowrap">{topic.lastActivity}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500">
                                <MessageCircle className="w-4 h-4" />
                                <span className="text-sm">{topic.replies} {t.replies}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating Action Button */}
            <div className="fixed bottom-6 right-6">
                <button className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 px-6 py-4 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-semibold">{t.createNewPost}</span>
                </button>
            </div>
        </div>
    );
}
