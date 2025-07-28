
import React from 'react';
import { Link } from 'wouter';
import { navLinks } from '../constants';
import type { NavLink as NavLinkType } from '../types';

const NavLink: React.FC<{ link: NavLinkType }> = ({ link }) => (
    <Link to={`/${link.href}`} className="text-gray-700 hover:text-green-900 transition-colors px-3 py-2 rounded-md text-sm font-medium">
        {link.label}
    </Link>
);

const Navbar: React.FC = () => {
    // The "Checklist" link is now rendered as a regular navigation item,
    // and the separate "Start Checklist" CTA button has been removed for clarity.
    return (
        <nav className="bg-white shadow-sm fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center md:justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0">
                            <img className="h-10 w-auto" src="/images/goedoverleven.webp" alt="GoedOverleven.nl logo" />
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map(link => <NavLink key={link.href} link={link} />)}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;