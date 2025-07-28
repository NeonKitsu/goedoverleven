
import React from 'react';
import { Link } from 'wouter';
import { bottomNavLinks } from '../constants';

const BottomNavbar: React.FC = () => {
    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-t-lg z-40">
            <div className="flex justify-around items-start h-16 pt-2 pb-1">
                {bottomNavLinks.map((link) => (
                    <Link
                        key={link.href}
                        to={link.href ? `/${link.href}` : '/'}
                        className="flex flex-col items-center justify-center text-center text-gray-700 hover:text-green-900 transition-colors w-full"
                        aria-label={link.label}
                    >
                        <span className="text-2xl" role="img">{link.emoji}</span>
                        <span className="text-xs font-medium">{link.label}</span>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default BottomNavbar;