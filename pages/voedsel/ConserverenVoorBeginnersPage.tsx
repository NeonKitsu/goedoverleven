
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'wouter';

const ConserverenVoorBeginnersPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-16 md:pb-0">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-green-900 mb-6">Voedsel Conserveren voor Beginners: Inmaken, Drogen & Vacumeren</h1>
          <p className="text-lg text-slate-600 mb-10">De oogst uit je moestuin is binnen, of je hebt een grote hoeveelheid groenten in de aanbieding gekocht. Wat nu? Voedselconservering is de eeuwenoude kunst om de houdbaarheid van voedsel te verlengen. Deze gids introduceert drie toegankelijke technieken voor beginners.</p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Techniek 1: Inmaken (Wecken)</h2>
            <div className="space-y-4 text-slate-600">
              <p><strong>Principe:</strong> Voedsel wordt verhit in glazen potten met een deksel om bacteriën te doden. Terwijl de pot afkoelt, ontstaat een vacuüm dat de pot afsluit en nieuwe bacteriën buiten houdt.</p>
              <p><strong>Basisuitrusting:</strong> Glazen weckpotten met rubberen ringen en klemmen, of potten met een tweedelig schroefdeksel. Een grote, diepe pan waar de potten in passen.</p>
              <p><strong>Geschikt voor:</strong> Groenten (augurken, bieten), fruit (jams, compotes), soepen en sauzen.</p>
              <p><strong>Eerste stap:</strong> Begin met een simpel recept zoals het inmaken van augurken op zuur. De recepten zijn overal online te vinden en de stappen zijn makkelijk te volgen.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Techniek 2: Drogen (Dehydrateren)</h2>
            <div className="space-y-4 text-slate-600">
              <p><strong>Principe:</strong> Door vocht te onttrekken aan voedsel, kunnen micro-organismen niet meer groeien. Dit is een van de oudste en makkelijkste methodes.</p>
              <p><strong>Basisuitrusting:</strong> Een elektrische voedseldroger (dehydrator) is het makkelijkst en geeft de beste resultaten. Je kunt ook een oven op de laagste stand (met de deur op een kier) gebruiken.</p>
              <p><strong>Geschikt voor:</strong> Fruit (appelschijfjes, bananenchips), groenten (tomaten, champignons), kruiden en zelfs vlees (beef jerky).</p>
              <p><strong>Eerste stap:</strong> Probeer appelschijfjes te drogen. Snijd een appel in dunne plakjes, leg ze op de rekken van je dehydrator of oven en droog ze tot ze knapperig zijn.</p>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Techniek 3: Vacumeren</h2>
            <div className="space-y-4 text-slate-600">
              <p><strong>Principe:</strong> Door alle lucht uit een verpakking te zuigen, wordt de groei van bacteriën en schimmels (die zuurstof nodig hebben) sterk vertraagd. Het voorkomt ook vriesbrand in de vriezer.</p>
              <p><strong>Basisuitrusting:</strong> Een vacuümapparaat en de bijbehorende plastic zakken of rollen.</p>
              <p><strong>Geschikt voor:</strong> Vlees, vis, kaas, noten, koffiebonen, en gedroogde producten. Het is een fantastische manier om de houdbaarheid van je bestaande voorraad te verlengen.</p>
              <p><strong>Eerste stap:</strong> Koop een groot stuk kaas of een familiepak vlees in de aanbieding. Verdeel het in kleinere porties, vacumeer ze en vries ze in. Je zult versteld staan hoe lang het vers blijft.</p>
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

export default ConserverenVoorBeginnersPage;