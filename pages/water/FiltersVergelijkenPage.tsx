
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'wouter';

const FiltersVergelijkenPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-16 md:pb-0">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold text-green-900 mb-6">De Beste Waterfilters Vergeleken (2025): Berkey, Sawyer & Lifestraw</h1>
            <div className="space-y-4 text-slate-600 text-lg mb-10">
                <p>Je hebt besloten een waterfilter aan te schaffen. Dat is een van de slimste en meest empowerende stappen die je kunt zetten in je voorbereiding. Een goed filter geeft je de vrijheid om van een onveilige waterbron een bron van leven te maken. Maar de wereld van waterfilters kan verwarrend zijn: grote kannen, kleine rietjes, zakken die je kunt oprollen... welke is nu de juiste voor jou?</p>
                <p>Deze gids helpt je de knoop door te hakken. We leggen de verschillende types uit, vergelijken de bekendste merken en geven je concrete aanbevelingen voor de meest voorkomende situaties: permanent thuisgebruik en een lichtgewicht filter voor je vluchttas.</p>
            </div>
            
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">De Basis: Hoe Werkt een Waterfilter?</h2>
              <div className="space-y-4 text-slate-600">
                <p>De meeste moderne noodfilters werken met een 'holle vezel'-membraan. Stel je miljoenen microscopisch kleine rietjes voor waar het water doorheen wordt geperst. De poriën (gaatjes) in deze vezels zijn zo klein (meestal 0.1 tot 0.2 micron) dat ze schadelijke bacteriën (zoals E. coli, cholera) en protozoa (zoals Giardia, Cryptosporidium) fysiek tegenhouden. Het schone water stroomt erdoorheen, de 'slechteriken' blijven achter.</p>
                <p><strong>Belangrijk:</strong> Deze filters verwijderen geen virussen, chemicaliën of zware metalen. Voor de meeste scenario's in Nederland, waar virale besmetting van oppervlaktewater zeldzaam is, is dit een uitstekende en betrouwbare methode.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Type 1: Zwaartekrachtfilters (Voor Thuisgebruik)</h2>
              <div className="space-y-4 text-slate-600">
                  <p>Dit zijn de grote, roestvrijstalen systemen die je op het aanrecht zet. Ze werken simpelweg op zwaartekracht: je giet water in het bovenste reservoir, en het druppelt langzaam door de filterelementen naar het onderste, schone reservoir.</p>
                  <h3 className="text-2xl font-bold text-slate-700 pt-4">Topkeuze: De Berkey Systemen (bv. Big Berkey)</h3>
                  <p><strong>Ideaal voor:</strong> Gezinnen die een permanente, betrouwbare waterbron in huis willen hebben, onafhankelijk van stroom.</p>
                  <h4 className="font-bold mt-4">Voordelen:</h4>
                  <ul className="list-disc list-inside ml-4">
                      <li><strong>Enorme Capaciteit:</strong> Kan vele liters per dag zuiveren.</li>
                      <li><strong>Zeer Lange Levensduur:</strong> De filterelementen gaan duizenden liters mee.</li>
                      <li><strong>Extreem Effectief:</strong> De 'Black Berkey' elementen zijn zo fijn dat ze zelfs virussen en bepaalde chemicaliën kunnen reduceren, wat ze superieur maakt aan de meeste andere filters.</li>
                  </ul>
                  <h4 className="font-bold mt-4">Nadelen:</h4>
                   <ul className="list-disc list-inside ml-4">
                      <li><strong>Groot en Zwaar:</strong> Absoluut niet geschikt voor een vluchttas.</li>
                      <li><strong>Hoge Aanschafprijs:</strong> Het is een serieuze investering.</li>
                  </ul>
              </div>
            </section>
            
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Type 2: Door-Druk- & Rietjesfilters (Voor de Vluchttas)</h2>
              <div className="space-y-4 text-slate-600">
                <p>Dit zijn de ultracompacte, lichtgewicht filters die ontworpen zijn voor mobiliteit. Perfect voor in je noodpakket, vluchttas of auto.</p>
                
                <h3 className="text-2xl font-bold text-slate-700 pt-4">Topkeuze: De Sawyer MINI</h3>
                <p><strong>Ideaal voor:</strong> De vluchttas, wandelaars, en als een veelzijdige back-up.</p>
                <h4 className="font-bold mt-4">Voordelen:</h4>
                <ul className="list-disc list-inside ml-4">
                  <li><strong>Extreem Licht & Compact:</strong> Weegt bijna niets en past in de palm van je hand.</li>
                  <li><strong>Veelzijdig:</strong> Je kunt het als rietje gebruiken, op een waterfles schroeven, of als onderdeel van een zwaartekrachtsysteem met een waterzak.</li>
                  <li><strong>Ongekende Levensduur:</strong> Gaat tot wel 375.000 liter mee, mits goed onderhouden.</li>
                </ul>
                <h4 className="font-bold mt-4">Nadelen:</h4>
                <ul className="list-disc list-inside ml-4">
                  <li><strong>Langzame Doorstroom:</strong> Het kost wat moeite (knijpen in de zak) om water erdoorheen te persen.</li>
                  <li><strong>Onderhoud:</strong> Moet regelmatig worden 'teruggespoeld' (backflushed) om de poriën schoon te houden.</li>
                </ul>

                <h3 className="text-2xl font-bold text-slate-700 pt-4">Alternatief: De LifeStraw</h3>
                <p><strong>Ideaal voor:</strong> Een persoonlijke, ultralichte noodoplossing.</p>
                <h4 className="font-bold mt-4">Voordelen:</h4>
                <ul className="list-disc list-inside ml-4">
                  <li><strong>Simpel in Gebruik:</strong> Werkt letterlijk als een rietje dat je direct in de waterbron steekt.</li>
                  <li><strong>Bewezen Technologie:</strong> Een van de bekendste en meest vertrouwde namen.</li>
                </ul>
                <h4 className="font-bold mt-4">Nadelen:</h4>
                <ul className="list-disc list-inside ml-4">
                  <li><strong>Minder Veelzijdig:</strong> Je kunt er moeilijk schoon water mee in een fles of pan krijgen. Het is puur voor direct drinken.</li>
                  <li><strong>Beperktere Levensduur:</strong> Gaat minder lang mee dan de Sawyer filters.</li>
                </ul>
              </div>
            </section>
            
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Conclusie: Welke Moet Je Kiezen?</h2>
              <div className="space-y-4 text-slate-600">
                <p>De ideale voorbereiding omvat eigenlijk beide types.</p>
                <ul className="list-disc list-inside ml-4">
                  <li><strong>Voor thuis:</strong> Een Berkey (of vergelijkbaar zwaartekrachtfilter) is de onbetwiste koning. Het geeft je de zekerheid van een onuitputtelijke bron van schoon water voor je hele gezin, zonder enige moeite.</li>
                  <li><strong>Voor onderweg:</strong> Een Sawyer MINI is de meest veelzijdige en duurzame keuze voor in elke vluchttas en autokit.</li>
                </ul>
                <p>Begin je net? Dan is de Sawyer MINI de slimste eerste aankoop. Het is betaalbaar, extreem effectief en dekt je basisbehoeften voor een evacuatie. Van daaruit kun je later altijd nog upgraden naar een groter systeem voor thuis.</p>
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

export default FiltersVergelijkenPage;