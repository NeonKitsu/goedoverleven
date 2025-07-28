
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'wouter';

const vegetables = [
  { name: "Radijs", description: "Snelste groeier (3-4 weken). Zaai direct in de volle grond. Makkelijk en leuk voor kinderen." },
  { name: "Sla (pluksla)", description: "Oogst continu door de buitenste bladeren te plukken. Groeit goed in potten." },
  { name: "Spinazie", description: "Groeit snel, vooral in het voor- en najaar. Zeer voedzaam." },
  { name: "Lente-ui", description: "Makkelijk te kweken, zelfs op de vensterbank vanuit een restje uit de winkel." },
  { name: "Snijbiet", description: "Een mooie en productieve plant. Je kunt zowel de stelen als de bladeren eten." },
  { name: "Wortels (korte soorten)", description: "Kies korte of ronde variëteiten voor teelt in potten." },
  { name: "Erwten (sugar snaps)", description: "Groeien snel en hebben een klimrek nodig. Heerlijk om vers van de plant te eten." },
  { name: "Boontjes (struikbonen)", description: "Geven een grote oogst en hebben geen klimrek nodig." },
  { name: "Courgette", description: "Eén plant kan een heel gezin voeden. Heeft wel wat ruimte nodig." },
  { name: "Aardappelen", description: "Kan perfect in een grote pot of speciale aardappelzak worden gekweekt." }
];

const CrisisMoestuinPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-16 md:pb-0">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-green-900 mb-6">De Eetbare Crisis-Moestuin: 10 Makkelijke Groenten voor Beginners</h1>
          <p className="text-lg text-slate-600 mb-10">Zelf voedsel verbouwen is een van de meest bevredigende en krachtige vaardigheden die je kunt leren. Het hoeft niet ingewikkeld of grootschalig te zijn. Zelfs een klein balkon of een paar potten op de vensterbank kunnen een verrassende hoeveelheid vers, voedzaam eten opleveren. Deze gids focust op 10 'vergevingsgezinde' groenten die snel resultaat geven.</p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">De Top 10 voor de Beginnende Prepper-Tuinier</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {vegetables.map(veg => (
                <div key={veg.name} className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg text-green-800">{veg.name}</h3>
                  <p className="text-slate-600 mt-1">{veg.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
             <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Begin Klein, Oogst Groot</h2>
             <div className="space-y-4 text-slate-600">
               <p>De sleutel tot succes is klein beginnen. Kies 2 of 3 van deze groenten en focus daarop. Leer hoe ze groeien, wat ze nodig hebben en geniet van je eerste oogst. Deze kleine successen motiveren om volgend seizoen verder uit te breiden. Je zult versteld staan van de rust en zekerheid die het geeft om je eigen voedsel te zien groeien.</p>
             </div>
          </section>

          <div className="mt-12 text-center">
            <Link to="/vaardigheden/voedsel" className="inline-block text-white bg-red-600 hover:bg-red-700 transition-transform transform hover:scale-105 text-lg font-bold py-3 px-6 rounded-full shadow-lg">
                « Terug naar de Voedsel Gids
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CrisisMoestuinPage;
