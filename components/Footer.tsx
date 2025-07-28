
import React from 'react';
import { Link } from 'wouter';
import { navLinks } from '../constants';

const Footer: React.FC = () => {
    const footerNav = [
        { name: 'Over Ons', href: '/over-ons' },
        { name: 'Contact', href: 'https://forms.gle/NjUqTyiuTnoH6sC98', external: true },
        { name: 'Privacybeleid', href: '/privacybeleid' },
        { name: 'Disclaimer', href: '/disclaimer' },
    ]

    return (
        <footer className="bg-gray-800 pb-20 md:pb-0" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <Link to="/" className="text-2xl font-bold text-white">GoedOverleven.nl</Link>
                        <p className="text-gray-400 text-base">
                            Jouw partner in voorbereiding en zelfredzaamheid.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Start je voorbereiding</h3>
                            <ul className="mt-4 space-y-4">
                                {navLinks.map((item) => (
                                    <li key={item.label}>
                                        <Link to={`/${item.href}`} className="text-base text-gray-300 hover:text-white">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                                 <li>
                                    <Link to="/noodpakket/samenstellen-noodpakket" className="text-base text-gray-300 hover:text-white">
                                        Interactieve Checklist
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Info</h3>
                            <ul className="mt-4 space-y-4">
                                {footerNav.map((item) => (
                                    <li key={item.name}>
                                        {item.external ? (
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="nofollow noopener"
                                                className="text-base text-gray-300 hover:text-white"
                                            >
                                                {item.name}
                                            </a>
                                        ) : (
                                            <Link to={item.href} className="text-base text-gray-300 hover:text-white">
                                                {item.name}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-8">
                    <p className="text-base text-gray-400 xl:text-center">&copy; {new Date().getFullYear()} GoedOverleven.nl. Alle rechten voorbehouden.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;