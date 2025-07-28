
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'wouter';

const ZuiverenZonderFilterPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-16 md:pb-0">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold text-green-900 mb-6">Water Zuiveren Zonder Filter: Koken en Desinfectie met Tabletten</h1>
            <p className="text-lg text-slate-600 mb-10">Een waterfilter is een fantastisch hulpmiddel, maar wat als je er geen hebt? Kennis weegt niets en kan levens redden. Gelukkig zijn er twee zeer betrouwbare, wetenschappelijk bewezen methoden om water 100% veilig te maken: de ene met hitte, de andere met speciaal daarvoor bestemde tabletten.</p>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Methode 1: Water Zuiveren door te Koken</h2>
              <p className="text-slate-600 mt-2">Dit is de meest betrouwbare methode. Koken doodt effectief alle soorten ziekteverwekkers die in water kunnen voorkomen: bacteriën, virussen en protozoa. Het is de gouden standaard voor waterzuivering.</p>
              
              <h3 className="text-2xl font-bold text-slate-700 mt-6 mb-2">De Instructie:</h3>
              <ol className="list-decimal list-inside space-y-2 mt-4 text-slate-700 text-lg">
                  <li>Filter eerst eventueel vuil, zand of takjes uit het water door het door een schone doek (T-shirt, koffiefilter) te gieten.</li>
                  <li>Breng het water aan de kook. Het moet een <strong>"rolling boil"</strong> zijn, wat betekent dat er constant grote bellen opstijgen.</li>
                  <li>Houd deze rollende kook <strong>minimaal één minuut</strong> aan.</li>
                  <li>Laat het water afkoelen voordat je het drinkt. Bewaar het in een schone, afgesloten container.</li>
              </ol>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-800">Voordelen</h4>
                  <ul className="list-disc list-inside text-green-700">
                    <li>100% effectief tegen alle pathogenen.</li>
                    <li>Geen chemicaliën nodig.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-bold text-red-800">Nadelen</h4>
                  <ul className="list-disc list-inside text-red-700">
                    <li>Kost brandstof en tijd.</li>
                    <li>Verwijdert geen chemische vervuiling, zware metalen of vieze smaak.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Methode 2: Desinfectie met Waterzuiveringstabletten</h2>
              <p className="text-slate-600 mt-2">Dit is de meest praktische en 'foolproof' methode voor chemische zuivering. Tabletten (op basis van chloor of chloordioxide) zijn speciaal ontworpen om water te desinfecteren en zijn een vast onderdeel van elke goede vluchttas of EHBO-kit.</p>
              
              <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-800">
                <h4 className="font-bold">Pro-Tip:</h4>
                <p>Hoewel er verschillende soorten zijn, zijn tabletten op basis van chloordioxide vaak effectiever tegen een breder scala aan micro-organismen (zoals de Cryptosporidium-parasiet) en laten ze minder bijsmaak achter dan tabletten op basis van chloor.</p>
              </div>

              <h3 className="text-2xl font-bold text-slate-700 mt-6 mb-2">De Instructie:</h3>
               <ol className="list-decimal list-inside space-y-2 mt-4 text-slate-700 text-lg">
                  <li>Filter het water eerst als het troebel is. De tabletten werken het beste in helder water.</li>
                  <li><strong>Lees altijd de verpakking!</strong> De exacte dosering (meestal 1 tablet per liter) en de inwerktijd zijn afhankelijk van het merk en de watertemperatuur.</li>
                  <li>Voeg het tablet toe aan het water en wacht de voorgeschreven tijd (meestal 30 minuten tot 4 uur). Schud de fles tussendoor om het tablet goed op te lossen.</li>
                  <li>Na de inwerktijd is het water veilig om te drinken.</li>
              </ol>

               <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-green-800">Voordelen</h4>
                  <ul className="list-disc list-inside text-green-700">
                    <li>Zeer makkelijk in gebruik, geen risico op foute dosering.</li>
                    <li>Compact, lichtgewicht en lang houdbaar.</li>
                    <li>Ideaal voor in een vluchttas.</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-bold text-red-800">Nadelen</h4>
                  <ul className="list-disc list-inside text-red-700">
                    <li>Kan een chemische bijsmaak aan het water geven.</li>
                    <li>Inwerktijd kan lang zijn, vooral in koud water.</li>
                    <li>Werkt minder goed in zeer troebel water.</li>
                  </ul>
                </div>
              </div>
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

export default ZuiverenZonderFilterPage;