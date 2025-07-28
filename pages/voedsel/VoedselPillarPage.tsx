
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'wouter';

const subPages = [
  {
    title: "Koken zonder Stroom Vergeleken",
    description: "Campinggas, rocket stove, of barbecue? Ontdek de voor- en nadelen, kosten en cruciale veiligheidsrisico's voor elke methode.",
    link: "/vaardigheden/voedsel/koken-zonder-stroom"
  },
  {
    title: "De Eetbare Crisis-Moestuin",
    description: "Begin je eigen productieve moestuin. Leer welke 10 groenten snel groeien, weinig zorg nodig hebben en zelfs op een balkon kunnen.",
    link: "/vaardigheden/voedsel/crisis-moestuin"
  },
  {
    title: "De Perfecte Voorraadkast",
    description: "Een concrete, afvinkbare lijst van 25 lang houdbare producten die de ruggengraat van je langetermijnvoorraad vormen.",
    link: "/vaardigheden/voedsel/voorraadkast-checklist"
  },
  {
    title: "Voedsel Conserveren voor Beginners",
    description: "Leer de basisprincipes van inmaken, drogen en vacumeren om de oogst uit je tuin of bulk-aankopen te bewaren.",
    link: "/vaardigheden/voedsel/conserveren-voor-beginners"
  },
  {
    title: "Recepten voor je Noodvoorraad",
    description: "7 heerlijke en voedzame maaltijden die je kunt maken met alleen houdbare ingrediënten uit je voorraadkast.",
    link: "/vaardigheden/voedsel/noodvoorraad-recepten"
  },
  {
    title: "Jagen en Vissen in een Noodsituatie",
    description: "Een diepgaand artikel over de wetgeving en de absolute basisvaardigheden voor een extreem scenario.",
    link: "/vaardigheden/voedsel/jagen-en-vissen"
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


const VoedselPillarPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-16 md:pb-0">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold text-green-900 mb-6">De Complete Gids voor Voedsel en Koken in een Crisis</h1>
            <p className="text-lg text-gray-700 mb-4">Je hebt water en een dak boven je hoofd. De volgende pilaar van zelfredzaamheid en comfort is een goede maaltijd. Een warme, voedzame maaltijd doet meer dan alleen je honger stillen; het herstelt energie, verhoogt het moraal en brengt een gevoel van normaliteit in een abnormale situatie.</p>
            <p className="text-lg text-gray-700 mb-10">Deze gids geeft je een gelaagd systeem voor voedselzekerheid. We behandelen de drie cruciale lagen: het aanleggen van een slimme voorraad, de kunst van het koken zonder stroom, en de vaardigheden om zelfvoorzienend te worden.</p>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">De 3 Lagen van Voedselzekerheid: Jouw Strategie</h2>
              <div className="space-y-4 text-slate-600 text-lg">
                <p><strong>Laag 1: De Voorraad (Je Fundament):</strong> De basis van alles. Leer hoe je een slimme, diepe voorraadkast opbouwt met voedsel dat je gezin ook daadwerkelijk eet, en hoe je deze efficiënt beheert.</p>
                <p><strong>Laag 2: De Bereiding (Je Vaardigheid):</strong> Je hebt voedsel, maar hoe maak je het warm? Leer welke kookmethodes veilig en effectief zijn als het gas en de elektriciteit zijn uitgevallen.</p>
                <p><strong>Laag 3: De Productie (Je Zelfredzaamheid):</strong> De ultieme stap. Leer hoe je je eigen voedsel kunt produceren en conserveren, waardoor je minder afhankelijk wordt van externe voorraden.</p>
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
                <p>Door deze drie lagen van voedselzekerheid te beheersen, ben je voorbereid om je gezin niet alleen te voeden, maar ook te troosten en te versterken, ongeacht de omstandigheden.</p>
             </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VoedselPillarPage;
