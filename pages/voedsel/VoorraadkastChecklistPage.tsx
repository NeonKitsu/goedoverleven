
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'wouter';

const ChecklistCategory: React.FC<{ title: string; items: string[]; emoji: string }> = ({ title, items, emoji }) => (
  <section className="mb-10">
    <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">{emoji} {title}</h2>
    <ul className="list-none space-y-2">
      {items.map(item => (
        <li key={item} className="flex items-center p-2 bg-green-50 rounded-md">
          <span className="text-green-600 mr-3">✓</span>
          <span className="text-slate-700">{item}</span>
        </li>
      ))}
    </ul>
  </section>
);

const VoorraadkastChecklistPage: React.FC = () => {
  const categories = [
    { title: "Koolhydraten (Energie)", emoji: "🌾", items: ["Witte rijst (langst houdbaar)", "Pasta", "Havermout", "Bloem", "Crackers of beschuit"] },
    { title: "Eiwitten (Bouwstoffen)", emoji: "🐟", items: ["Bonen in blik (zwarte bonen, kidneybonen)", "Linzen (gedroogd)", "Ingeblikte vis (tonijn, zalm, sardientjes)", "Ingeblikt vlees (knakworst, corned beef)", "Pindakaas"] },
    { title: "Vetten (Langdurige Energie)", emoji: "🥑", items: ["Plantaardige olie (zonnebloem, olijf)", "Noten en zaden", "Ghee (geklaarde boter)"] },
    { title: "Groenten & Fruit (Vitamines)", emoji: "🥕", items: ["Groenten in blik (erwten, wortels, maïs)", "Tomaten in blik (gepeld, blokjes)", "Gedroogd fruit (rozijnen, abrikozen)"] },
    { title: "Smaakmakers & Essenties", emoji: "🧂", items: ["Zout", "Suiker", "Honing", "Bouillonblokjes of -poeder", "Knoflookpoeder, uienpoeder, peper", "Azijn"] },
    { title: "Comfort & Moraal", emoji: "🍫", items: ["Oploskoffie of thee", "Cacaopoeder", "Houdbare (chocolade)melk", "Chocoladerepen met lange houdbaarheid"] },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-16 md:pb-0">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-green-900 mb-6">De Perfecte Voorraadkast: 25 Producten die Iedereen Moet Hebben</h1>
          <p className="text-lg text-slate-600 mb-10">Een goede voedselvoorraad bouw je niet in één dag. Het is een proces. Deze checklist is de perfecte leidraad. Het focust op betaalbare, lang houdbare en calorierijke producten die de basis vormen van elke slimme voorraadkast. Begin met het aanvullen van de producten die je nog niet hebt.</p>
          
          <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 mb-10">
            <h4 className="font-bold">Belangrijke principes:</h4>
            <ul className="list-disc list-inside mt-2">
              <li><strong>Sla op wat je eet, eet wat je opslaat:</strong> Koop lang houdbare versies van producten die je normaal ook gebruikt.</li>
              <li><strong>First-In, First-Out (FIFO):</strong> Zet nieuwe producten achterin de kast en gebruik de oudste producten eerst.</li>
            </ul>
          </div>

          {categories.map(cat => <ChecklistCategory key={cat.title} {...cat} />)}

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

export default VoorraadkastChecklistPage;