
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'wouter';

const WaterbronnenVindenPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-16 md:pb-0">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold text-green-900 mb-6">Waterbronnen Vinden in de Natuur: Een Gids voor Noodsituaties</h1>
            <p className="text-lg text-slate-600 mb-10">In een langdurige crisis kan de situatie zich voordoen dat je eigen watervoorraad op is en de kraan droog blijft. In dat geval wordt het vinden van water in je omgeving een cruciale vaardigheid. Deze gids leert je niet alleen waar je moet zoeken, maar vooral hoe je de veiligheid van een bron inschat.</p>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Potentiële Waterbronnen in Nederland</h2>
              <p className="text-slate-600 mt-2">Nederland is een waterrijk land. Potentiële bronnen zijn overal, maar ze verschillen sterk in kwaliteit.</p>
              <ul className="list-disc list-inside space-y-3 mt-4 text-slate-700">
                  <li><strong>Regen, Sneeuw en Dauw:</strong> De schoonste bronnen, direct uit de lucht. Vang het op met zeilen of schone doeken.</li>
                  <li><strong>Oppervlaktewater:</strong> Dit is de meest voor de hand liggende categorie.
                    <ul className="list-circle list-inside ml-6 mt-2">
                        <li>Rivieren en beken (stromend)</li>
                        <li>Meren, plassen en vennen (stilstaand)</li>
                        <li>Kanalen en sloten (vaak vervuild)</li>
                    </ul>
                  </li>
                  <li><strong>Grondwater:</strong> Water dat uit de grond komt, zoals bij een bron of wel. Dit is vaak van nature gefilterd en schoner, maar zeldzamer om te vinden.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">De Kunst van het Risico Inschatten (Het Belangrijkste Hoofdstuk)</h2>
              <p className="text-slate-600 mt-2">Het vinden van water is makkelijk; het vinden van relatief *veilig* water is een kunst. Gebruik je zintuigen en je verstand.</p>
              <div className="space-y-6 mt-6 text-slate-600">
                  <p><strong>1. Stromend is (bijna) altijd beter dan stilstaand.</strong><br/>
                  Water dat stroomt is over het algemeen gezonder. Het bevat meer zuurstof, wat de groei van veel bacteriën remt. Stilstaand water in poelen en vennen is een broedplaats voor muggenlarven en bacteriën.</p>
                  
                  <p><strong>2. Kijk altijd stroomopwaarts.</strong><br/>
                  Voordat je water verzamelt, loop een stukje stroomopwaarts. Wat zie je? Een dode vis in het water? Een pijp die erin uitkomt? Grazend vee op de oever? Tekenen van industrie of landbouw (akker met bestrijdingsmiddelen)? Zoek dan een andere plek.</p>
                  
                  <p><strong>3. Gebruik je ogen en neus.</strong><br/>
                  Helder water is niet per se veilig, maar troebel, stinkend water is dat zeker niet. Let op tekenen van vervuiling zoals een olieachtige glans op het oppervlak, schuim, dode planten of een onnatuurlijke kleur.</p>

                  <p><strong>4. Vermijd water bij hoge concentraties mens en dier.</strong><br/>
                  Water dat door een stad stroomt of waarin vee staat, is bijna gegarandeerd vervuild met menselijke of dierlijke uitwerpselen, een belangrijke bron van ziekteverwekkers.</p>
              </div>
            </section>

            <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800">
                <h4 className="font-bold text-2xl">⚠️ De Gouden Regel: ALTIJD Zuiveren! ⚠️</h4>
                <p className="mt-2">Ongeacht hoe helder, fris of schoon een natuurlijke waterbron eruitziet: beschouw het <strong>ALTIJD</strong> als onveilig en vervuild. De gevaarlijkste micro-organismen zijn onzichtbaar voor het blote oog.</p>
                <p className="mt-2 font-semibold">Zuiver élke druppel water die je uit de natuur haalt voordat je het drinkt, kookt of gebruikt om wonden schoon te maken. Gebruik een <Link to="/vaardigheden/water/filters-vergelijken" className="underline hover:text-green-700">filter</Link> of <Link to="/vaardigheden/water/zuiveren-zonder-filter" className="underline hover:text-green-700">kook het</Link>.</p>
            </div>

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

export default WaterbronnenVindenPage;