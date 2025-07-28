
import React from 'react';
import { Link } from 'wouter';

const Hero: React.FC = () => {
    return (
        <div className="relative bg-gray-800 pt-16">
            <div className="absolute inset-0">
                <img className="w-full h-full object-cover" src="/images/goedoverleven-voorbereiding-survival-tent-bos.webp" alt="Een rustige en voorbereide setting in de natuur" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/20" aria-hidden="true" />
            </div>
            <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Klaar voor Elke Crisis
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-xl text-green-100 sm:max-w-3xl">
                    Van stroomuitval tot extreem weer: een goede voorbereiding is essentieel. Wij bieden praktische gidsen en tools om jou en je gezin veilig te houden.
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid">
                        <Link to="/noodpakket" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 sm:px-8 transition-transform transform hover:scale-105">
                            Start hier je voorbereiding
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;