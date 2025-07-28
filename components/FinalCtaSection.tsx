
import React from 'react';
import { Link } from 'wouter';

const FinalCtaSection: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    <span className="block">Zet die knagende gedachte om in een concreet plan.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-500">
                    Wacht niet langer. Begin vandaag met de eerste, praktische stap. Onze interactieve checklist helpt je een persoonlijk noodplan te maken. Nuchter, helder en zonder paniek.
                </p>
                <Link
                    to="/noodpakket/samenstellen-noodpakket"
                    className="mt-8 inline-flex items-center justify-center px-8 py-4 border border-transparent font-medium rounded-full text-white bg-red-600 hover:bg-red-700 transition-transform transform hover:scale-105 text-lg"
                >
                    Start de Interactieve Checklist
                </Link>
            </div>
        </div>
    );
};

export default FinalCtaSection;