
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'wouter';

const JagenEnVissenPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-16 md:pb-0">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-green-900 mb-6">Jagen en Vissen in een Noodsituatie: Wetgeving en Basisprincipes</h1>
          <p className="text-lg text-slate-600 mb-10">Dit is een geavanceerd onderwerp dat bedoeld is voor een specifiek, extreem en langdurig scenario waarin de normale voedselketens volledig zijn ingestort. Het is theoretische kennis die hopelijk nooit nodig zal zijn.</p>

          <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-800 mb-12">
            <h4 className="font-bold text-2xl">⚠️ BELANGRIJKE DISCLAIMER: WET- EN REGELGEVING ⚠️</h4>
            <p className="mt-2">Onder de huidige Nederlandse wetgeving is jagen zonder jachtakte en vissen zonder de juiste vergunningen (zoals de VISpas) <strong>strikt verboden en strafbaar</strong>. Deze gids is <strong>GEEN</strong> aanmoediging om de wet te overtreden. De hier besproken vaardigheden zijn enkel bedoeld als kennis voor een hypothetisch, extreem 'Without Rule of Law' (WROL) scenario.</p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Basisprincipes van Vissen</h2>
            <div className="space-y-4 text-slate-600">
              <p>Vissen is energie-efficiënter en vaak succesvoller dan jagen. Het is een uitstekende bron van eiwitten.</p>
              <p><strong>Simpele Hengel (Pole and Line):</strong> Je hebt geen dure uitrusting nodig. Een lange, flexibele tak, een stuk visdraad, een dobber (een stukje kurk of schuim), een gewichtje en een haak is alles wat je nodig hebt. Zoek naar plekken waar vissen zich kunnen verschuilen, zoals bij waterplanten, omgevallen bomen of in diepere poelen.</p>
              <p><strong>Passieve Methoden (Visvallen):</strong> Een visval, zoals een fuik gemaakt van takken of een plastic fles, kan effectief zijn. Het idee is om een trechtervormige ingang te creëren waar vissen makkelijk in, maar moeilijk uit kunnen zwemmen. Dit vereist geduld en de juiste plaatsing.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Basisprincipes van Vallen Zetten (Theoretisch)</h2>
            <div className="space-y-4 text-slate-600">
              <p>Het actief jagen met een vuurwapen of boog vereist extreem veel vaardigheid en is inefficiënt. Het zetten van vallen voor klein wild (zoals konijnen of vogels) is een meer realistische, passieve methode.</p>
              <p><strong>Snare/Strik:</strong> Een simpele lus van draad of touw die op een wildpad wordt geplaatst. Wanneer het dier erdoorheen loopt, trekt de strik strak. Dit is de meest basale vorm van een val.</p>
              <p><strong>Kennis van het Wild:</strong> Het succes van vallen zetten hangt volledig af van je kennis. Waar loopt het wild? Wat zijn hun paden (game trails)? Welke sporen laten ze achter? Zonder deze kennis is het plaatsen van vallen zinloos.</p>
            </div>
          </section>
          
          <section>
             <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Het Belangrijkste Principe: Kennis en Ethiek</h2>
             <div className="space-y-4 text-slate-600">
               <p>Als een dergelijk scenario zich ooit zou voordoen, is het van het grootste belang om op een respectvolle en efficiënte manier met de natuur om te gaan. Dit betekent: het correct en snel doden van een dier om lijden te minimaliseren, en het gebruiken van elk deel van het dier om verspilling te voorkomen. Dit zijn vaardigheden die diepgaande studie en oefening vereisen (waar toegestaan en legaal).</p>
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

export default JagenEnVissenPage;