
import React from 'react';
import { Link } from 'wouter';

const CheckIcon: React.FC = () => (
    <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
);

const NoodpakketSection: React.FC = () => {
    const checklistItems = [
        "Water & Waterfilters",
        "Houdbaar Voedsel",
        "EHBO-kit",
        "Zaklamp & Batterijen",
        "Radio op zonne-energie/zwengel",
        "Multitool & Kaart"
    ];

    return (
        <section className="py-20 sm:py-28 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div className="relative">
                        <img className="rounded-lg shadow-xl" src="/images/vluchttas.webp" alt="Een goed gevuld noodpakket, netjes georganiseerd" />
                    </div>
                    <div className="mt-10 lg:mt-0">
                        <h2 className="text-3xl font-extrabold text-green-900 tracking-tight sm:text-4xl">
                            De eerste, concrete stap: je noodpakket
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Een knagend gevoel omzetten in een concreet plan? Dat begint hier. Een goed samengesteld noodpakket is de fundering van je voorbereiding. Het geeft je de middelen om de eerste 72 uur – de meest kritieke fase – zelfstandig te overbruggen.
                        </p>
                        <ul className="mt-8 space-y-4">
                            {checklistItems.map(item => (
                                <li key={item} className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <CheckIcon />
                                    </div>
                                    <p className="ml-3 text-base text-gray-700">{item}</p>
                                </li>
                            ))}
                        </ul>
                         <div className="mt-8">
                            <Link to="/noodpakket" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 transition-colors">
                                Lees de complete Noodpakket Gids
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NoodpakketSection;