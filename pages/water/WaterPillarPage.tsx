
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'wouter';

const subPages = [
  {
    title: "De Beste Waterfilters Vergeleken",
    description: "Een objectieve vergelijking van de top waterfilters voor thuis en onderweg. Maak de juiste keuze voor jouw budget en situatie.",
    link: "/vaardigheden/water/filters-vergelijken"
  },
  {
    title: "Water Langdurig Opslaan",
    description: "Een stapsgewijze handleiding om kraanwater veilig op te slaan voor maanden of zelfs jaren.",
    link: "/vaardigheden/water/langdurig-opslaan"
  },
  {
    title: "Water Zuiveren Zonder Filter",
    description: "Leer de twee meest betrouwbare methoden: koken en desinfectie met chloor. Kennis die levens kan redden.",
    link: "/vaardigheden/water/zuiveren-zonder-filter"
  },
  {
    title: "Een Regenwateropvangsysteem Bouwen",
    description: "Creëer je eigen onafhankelijke waterbron met deze praktische handleiding voor het opvangen en zuiveren van regenwater.",
    link: "/vaardigheden/water/regenwater-opvangen"
  },
    {
    title: "Waterbronnen Vinden in de Natuur",
    description: "Waar te zoeken en waarop te letten als de kranen droog staan.",
    link: "/vaardigheden/water/waterbronnen-vinden"
  },
    {
    title: "Het Kookadvies Begrijpen",
    description: "Een praktische gids voor als je kraanwater onbetrouwbaar is.",
    link: "/vaardigheden/water/kookadvies-begrijpen"
  }
];

const ContentCard: React.FC<{ title: string; description: string; link: string; }> = ({ title, description, link }) => {
  return (
    <Link to={link} className="block p-6 bg-white rounded-lg border border-gray-200 hover:bg-green-50 hover:shadow-lg transition-all duration-300">
        <h3 className="text-xl font-semibold mb-2 text-green-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <span className="text-red-600 font-semibold mt-4 inline-block group">
            Lees de gids <span className="group-hover:ml-1 transition-all duration-200">»</span>
        </span>
    </Link>
  );
};


const WaterPillarPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-16 md:pb-0">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold text-green-900 mb-6">De Complete Gids voor Waterzekerheid</h1>
            <p className="text-lg text-gray-700 mb-4">Je weet dat een basisvoorraad water essentieel is. Maar wat gebeurt er op dag vier, wanneer je flessen leeg zijn? Wat als het kraanwater onbetrouwbaar wordt? Echte waterzekerheid gaat verder dan opslag; het is een vaardigheid.</p>
            <p className="text-lg text-gray-700 mb-10">Deze gids geeft je een robuust, gelaagd systeem om de watervoorziening voor je gezin veilig te stellen. We behandelen de drie cruciale lagen van waterzekerheid, zodat je voorbereid bent op zowel korte als langdurige scenario's.</p>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">De 3 Lagen van Waterzekerheid: Jouw Strategie</h2>
              <div className="space-y-4 text-slate-600 text-lg">
                <p><strong>Laag 1: Opslag (Je Buffer):</strong> De snelste en makkelijkste manier om zekerheid te creëren. Leer hoe je water correct opslaat voor de lange termijn, zodat je altijd een directe, veilige voorraad hebt.</p>
                <p><strong>Laag 2: Filtratie (Je Actieve Verdediging):</strong> De vaardigheid om onveilig water veilig te maken. Leer welke filters het beste zijn en hoe je water kunt zuiveren, zelfs als je geen geavanceerde uitrusting hebt.</p>
                <p><strong>Laag 3: Oogst (Je Duurzame Bron):</strong> De ultieme stap in zelfredzaamheid. Leer hoe je zelf een duurzame waterbron kunt creëren, bijvoorbeeld door het opvangen en zuiveren van regenwater.</p>
              </div>
            </section>
            
            <section className="pt-12 mt-12 border-t">
              <h2 className="text-3xl font-bold text-slate-800 mb-6 border-l-4 border-red-600 pl-4">Duik Dieper: Onze Essentiële Gidsen en Artikelen</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {subPages.map(page => (
                    <ContentCard key={page.link} {...page} />
                ))}
              </div>
            </section>

             <div className="mt-16 text-center text-gray-600 text-lg border-t pt-8">
                <p>Door deze drie lagen van waterzekerheid te combineren, bouw je een robuust en veerkrachtig systeem. Je bent niet langer afhankelijk van een beperkte voorraad, maar hebt de kennis en vaardigheden om je gezin onder alle omstandigheden van veilig drinkwater te voorzien.</p>
             </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WaterPillarPage;
