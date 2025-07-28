
import React from 'react';
import { Link } from 'wouter';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyPrepareSection from '../components/WhyPrepareSection';
import NoodpakketSection from '../components/NoodpakketSection';
import Footer from '../components/Footer';
import FinalCtaSection from '../components/FinalCtaSection';

const scenarios = [
  { title: 'Stroomuitval', description: 'Wat als de lichten en de verwarming uitvallen?', link: '/noodpakket/voorbereiden-op-stroomuitval', icon: '⚡️' },
  { title: 'Overstroming', description: 'De risico\'s van wonen in een waterrijk land.', link: '/noodpakket/overstromingen-noodpakket', icon: '🌊' },
  { title: 'Vluchttas', description: 'Wat neem je mee als je plotseling weg moet?', link: '/noodpakket/vluchttas', icon: '🎒' },
  { title: 'Auto Noodkit', description: 'Voorbereid op pech, ver van huis.', link: '/noodpakket/auto-noodpakket', icon: '🚗' },
];

const ScenarioSection = () => (
  <section className="bg-green-50 py-20 sm:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base font-semibold text-red-600 tracking-wide uppercase">Denk vooruit in scenario's</h2>
        <p className="mt-2 text-3xl font-extrabold text-green-900 tracking-tight sm:text-4xl">
          Van basispakket naar een plan op maat
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          De meest waarschijnlijke risico's vragen om een specifieke aanpak. Verdiep je in wat jij kunt doen om voorbereid te zijn.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {scenarios.map((scenario) => (
          <Link key={scenario.title} to={scenario.link} className="block p-6 bg-white rounded-lg shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 text-center transform hover:-translate-y-1">
            <div className="text-5xl mb-4">{scenario.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-green-800">{scenario.title}</h3>
            <p className="text-gray-600">{scenario.description}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);


const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <main className="pb-16 md:pb-0">
        <Hero />
        <WhyPrepareSection />
        <NoodpakketSection />
        <ScenarioSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;