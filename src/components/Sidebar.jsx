"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Play', href: '/play', icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { name: 'Leaderboard', href: '/leaderboard', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
    { name: 'Analytics', href: '/analytics', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
  ];

  return (
    <div className="w-full h-16 md:w-20 lg:w-64 md:h-screen bg-slate-950 border-t md:border-t-0 md:border-r border-slate-800 flex flex-row md:flex-col px-2 py-1 md:px-2 lg:px-6 md:py-6 flex-shrink-0 fixed bottom-0 md:sticky md:top-0 z-50">
      <div className="hidden md:flex items-center gap-3 mb-10 mt-2 px-2 justify-center lg:justify-start">
        <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-blue-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="hidden lg:block text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-red-500 tracking-tight">
          Overturned
        </h1>
      </div>

      <nav className="flex flex-row md:flex-col justify-around md:justify-start gap-1 w-full h-full md:h-auto items-center md:items-stretch">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (pathname === '/' && item.href === '/play');
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-1 lg:gap-4 px-2 py-1 lg:px-4 md:py-3 rounded-xl lg:rounded-2xl transition-all duration-200 group flex-1 md:flex-none md:w-full ${
                isActive 
                  ? 'text-blue-400 md:bg-slate-800/50 md:text-white md:shadow-inner md:border md:border-slate-700/50' 
                  : 'text-slate-400 hover:text-white md:hover:bg-slate-900/50'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 md:h-6 md:w-6 lg:h-5 lg:w-5 flex-shrink-0 ${isActive ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-300'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              <span className="text-[10px] md:hidden lg:inline lg:text-base font-semibold">{item.name}</span>
              
              {isActive && (
                <div className="hidden lg:block ml-auto w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              )}
            </Link>
          );
        })}
      </nav>
      
      <div className="hidden md:flex mt-auto pt-6 border-t border-slate-800/50 px-2 items-center gap-3 justify-center lg:justify-start">
        <div className="w-8 h-8 flex-shrink-0 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-bold text-xs ring-2 ring-slate-800">
          U
        </div>
        <div className="hidden lg:flex flex-col">
          <span className="text-sm font-bold text-white">Guest User</span>
        </div>
      </div>
    </div>
  );
}
