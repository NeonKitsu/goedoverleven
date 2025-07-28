
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacybeleidPage: React.FC = () => {
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
          <h1 className="text-4xl font-extrabold text-green-900 mb-6 text-center">Privacybeleid</h1>
          <p className="text-lg text-slate-600 mb-12">
            Uw privacy is belangrijk voor ons. Goedoverleven.nl is ontworpen om u te informeren en te helpen. In dit beleid leggen we transparant uit welke gegevens worden gebruikt en waarom.
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Gegevens die wij verzamelen</h2>
            <div className="space-y-4 text-slate-600">
              <p><strong>Persoonlijke Gegevens:</strong> We minimaliseren de verzameling van persoonlijke gegevens. Voor het gebruik van de website hoeft u geen account aan te maken en kunt u anoniem blijven. Er zijn twee specifieke gevallen waarin gegevens worden gebruikt:</p>
              
              <div className="p-4 bg-green-50 border-l-4 border-green-500">
                <h3 className="font-bold text-lg text-green-800">1. De Interactieve Noodpakket-Checklist</h3>
                <p className="mt-2 text-green-700">Om uw gebruiksgemak te vergroten, maakt onze interactieve checklist gebruik van de 'Local Storage' van uw browser. Dit betekent dat de volgende gegevens <strong>uitsluitend op uw eigen apparaat worden opgeslagen</strong>:</p>
                <ul className="list-disc list-inside mt-2 pl-4">
                  <li>Het aantal volwassenen en kinderen in uw huishouden.</li>
                  <li>Welke items u heeft afgevinkt op de checklist.</li>
                </ul>
                <p className="mt-2 font-bold">Deze informatie wordt nooit naar onze servers verzonden en is voor ons niet inzichtelijk. Het doel is puur functioneel: als u de pagina verlaat en later terugkomt, is uw voortgang bewaard gebleven.</p>
              </div>

              <div className="p-4 bg-blue-50 border-l-4 border-blue-500">
                <h3 className="font-bold text-lg text-blue-800">2. Contactformulier (Google Forms)</h3>
                <p className="mt-2 text-blue-700">Wanneer u contact met ons opneemt via het contactformulier, deelt u uw naam en e-mailadres met ons. Wij gebruiken deze gegevens uitsluitend om op uw vraag of opmerking te reageren.</p>
                <p className="mt-2 font-semibold text-blue-700">Deze gegevens worden bewaard zolang de correspondentie duurt en totdat uw vraag naar tevredenheid is beantwoord. Daarna worden deze gegevens verwijderd.</p>
              </div>

            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Cookies en Diensten van Derden</h2>
            <div className="space-y-4 text-slate-600">
              <p><strong>First-Party Cookies:</strong> Goedoverleven.nl plaatst zelf geen tracking- of advertentiecookies.</p>
              <p><strong>Diensten van Derden:</strong> Om de website snel en betrouwbaar te maken, maken we gebruik van externe diensten (Content Delivery Networks of CDNs) voor het laden van lettertypen (rsms.me), styling (cdn.tailwindcss.com) en scripts (esm.sh, cdnjs.cloudflare.com). Wanneer uw browser verbinding maakt met deze diensten om de website op te bouwen, kunnen zij uw IP-adres en browserinformatie ontvangen. Dit is standaard werking van het internet. Wij hebben geen controle over het privacybeleid van deze partijen.</p>
              <p><strong>Affiliate Links:</strong> Zoals vermeld in onze disclaimer, kunnen wij affiliate links gebruiken. Als u op zo'n link klikt en een aankoop doet, kan de desbetreffende partner een cookie plaatsen om de verwijzing te volgen. Dit gebeurt op de website van de partner, buiten onze controle.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Uw Rechten en Controle</h2>
            <div className="space-y-4 text-slate-600">
              <p>U heeft volledige controle over de gegevens die op uw apparaat worden opgeslagen.</p>
              <ul className="list-disc list-inside space-y-2 mt-4 pl-2">
                <li>U kunt de opgeslagen checklist-gegevens op elk moment wissen door de "Reset Checklist" knop op de checklistpagina te gebruiken.</li>
                <li>U kunt alle websitegegevens, inclusief Local Storage, handmatig verwijderen via de instellingen van uw webbrowser.</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Beveiliging</h2>
            <div className="space-y-4 text-slate-600">
              <p>Aangezien wij geen persoonlijke gegevens op onze servers opslaan, met uitzondering van de tijdelijke opslag van contactgegevens, is het risico dat uw persoonlijke informatie bij ons uitlekt minimaal. De veiligheid van de gegevens op uw eigen apparaat is uw eigen verantwoordelijkheid.</p>
            </div>
          </section>
          
          <div className="text-center border-t border-gray-200 pt-8 mt-12 text-slate-600">
            <p>Dit privacybeleid kan in de toekomst worden bijgewerkt. Wij raden u aan deze pagina regelmatig te raadplegen.</p>
            <p className="mt-4 text-sm text-gray-500">Laatst bijgewerkt: {currentDate}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacybeleidPage;
