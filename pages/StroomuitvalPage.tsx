
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'wouter';

const StroomuitvalPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-16 md:pb-0">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-green-900 mb-6">Voorbereiden op Stroomuitval: Een Praktische Gids</h1>
          
          <div className="mb-12">
            <div className="space-y-4 text-slate-600 text-lg">
                <p>Van alle mogelijke scenario's is een langdurige stroomuitval misschien wel de meest onderschatte. Het is geen spectaculaire ramp, maar een stille ontwrichter die ons direct confronteert met onze afhankelijkheid van elektriciteit. Plotseling is er geen licht, geen verwarming, geen internet en geen manier om te koken.</p>
                <p>Je hebt al een basis noodpakket, wat een uitstekende start is. Maar om een stroomstoring écht het hoofd te bieden, moeten we de focus verleggen van puur overleven naar het actief behouden van comfort, veiligheid en moraal. Deze gids geeft je een concreet plan, opgebouwd rond de drie grootste uitdagingen: warmte, licht en een warme maaltijd.</p>
            </div>
          </div>

          <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Prioriteit #1: Je Huis en Gezin Warm Houden</h2>
              <div className="space-y-4 text-slate-600">
                  <p>Wanneer de centrale verwarming uitvalt, wordt het behoud van lichaamswarmte de belangrijkste taak. Een koud huis tast niet alleen het comfort aan, maar kan ook gevaarlijk zijn.</p>
                  <ul className="list-disc list-inside space-y-3">
                      <li><strong>De Laagjes-Strategie:</strong> Dit is de meest effectieve eerste verdedigingslinie. Draag thermokleding, meerdere lagen (wol, fleece) en een muts, zelfs binnenshuis.</li>
                      <li><strong>Creëer een 'Warme Kamer':</strong> Kies één, liefst kleinere, kamer in huis om als centrale leefruimte te gebruiken. Sluit de deuren naar andere kamers en gebruik handdoeken of dekens om kieren onder de deuren af te dichten.</li>
                      <li><strong>Gebruik wat je Hebt:</strong> Haal alle dekens, slaapzakken en dekbedden tevoorschijn. Samen onder een deken op de bank is niet alleen warmer, maar ook goed voor het moraal.</li>
                      <li><strong>Alternatieve Warmtebronnen (met waarschuwing):</strong> Overweeg je een petroleum- of gaskachel voor binnen? Wees je bewust van de risico's. Zorg altijd voor adequate ventilatie (een raam op een kier) en de nabijheid van een werkende koolmonoxidemelder. Gebruik deze bronnen nooit terwijl je slaapt.</li>
                  </ul>
              </div>
          </section>

          <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Prioriteit #2: De Duisternis Verdrijven met Veilig Licht</h2>
              <div className="space-y-4 text-slate-600">
                  <p>Duisternis is desoriënterend en kan, zeker voor kinderen, beangstigend zijn. Een gelaagde aanpak van verlichting is essentieel.</p>
                  
                  <h3 className="text-2xl font-bold text-slate-700 pt-4">De Werkpaarden (LED-verlichting)</h3>
                  <p>De veiligste en meest efficiënte keuze.</p>
                  <ul className="list-disc list-inside space-y-2 mt-4">
                      <li><strong>Hoofdlampen:</strong> Het allerbelangrijkste. Je hebt je handen vrij voor andere taken. Zorg voor één per gezinslid.</li>
                      <li><strong>LED-lantaarns:</strong> Ideaal om een hele kamer van een stabiele, zachte gloed te voorzien.</li>
                  </ul>

                  <h3 className="text-2xl font-bold text-slate-700 pt-4">De Stroombronnen (De Achilleshiel)</h3>
                  <ul className="list-disc list-inside space-y-2 mt-4">
                      <li><strong>Batterijen:</strong> Zorg voor minimaal twee volle reservesets voor elke lamp.</li>
                      <li><strong>Powerbanks:</strong> Een grote, volledig opgeladen powerbank (min. 20.000 mAh) is de held van de moderne stroomstoring. Hiermee laad je niet alleen je lampen, maar ook je telefoon meerdere keren op.</li>
                  </ul>

                  <h3 className="text-2xl font-bold text-slate-700 pt-4">De Sfeermaker (Kaarsen)</h3>
                  <p>Kaarsen geven een fijn gevoel, maar zijn een groot brandrisico. Gebruik ze alleen in stevige, stabiele houders, op een onbrandbare ondergrond en laat ze nooit onbeheerd achter.</p>
              </div>
          </section>

          <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Prioriteit #3: De Kracht van een Warme Maaltijd</h2>
              <div className="space-y-4 text-slate-600">
                  <p>Het psychologische effect van een warme drank of een warme maaltijd is enorm. Het biedt troost, energie en een gevoel van normaliteit.</p>
                  
                  <h3 className="text-2xl font-bold text-slate-700 pt-4">De Keuken Buitenshuis</h3>
                  <p>De veiligste manier om te koken is met een klein, draagbaar campinggasstel of een barbecue. Gebruik deze apparaten vanwege het risico op koolmonoxidevergiftiging altijd buiten, op een balkon, terras of in de tuin.</p>
                  
                  <h3 className="text-2xl font-bold text-slate-700 pt-4">De Voorraadkast</h3>
                  <p>Stem je voedselvoorraad af op deze kookmethode.</p>
                  <ul className="list-disc list-inside space-y-2 mt-4">
                      <li><strong>"Voeg alleen water toe"-maaltijden:</strong> Instant noedels, couscous, havermout, soep- en koffiepoeder zijn ideaal.</li>
                      <li><strong>Opwarm-maaltijden:</strong> Blikken soep, stoofpot of knakworstjes zijn een voedzame en geruststellende optie.</li>
                  </ul>
              </div>
          </section>

          <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Het Digitale Leven: Communicatie en Vermaak</h2>
              <div className="space-y-4 text-slate-600">
                  <p>In een stroomstoring is je telefoon je verbinding met de buitenwereld, maar de accu is eindig.</p>
                  <ul className="list-disc list-inside space-y-3">
                      <li><strong>Spaar je Batterij:</strong> Zet je telefoon op de spaarstand en verlaag de helderheid van het scherm.</li>
                      <li><strong>De Opwindradio:</strong> Gebruik voor het volgen van de calamiteitenzender een opwindradio, niet je telefoon. Dit spaart de accu van je telefoon voor communicatie met familie.</li>
                      <li><strong>Analoge Afleiding:</strong> Een stroomstoring is het perfecte moment voor een pak kaarten, een bordspel of een goed boek. Het houdt de sfeer luchtig en voorkomt dat iedereen zich focust op wat er niet is.</li>
                  </ul>
              </div>
          </section>
          
           <div className="space-y-4 text-slate-600 text-lg">
             <p>Door je voor te bereiden op deze specifieke uitdagingen, verander je een potentieel stressvolle stroomuitval in een beheersbaar, en misschien zelfs een beetje avontuurlijk, scenario.</p>
          </div>
          
          <div className="relative z-10 container mx-auto flex flex-col items-center justify-center my-12 text-center">
            <Link to="/noodpakket" className="inline-block text-white bg-red-600 hover:bg-red-700 transition-transform transform hover:scale-105 text-xl md:text-2xl font-bold py-4 px-8 rounded-full shadow-lg">
                « Terug naar de Noodpakket Gids
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StroomuitvalPage;