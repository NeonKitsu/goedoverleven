
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'wouter';

const KookadviesBegrijpenPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-16 md:pb-0">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold text-green-900 mb-6">Kookadvies voor Kraanwater: Wat het Betekent en Wat je Moet Doen</h1>
            <p className="text-lg text-slate-600 mb-10">Je krijgt een officieel bericht van je waterbedrijf: "Preventief kookadvies voor uw postcodegebied." Geen paniek. Dit is een voorzorgsmaatregel die is ontworpen om je veilig te houden. Deze gids legt precies uit wat het betekent, wat je moet doen en wat de alternatieven zijn.</p>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Waarom wordt een Kookadvies Gegeven?</h2>
              <p className="text-slate-600 mt-2">Een kookadvies wordt meestal afgegeven als er een kans is op een bacteriële besmetting van het drinkwater. Dit kan bijvoorbeeld gebeuren na een breuk in een waterleiding of na onderhoudswerkzaamheden. Tijdens tests is er dan een kleine hoeveelheid bacteriën (zoals E. coli) gevonden. Het advies is preventief om elk risico op ziekte uit te sluiten.</p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Wat Moet je Precies Doen? De Officiële Richtlijn</h2>
              <p className="text-slate-600 mt-2 mb-4">De instructie is simpel en zeer effectief. Het koken van water doodt alle schadelijke micro-organismen.</p>
              <div className="p-4 bg-green-50 border-l-4 border-green-500">
                <p className="text-green-800 text-lg font-semibold">"Breng het water aan de kook en laat het <strong>1 minuut</strong> doorkoken."</p>
              </div>
              <p className="text-slate-600 mt-4">Laat het water daarna op natuurlijke wijze afkoelen en bewaar het in een schone fles of kan in de koelkast. Het is nu volkomen veilig voor consumptie.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Waarvoor Gebruik je het Gekookte Water?</h2>
              <p className="text-slate-600 mt-2">Gebruik het gekookte (of flessen)water voor alles wat je binnenkrijgt:</p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-slate-700">
                  <li>Drinken, koffie en thee zetten.</li>
                  <li>Tandenpoetsen.</li>
                  <li>Het wassen van groenten en fruit die je rauw eet.</li>
                  <li>Het bereiden van flesvoeding voor baby's.</li>
                  <li>Het aanmaken van medicijnen.</li>
              </ul>
              <p className="text-slate-600 mt-4">Voor douchen, in bad gaan, handen wassen en de afwas (als je het goed afdroogt) kun je het onbewerkte kraanwater gewoon veilig gebruiken.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Wat als je Geen Stroom Hebt om te Koken?</h2>
              <p className="text-slate-600 mt-2">Een kookadvies tijdens een stroomstoring is een lastige combinatie. Gelukkig zijn er uitstekende alternatieven:</p>
              <ol className="list-decimal list-inside space-y-3 mt-4 text-slate-700">
                  <li><strong>Gebruik je voorraad flessenwater:</strong> Dit is de makkelijkste en veiligste optie. Dit is precies waarom je een basisvoorraad hebt!</li>
                  <li><strong>Gebruik een goed waterfilter:</strong> Een waterfilter dat gecertificeerd is om bacteriën te verwijderen (zoals een Sawyer of Berkey) is een perfect alternatief. Het filtert de bacteriën eruit. (<Link to="/vaardigheden/water/filters-vergelijken" className="underline hover:text-green-700">Zie onze filtergids</Link>).</li>
                  <li><strong>Koken op alternatieve brandstof:</strong> Gebruik een campinggasstel of barbecue om het water buiten te koken.</li>
                  <li><strong>Chemische desinfectie:</strong> Als laatste redmiddel kun je de <Link to="/vaardigheden/water/zuiveren-zonder-filter" className="underline hover:text-green-700">methode met zuiveringstabletten</Link> gebruiken om de bacteriën te doden.</li>
              </ol>
            </section>

            <div className="mt-12 text-center">
                <Link to="/vaardigheden/water" className="inline-block text-white bg-red-600 hover:bg-red-700 transition-transform transform hover:scale-105 text-lg font-bold py-3 px-6 rounded-full shadow-lg">
                    « Terug naar de Water Gids
                </Link>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default KookadviesBegrijpenPage;