
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'wouter';

const OverOnsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-16 md:pb-0">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-green-900 mb-6 text-center">Onze Missie: Van Onrust naar Zelfvertrouwen</h1>

          <div className="space-y-4 text-slate-600 text-lg mb-12">
            <p>Goedoverleven.nl is ontstaan uit een gevoel dat velen van ons vandaag de dag herkennen: een knagende onrust bij het zien van het wereldnieuws, gecombineerd met de diepgewortelde wens om onze dierbaren te beschermen. Het is het gevoel dat passief toekijken niet langer genoeg is, en de vraag: "Wat kan ik zélf doen?"</p>
            <p>Wij zijn geen extreme survivalists. We zijn pragmatische burgers, ouders en buren, net als jij. We zochten naar een betrouwbare, nuchtere bron van informatie, vrij van paniekzaaierij en complottheorieën. Een plek die de reële zorgen van vandaag serieus neemt en deze omzet in kalme, haalbare actie. Omdat we die plek niet konden vinden, hebben we hem zelf gebouwd.</p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Onze Reis</h2>
            <div className="space-y-4 text-slate-600 text-lg">
              <p>Onze reis begon niet in een bunker, maar aan de keukentafel. Met gesprekken over de kwetsbaarheid van onze systemen, de oproepen van overheden om veerkrachtiger te zijn, en de simpele vraag: "Zijn we wel voorbereid als de stroom een paar dagen uitvalt, of als we plotseling ons huis uit moeten?"</p>
              <p>We ontdekten dat voorbereiding vaak wordt gezien als iets extreems. Maar wij geloven dat het tegenovergestelde waar is. Voorbereiding is de meest verstandige en zorgzame daad die je kunt ondernemen. Het is het fundament onder een stabiel huishouden in een instabiele wereld.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 border-l-4 border-red-600 pl-4">Onze Filosofie: De Vier Pilaren van Goed Overleven</h2>
            <div className="grid md:grid-cols-2 gap-6 text-slate-600">
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <h3 className="font-bold text-lg text-green-800 mb-2">1. Nuchterheid boven Paniek</h3>
                    <p>Wij geloven niet in angst als motivator. Angst verlamt; kennis activeert. We presenteren realistische scenario's en bieden praktische, stapsgewijze oplossingen die je een gevoel van controle geven, geen gevoel van hopeloosheid.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <h3 className="font-bold text-lg text-green-800 mb-2">2. Vaardigheden boven Spullen</h3>
                    <p>Een noodpakket is essentieel, maar het is slechts het begin. Echte zelfredzaamheid zit in je hoofd en in je handen. Daarom focussen we net zo sterk op het aanleren van vaardigheden – zoals water zuiveren en koken zonder stroom – als op de juiste uitrusting. Kennis weegt niets en kan nooit van je worden afgenomen.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <h3 className="font-bold text-lg text-green-800 mb-2">3. Zelfredzaamheid is Zorgzaamheid</h3>
                    <p>Voorbereid zijn is geen egoïstische daad. Het is een daad van diepe zorgzaamheid. Door voor je eigen gezin te kunnen zorgen in een crisis, ontlast je de hulpdiensten en creëer je de capaciteit om een buur in nood te helpen.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <h3 className="font-bold text-lg text-green-800 mb-2">4. Gemeenschap is Kracht</h3>
                    <p>Uiteindelijk overleef je een crisis niet alleen. We moedigen het delen van kennis en het maken van afspraken met buren en vrienden aan. Een netwerk van voorbereide individuen vormt een veerkrachtige gemeenschap.</p>
                </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 border-l-4 border-red-600 pl-4">Wat Je Hier Vindt (en Wat Niet)</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                  <h3 className="text-2xl font-semibold text-green-800 mb-3">Wat je wel vindt:</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-600">
                      <li>Diepgaande, goed onderzochte gidsen en checklists.</li>
                      <li>Praktische, haalbare stappen die je vandaag nog kunt zetten.</li>
                      <li>Een eerlijke, nuchtere toon die je serieus neemt.</li>
                  </ul>
              </div>
              <div>
                  <h3 className="text-2xl font-semibold text-red-800 mb-3">Wat je niet vindt:</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-600">
                      <li>Paniekzaaierij of "einde van de wereld"-scenario's.</li>
                      <li>Complottheorieën of politieke agenda's.</li>
                      <li>Productreviews voor spullen die je niet echt nodig hebt.</li>
                  </ul>
              </div>
            </div>
          </section>

          <section className="text-center border-t border-gray-200 pt-8 mt-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Een Uitnodiging</h2>
              <div className="space-y-4 text-slate-600 text-lg max-w-3xl mx-auto">
                  <p>Je bent hier omdat je, net als wij, gelooft in verstandig vooruitzien. Je bent niet alleen. Goedoverleven.nl is jouw startpunt en je betrouwbare metgezel op de reis van onrust naar zelfvertrouwen.</p>
                  <p>De beste plek om te beginnen? Bij het fundament.</p>
              </div>
              <div className="mt-8">
                  <Link to="/noodpakket" className="inline-block text-white bg-red-600 hover:bg-red-700 transition-transform transform hover:scale-105 text-lg font-bold py-3 px-6 rounded-full shadow-lg">
                      Begin hier met jouw Noodpakket Gids »
                  </Link>
              </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OverOnsPage;