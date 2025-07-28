
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'wouter';

const OverstromingenNoodpakketPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-16 md:pb-0">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-green-900 mb-6">Overstroming: Je Specialistische Noodpakket</h1>
          
          <div className="mb-12">
            <div className="space-y-4 text-slate-600 text-lg">
                <p>Van alle scenario's waar we ons in Nederland op kunnen voorbereiden, is een overstroming misschien wel de meest indringende. Anders dan bij andere calamiteiten, is het water hier geen gevolg, maar de actieve dreiging zelf. Het test de muren van je huis, het bedreigt je gezondheid en het verandert je vertrouwde omgeving in een onbegaanbaar landschap.</p>
                <p>Een standaard noodpakket is het fundament, maar is niet opgewassen tegen de specifieke kracht van water. Deze gids is jouw specialistische upgrade. We focussen op de cruciale items en acties die nodig zijn om je voor te bereiden op de unieke uitdagingen van hoogwater, en geven je een concreet plan om van onzekerheid naar een waterdichte voorbereiding te gaan.</p>
            </div>
          </div>

          <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Stap 1: Ken je Risico en Bereid je Huis Voor</h2>
              <div className="space-y-4 text-slate-600">
                  <p>Voordat de crisis er is, kun je al cruciale stappen zetten.</p>
                  <ul className="list-disc list-inside space-y-3">
                      <li><strong>De Eerste, Belangrijkste Vraag:</strong> Ga naar overstroomik.nl en vul je postcode in. Weet hoe hoog het water in jouw straat kan komen. Dit is de basis van je hele plan.</li>
                      <li><strong>Verdedig je Woning:</strong> Schaf zandzakken of moderne, waterkerende schotten aan voor laaggelegen deuren, roosters en ramen. Oefen met het plaatsen ervan.</li>
                      <li><strong>Creëer een Veilige Zone:</strong> Verplaats onvervangbare bezittingen (foto's, belangrijke documenten) en dure elektronica permanent naar een hogere verdieping.</li>
                  </ul>
              </div>
          </section>

          <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Stap 2: De "Waterdichte" Upgrade van je Noodpakket</h2>
              <div className="space-y-4 text-slate-600">
                  <p>Je basis noodpakket vullen we aan met items die specifiek ontworpen zijn om de strijd met water te winnen.</p>
                  <h3 className="text-2xl font-bold text-slate-700 pt-4">Checklist: Waterdichtheid & Opslag</h3>
                   <ul className="list-disc list-inside space-y-2 mt-4">
                      <li><strong>Dry Bags:</strong> Dit zijn de reddingsboten voor je spullen. Investeer in een paar kwalitatieve 'dry bags' (zoals gebruikt bij kajakken) voor je vluchttas. Hierin blijven je kleding, elektronica en documenten 100% droog.</li>
                      <li><strong>Waterdichte Tonnen:</strong> Voor je grotere thuisvoorraad (voedsel, dekens) is een stevige, afsluitbare ton ideaal. Groot voordeel: deze blijven drijven.</li>
                      <li><strong>Dubbele Bescherming:</strong> Verpak de meest kwetsbare items (medicijnen, batterijen, lucifers) nogmaals in aparte ziplock-zakjes binnenin je dry bag.</li>
                  </ul>
                   <h3 className="text-2xl font-bold text-slate-700 pt-4">Checklist: Mobiliteit & Evacuatie</h3>
                   <ul className="list-disc list-inside space-y-2 mt-4">
                      <li><strong>Waadpak of Hoge Laarzen:</strong> Dit is geen luxe. Jezelf verplaatsen door koud en vervuild water zonder de juiste bescherming leidt snel tot onderkoeling en gevaarlijke infecties aan je voeten.</li>
                      <li><strong>Hoofdlamp:</strong> Essentieel om je handen vrij te houden voor balans of om een kind te dragen. Kies een waterbestendig (IPX4 of hoger) model.</li>
                      <li><strong>Fluitje:</strong> Een simpel, plastic fluitje aan een koord om je nek is de meest effectieve manier om de aandacht van hulpverleners te trekken als je geïsoleerd raakt.</li>
                  </ul>
              </div>
          </section>

          <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Stap 3: Bescherm je Gezondheid tegen Onzichtbare Gevaren</h2>
               <div className="space-y-4 text-slate-600">
                  <p>Overstromingswater is extreem vervuild en een bron van ziektes. Je hygiëne- en EHBO-kit hebben een upgrade nodig.</p>
                  <ul className="list-disc list-inside space-y-3">
                      <li><strong>Waterzuivering:</strong> Ga er nooit vanuit dat kraanwater nog veilig is. Een waterfilter (zoals een Sawyer Mini) of zuiveringstabletten zijn absoluut noodzakelijk om van elke waterbron veilig drinkwater te kunnen maken.</li>
                      <li><strong>Desinfectie:</strong> Verdubbel je voorraad desinfecterende handgel en chloorhexidine of jodium voor wondontsmetting.</li>
                      <li><strong>Rubberen Handschoenen:</strong> Draag altijd stevige, rubberen handschoenen wanneer je in contact moet komen met het overstromingswater of besmette objecten.</li>
                  </ul>
              </div>
          </section>
          
          <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Stap 4: Het Evacuatieplan in Actie</h2>
               <div className="space-y-4 text-slate-600">
                  <p>Als de autoriteiten oproepen tot evacuatie, of als je de situatie zelf niet meer vertrouwt, treedt je plan in werking.</p>
                  <ul className="list-disc list-inside space-y-3">
                      <li><strong>Sluit Alles Af:</strong> Voordat je vertrekt, sluit je gas, water en elektriciteit af bij de hoofdaansluiting om brand of verdere schade te voorkomen.</li>
                      <li><strong>Volg je Route:</strong> Gebruik de vooraf uitgestippelde, veilige vluchtroute naar je hoger gelegen ontmoetingsplek.</li>
                      <li><strong>Luister naar de Calamiteitenzender:</strong> Houd je opwindradio bij de hand voor de laatste officiële instructies.</li>
                  </ul>
              </div>
          </section>

          <div className="space-y-4 text-slate-600 text-lg">
             <p>Door je voor te bereiden op deze specifieke waterdreigingen, ben je niet alleen voorbereid op een crisis, maar heb je een doordacht en robuust plan dat je de controle en rust geeft om de juiste beslissingen te nemen voor de veiligheid van je gezin.</p>
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

export default OverstromingenNoodpakketPage;