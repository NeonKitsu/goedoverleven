
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DisclaimerPage: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('nl-NL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-16 md:pb-0">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-green-900 mb-6 text-center">Disclaimer</h1>
          <p className="text-lg text-slate-600 mb-12">
            De informatie op Goedoverleven.nl wordt met de grootst mogelijke zorgvuldigheid samengesteld en is bedoeld om u te helpen bij uw persoonlijke voorbereiding op noodsituaties. Door gebruik te maken van deze website, gaat u akkoord met de voorwaarden van deze disclaimer.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Geen Professioneel Advies</h2>
            <div className="space-y-4 text-slate-600">
              <p>De inhoud van deze website, inclusief alle artikelen, gidsen, checklists en aanbevelingen, is uitsluitend bedoeld voor informatieve en educatieve doeleinden. De informatie op Goedoverleven.nl is geen vervanging voor professioneel advies van gekwalificeerde experts.</p>
              <ul className="list-disc list-inside space-y-3 mt-4 pl-2">
                <li>
                  <strong>Medische Informatie:</strong> Hoewel we algemene EHBO- en hygiëne-richtlijnen bespreken, is deze informatie geen medisch advies. Raadpleeg bij medische vragen, aandoeningen of noodgevallen altijd een arts, apotheker of andere gekwalificeerde zorgverlener. Gebruik nooit informatie van deze website om een medische diagnose te stellen of een behandeling te starten zonder professioneel overleg.
                </li>
                <li>
                  <strong>Technische en Veiligheidsinformatie:</strong> Bij het bespreken van onderwerpen zoals koken zonder stroom, waterzuivering of het gebruik van gereedschap, geven we algemene richtlijnen. Het is uw eigen verantwoordelijkheid om de handleidingen van specifieke producten te lezen en te volgen, en alle noodzakelijke veiligheidsmaatregelen te treffen om ongelukken, brand of andere gevaren te voorkomen.
                </li>
                <li>
                  <strong>Juridische Informatie:</strong> Waar we onderwerpen als jagen of vissen bespreken, is dit puur hypothetisch en educatief. De wet- en regelgeving is complex en kan veranderen. Raadpleeg altijd de actuele, lokale wetgeving en officiële instanties voor juridisch bindende informatie.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Eigen Verantwoordelijkheid</h2>
            <div className="space-y-4 text-slate-600">
              <p>Voorbereiden op noodsituaties is een persoonlijke verantwoordelijkheid. De scenario's en aanbevelingen op deze website zijn algemeen van aard. Elke noodsituatie is uniek en vereist een eigen inschatting en aanpak. Het is uw eigen verantwoordelijkheid om de informatie te evalueren en te bepalen of deze van toepassing is op uw persoonlijke situatie, gezondheid, en omgeving.</p>
              <p>Goedoverleven.nl, de eigenaars en de auteurs aanvaarden geen enkele aansprakelijkheid voor enige directe of indirecte schade, letsel of verlies die zou kunnen voortvloeien uit het gebruik (of het onvermogen tot gebruik) van de informatie op deze website. Het toepassen van de verstrekte informatie is volledig op eigen risico.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Externe Links en Affiliate Links</h2>
            <div className="space-y-4 text-slate-600">
              <p>Deze website kan links bevatten naar externe websites van derden. Wij hebben geen controle over de inhoud van deze websites en zijn niet verantwoordelijk voor de informatie, producten of diensten die daar worden aangeboden.</p>
              <p>Daarnaast kan Goedoverleven.nl gebruikmaken van affiliate links. Dit betekent dat wij een kleine commissie kunnen ontvangen als u een product koopt via een van onze links, zonder extra kosten voor u. Dit helpt ons om de website te onderhouden en nieuwe, waardevolle content te creëren. We bevelen alleen producten en diensten aan waar we zelf achter staan en die we relevant achten voor onze lezers. Onze redactionele onafhankelijkheid staat hierbij voorop.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Officiële Bronnen</h2>
            <div className="space-y-4 text-slate-600">
              <p>Voor de meest actuele en officiële informatie en waarschuwingen tijdens een crisis, verwijzen wij u altijd naar de officiële kanalen van de Nederlandse overheid, zoals de websites van de Rijksoverheid, uw veiligheidsregio, en de calamiteitenzenders.</p>
            </div>
          </section>
          
          <div className="text-center border-t border-gray-200 pt-8 mt-12 text-slate-600">
            <p>Door deze website te blijven gebruiken, bevestigt u dat u deze disclaimer hebt gelezen, begrepen en ermee akkoord gaat.</p>
            <p className="mt-4 text-sm text-gray-500">Laatst bijgewerkt: {currentDate}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DisclaimerPage;
