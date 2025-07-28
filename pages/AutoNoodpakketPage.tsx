
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'wouter';

const AutoNoodpakketPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-16 md:pb-0">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-green-900 mb-6">Voorbereid op Pech Onderweg: De Essentiële Noodkit voor in je Auto</h1>
          
          <div className="mb-12">
            <div className="space-y-4 text-slate-600 text-lg">
                <p>Stel je voor: het is donker, het regent en je staat met pech langs een drukke weg. Je telefoonaccu is bijna leeg en de Wegenwacht laat nog even op zich wachten. Dit is geen grootschalige crisis, maar een zeer reëel en vervelend scenario dat iedereen kan overkomen. Precies voor deze momenten is een goed doordachte autokit geen luxe, maar een essentieel stuk gereedschap.</p>
                <p>Dit pakket is anders dan je noodpakket voor thuis. Het is geen 72-uurs overlevingskit, maar een compacte 'anti-gedoe-kit'. Het doel is simpel: een potentieel stressvolle en onveilige situatie omzetten in een beheersbaar, veilig en relatief comfortabel ongemak. Deze gids geeft je de complete, praktische checklist.</p>
            </div>
          </div>

          <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Pijler 1: Maak Jezelf Zichtbaar en Veilig</h2>
              <div className="space-y-4 text-slate-600">
                  <p>Voordat je ook maar iets aan de auto doet, is jouw eigen veiligheid prioriteit. Zichtbaarheid kan je leven redden. Deze drie items zijn wettelijk verplicht of simpelweg onmisbaar:</p>
                  <ul className="list-disc list-inside space-y-2 mt-4">
                      <li><strong>Veiligheidshesje:</strong> Het allereerste wat je aantrekt voordat je uitstapt. Bewaar het binnen handbereik, bijvoorbeeld in het dashboardkastje, niet in de kofferbak.</li>
                      <li><strong>Gevarendriehoek:</strong> Plaats deze op voldoende afstand achter de auto (ongeveer 30 meter binnen de bebouwde kom, 100 meter daarbuiten) om ander verkeer tijdig te waarschuwen.</li>
                      <li><strong>Werkende Verlichting:</strong> Controleer regelmatig of je alarmlichten functioneren. Een goede zaklamp, bij voorkeur een hoofdlamp om je handen vrij te houden, is 's nachts onmisbaar.</li>
                  </ul>
              </div>
          </section>

          <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Pijler 2: Los Kleine Problemen Zelf Op</h2>
              <div className="space-y-4 text-slate-600">
                  <p>Wachten op hulp is niet altijd nodig. Met een paar basisitems kun je de meest voorkomende problemen zelf verhelpen en je weg vervolgen.</p>
                  <ul className="list-disc list-inside space-y-2 mt-4">
                      <li><strong>Startkabels:</strong> De absolute nummer één. Een lege accu is de meest voorkomende pech-oorzaak. Met een goede set kabels en een helpende medeweggebruiker ben je zo weer op weg.</li>
                      <li><strong>Bandenspanningsmeter & Pomp:</strong> Een kleine, 12V-compressor die je in de sigarettenaansteker plugt, kan een langzaam leeglopende band oppompen zodat je de dichtstbijzijnde garage kunt bereiken.</li>
                      <li><strong>Multitool & Ducttape:</strong> Voor onverwachte kleine reparaties, zoals het vastzetten van een loshangend onderdeel.</li>
                  </ul>
              </div>
          </section>

          <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Pijler 3: Zorg voor Comfort en Communicatie</h2>
              <div className="space-y-4 text-slate-600">
                  <p>Als je moet wachten, is persoonlijk comfort cruciaal om kalm te blijven. Een stilstaande auto koelt extreem snel af, vooral in de winter.</p>
                  <ul className="list-disc list-inside space-y-2 mt-4">
                      <li><strong>Wollen Deken:</strong> Veel effectiever dan de kachel van de auto laten draaien, wat je accu en brandstof kost. Een nooddeken van folie is een ultracompacte back-up.</li>
                      <li><strong>Water & Houdbare Snacks:</strong> Een paar flessen water en wat energierepen of noten voorkomen uitdroging en een hongerklop, wat stress vermindert.</li>
                      <li><strong>Powerbank & Autolader:</strong> Je telefoon is je levenslijn voor hulp en contact. Zorg dat je deze altijd kunt opladen. Een volle powerbank in het dashboardkastje is de beste garantie.</li>
                      <li><strong>Compacte EHBO-set:</strong> Voor kleine snijwonden bij een reparatie of een simpele hoofdpijn.</li>
                  </ul>
              </div>
          </section>

          <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">De Seizoens-Upgrade: Winter vs. Zomer</h2>
              <div className="space-y-4 text-slate-600">
                  <p>Een slimme kit past zich aan de seizoenen aan. Berg je "zomer-items" in een aparte tas op en wissel deze met de "winter-items" wanneer je ook je banden wisselt.</p>
                  <ul className="list-disc list-inside space-y-2 mt-4">
                      <li><strong>Winter-essentials:</strong> IJskrabber, ruitontdooier, werkhandschoenen, een kleine zak strooizout of kattenbakvulling voor grip in de sneeuw.</li>
                      <li><strong>Zomer-essentials:</strong> Extra flessen water, een zonnescherm voor de voorruit om de auto koel te houden, zonnebrandcrème.</li>
                  </ul>
              </div>
          </section>

          <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Een Goed Georganiseerde Kit is een Snelle Kit</h2>
              <div className="space-y-4 text-slate-600">
                  <p>Het laatste wat je wilt in een stressvolle situatie is door je hele kofferbak moeten graven. Bewaar alle items in één stevige, duidelijk gelabelde tas of bak. Zo kun je in het donker op de tast vinden wat je nodig hebt. Controleer de inhoud twee keer per jaar: test de zaklamp en vervang de snacks en EHBO-items die over de datum zijn. Zo is je kit altijd betrouwbaar en klaar voor gebruik.</p>
              </div>
          </section>

          <div className="relative z-10 container mx-auto flex flex-col items-center justify-center my-12 text-center">
              <Link to="/noodpakket/samenstellen-noodpakket" className="inline-block text-white bg-red-600 hover:bg-red-700 transition-transform transform hover:scale-105 text-xl md:text-2xl font-bold py-4 px-8 rounded-full shadow-lg">
                  Stel je volledige noodpakket samen »
              </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AutoNoodpakketPage;