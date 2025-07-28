
import React from 'react';
import { features } from '../constants';
import type { Feature } from '../types';

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-800 mx-auto mb-4">
            {feature.icon}
        </div>
        <h3 className="text-xl font-bold text-green-900 text-center mb-2">{feature.title}</h3>
        <p className="text-gray-600 text-center">{feature.description}</p>
    </div>
);

const WhyPrepareSection: React.FC = () => {
    return (
        <section id="waarom-voorbereiden" className="bg-green-50 py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-red-600 tracking-wide uppercase">Een kwestie van verantwoordelijkheid</h2>
                    <p className="mt-2 text-3xl font-extrabold text-green-900 tracking-tight sm:text-4xl">
                        De rust van een plan, de zekerheid van controle
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Het gaat niet om 'wat als de wereld vergaat?', maar om 'wat als de stroom uitvalt?'. Een goede voorbereiding is nuchtere, praktische zorg voor je dierbaren.
                    </p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyPrepareSection;
