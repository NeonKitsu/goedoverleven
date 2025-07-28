
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'wouter';

const LangdurigOpslaanPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-16 md:pb-0">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold text-green-900 mb-6">Water Langdurig Opslaan: Een Simpel Stappenplan voor een Veilige Voorraad</h1>
            <p className="text-lg text-slate-600 mb-10">De makkelijkste en snelste manier om je waterzekerheid te vergroten is door een voorraad aan te leggen. Kraanwater in Nederland is van uitstekende kwaliteit en kan perfect worden opgeslagen. Met dit stappenplan zorg je ervoor dat je water maanden, of zelfs jaren, veilig en drinkbaar blijft.</p>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Stap 1: Kies de Juiste Containers</h2>
              <p className="text-slate-600 mt-2 mb-4">Dit is de belangrijkste stap. Gebruik alleen containers gemaakt van voedselveilig plastic. Zoek naar de volgende symbolen op de bodem van de container:</p>
              <ul className="list-disc list-inside space-y-3 text-slate-700">
                <li><strong>HDPE (symbool #2):</strong> Hoge-dichtheid polyetheen. Dit is het beste materiaal. Het is stevig, ondoorzichtig en lekt geen chemicaliën. Vaak gebruikt voor grotere watercontainers en jerrycans.</li>
                <li><strong>PET of PETE (symbool #1):</strong> Polyethyleentereftalaat. Ook een goede, veilige keuze. Dit is het materiaal van de meeste frisdrank- en waterflessen die je in de winkel koopt.</li>
              </ul>
              <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-800">
                <h4 className="font-bold">Wat je NOOIT moet gebruiken:</h4>
                <p>Gebruik nooit melkpakken of -kannen. Eiwit- en suikerresten zijn bijna onmogelijk volledig te verwijderen en bevorderen bacteriegroei. Gebruik ook geen containers die voor sappen of andere chemicaliën zijn gebruikt.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Stap 2: Schoonmaken en Desinfecteren</h2>
              <p className="text-slate-600 mt-2">Als je nieuwe containers gebruikt, is omspoelen voldoende. Als je gebruikte (maar veilige) containers hergebruikt, volg dan deze stappen:</p>
              <ol className="list-decimal list-inside space-y-2 mt-4 text-slate-700">
                  <li>Was de container grondig met afwasmiddel en water en spoel goed na.</li>
                  <li>Desinfecteer door een oplossing van 1 theelepel ongeparfumeerde bleek op 1 liter water te maken.</li>
                  <li>Giet de oplossing in de container, sluit hem en schud goed zodat de oplossing alle oppervlakken raakt.</li>
                  <li>Laat 2 minuten staan, giet de oplossing eruit en laat de container aan de lucht drogen. Niet naspoelen.</li>
              </ol>
            </section>
            
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Stap 3: Vullen en Verzegelen</h2>
              <p className="text-slate-600 mt-2">Vul de schone container rechtstreeks uit de kraan met koud water. Vul hem helemaal tot de rand, zodat er zo min mogelijk lucht overblijft. Lucht bevordert de groei van micro-organismen. Draai de dop er stevig op.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Stap 4: Opslaan: Koel, Donker en Veilig</h2>
              <p className="text-slate-600 mt-2">De ideale opslagplek is koel, donker en niet in direct contact met een betonnen vloer (dit kan de smaak beïnvloeden). Denk aan een kelder, een koele berging of een kast.</p>
               <ul className="list-disc list-inside space-y-2 mt-4 text-slate-700">
                  <li><strong>Koel:</strong> Voorkomt de groei van bacteriën.</li>
                  <li><strong>Donker:</strong> UV-licht van de zon kan plastic aantasten en algengroei bevorderen.</li>
              </ul>
            </section>
            
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Stap 5: Labelen en Roteren</h2>
              <p className="text-slate-600 mt-2">Label elke container met de datum waarop je hem hebt gevuld. Hoewel correct opgeslagen water bijna onbeperkt goed blijft, is het een goede gewoonte om je watervoorraad elke 6 tot 12 maanden te roteren. Gebruik het oudste water (voor de planten, om schoon te maken, of om te drinken) en vul de container opnieuw. Dit heet het FIFO-systeem: First-In, First-Out.</p>
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

export default LangdurigOpslaanPage;