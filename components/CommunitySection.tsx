import React from 'react';
import { Link } from 'wouter';

const CommunitySection: React.FC = () => {
    return (
        <div className="bg-green-800">
            <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    <span className="block">Samen staan we sterker.</span>
                    <span className="block text-green-200">Word lid van de community.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-green-100">
                    Deel kennis, wissel ervaringen uit en leer van andere preppers. Onze community is de plek waar je terecht kunt met al je vragen.
                </p>
                <Link
                    to="/community"
                    className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-800 bg-white hover:bg-green-50 sm:w-auto transition-colors"
                >
                    Discussieer mee
                </Link>
            </div>
        </div>
    );
};

export default CommunitySection;