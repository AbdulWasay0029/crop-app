'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Camera, Users, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function BottomNavbar() {
    const pathname = usePathname();
    const { t } = useLanguage();

    // Helper to check active state
    // We consider home active if path is '/'
    const isActive = (path: string) => {
        if (path === '/' && pathname === '/') return true;
        if (path !== '/' && pathname.startsWith(path)) return true;
        return false;
    };

    const navItems = [
        {
            name: 'Home',
            path: '/',
            icon: Home,
            label: 'Home' // You might want to translate these eventually, but "Home" is standard or use t.something if available
        },
        {
            name: 'Scan',
            path: '/scan',
            icon: Camera,
            label: 'Scan'
        },
        {
            name: 'Forum',
            path: '/forum',
            icon: Users,
            label: 'Forum'
        },
        {
            name: 'Prices',
            path: '/prices',
            icon: TrendingUp,
            label: 'Prices'
        }
    ];

    return (
        // Fixed at bottom, visible mainly on mobile (or always if mobile-first app design)
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-2 flex justify-between items-center z-50">
            {navItems.map((item) => {
                const active = isActive(item.path);
                return (
                    <Link
                        key={item.name}
                        href={item.path}
                        className="flex flex-col items-center gap-1 min-w-[64px]"
                    >
                        <item.icon
                            className={`w-6 h-6 ${active ? 'text-green-600' : 'text-slate-500'}`}
                            strokeWidth={active ? 2.5 : 2}
                        />
                        <span className={`text-[10px] font-medium ${active ? 'text-green-600' : 'text-slate-500'}`}>
                            {item.label}
                        </span>
                    </Link>
                );
            })}
        </div>
    );
}
