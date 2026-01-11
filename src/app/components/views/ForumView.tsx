import React from 'react';
import { MessageCircle, Users, TrendingUp, Globe, Plus } from 'lucide-react';

export function ForumView() {
    const forumTopics = [
        {
            id: 1,
            title: 'Organic Farming Tips',
            replies: 24,
            lastActivity: '2h ago',
        },
        {
            id: 2,
            title: 'Pest Control Solutions',
            replies: 18,
            lastActivity: '4h ago',
        },
        {
            id: 3,
            title: 'Crop Rotation Strategies',
            replies: 31,
            lastActivity: '6h ago',
        },
        {
            id: 4,
            title: 'Weather Updates',
            replies: 12,
            lastActivity: '1d ago',
        },
    ];

    return (
        <div className="flex-1 bg-gray-50 flex flex-col h-full overflow-hidden">
            {/* Header */}
            <div className="pt-12 pb-4 px-6 bg-white border-b border-gray-200 flex justify-between items-center sticky top-0 z-10">
                <h2 className="text-xl font-bold text-green-700">Farmer Forum</h2>
                <button className="flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-full border border-green-200 text-green-700">
                    <Globe size={16} />
                    <span className="font-semibold text-xs">EN</span>
                </button>
            </div>

            <div className="flex-1 overflow-y-auto pb-24">
                {/* Stats */}
                <div className="flex gap-3 p-5 overflow-x-auto no-scrollbar">
                    <div className="flex-1 min-w-[100px] bg-green-50 p-4 rounded-xl border border-green-100 flex flex-col items-center gap-2 shadow-sm">
                        <Users size={24} className="text-green-600" />
                        <span className="text-xl font-bold text-green-800">1,247</span>
                        <span className="text-xs text-green-700 font-medium">Active Farmers</span>
                    </div>
                    <div className="flex-1 min-w-[100px] bg-green-50 p-4 rounded-xl border border-green-100 flex flex-col items-center gap-2 shadow-sm">
                        <MessageCircle size={24} className="text-green-600" />
                        <span className="text-xl font-bold text-green-800">3,891</span>
                        <span className="text-xs text-green-700 font-medium">Discussions</span>
                    </div>
                    <div className="flex-1 min-w-[100px] bg-green-50 p-4 rounded-xl border border-green-100 flex flex-col items-center gap-2 shadow-sm">
                        <TrendingUp size={24} className="text-green-600" />
                        <span className="text-xl font-bold text-green-800">156</span>
                        <span className="text-xs text-green-700 font-medium">Today's Posts</span>
                    </div>
                </div>

                {/* Topics List */}
                <div className="px-5 space-y-4">
                    <h3 className="text-lg font-bold text-gray-800">Popular Topics</h3>
                    {forumTopics.map((topic) => (
                        <div key={topic.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm active:bg-gray-50 transition-colors">
                            <div className="flex justify-between items-start mb-3">
                                <h4 className="font-semibold text-gray-800 text-lg">{topic.title}</h4>
                                <span className="text-xs text-gray-400 whitespace-nowrap">{topic.lastActivity}</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500">
                                <MessageCircle size={16} />
                                <span className="text-sm font-medium">{topic.replies} Replies</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating Action Button */}
            <div className="absolute bottom-24 right-6">
                <button className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg shadow-green-600/30 transition-transform hover:scale-105 active:scale-95 flex items-center justify-center">
                    <Plus size={24} />
                </button>
            </div>
        </div>
    );
}
