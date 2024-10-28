// Use client directive for client components
'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname();

  const navItems = [
    { name: 'プロフィール', href: '#profile', component: 'Profile' },
    { name: '経歴', href: '#timeline', component: 'Timeline' },
    { name: '誕生秘話', href: '#story', component: 'Story' },
    { name: 'イベント', href: '#events', component: 'EventsAndConcerts' },
    { name: 'ディスコグラフィー', href: '#discography', component: 'Discography' },
    { name: 'ファンクラブ', href: '#fanclub', component: 'FanClub' },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="sticky top-0 bg-white z-50" ref={navRef}>
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo or Brand */}
        {/* <div>Logo</div> */}

        <button
          className="block md:hidden"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isExpanded ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div
          className={`${
            isExpanded ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-6`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => handleScroll(item.href.substring(1))}
              className="text-gray-700 hover:text-blue-500"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
