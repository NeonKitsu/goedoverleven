
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'wouter';

const RegenwaterOpvangenPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-16 md:pb-0">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold text-green-900 mb-6">Een Regenwateropvangsysteem Bouwen: Jouw Eigen Waterbron</h1>
            <p className="text-lg text-slate-600 mb-10">Klaar voor de volgende stap in zelfredzaamheid? Het opvangen van regenwater is een van de meest effectieve manieren om een onafhankelijke, duurzame watervoorziening te creëren. Deze gids maakt het laagdrempelig en laat zien hoe je met simpele middelen een basis systeem opzet.</p>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">De 4 Essentiële Componenten</h2>
              <p className="text-slate-600 mt-2">Elk regenwateropvangsysteem, van simpel tot complex, bestaat uit vier basisonderdelen:</p>
              <ol className="list-decimal list-inside space-y-3 mt-4 text-slate-700">
                  <li><strong>Opvangoppervlak:</strong> Meestal het dak van je huis, schuur of garage.</li>
                  <li><strong>Transport:</strong> De dakgoten en regenpijpen die het water naar één punt leiden.</li>
                  <li><strong>Opslag:</strong> Een of meerdere regentonnen of grotere tanks om het water te bewaren.</li>
                  <li><strong>Zuivering:</strong> De cruciale stap om het opgevangen water drinkbaar te maken.</li>
              </ol>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Een Simpel Systeem Opzetten: Stapsgewijze Gids</h2>
              
              <div className="space-y-6 mt-6 text-slate-600">
                <p><strong>Stap 1: Installeer een Regenton.</strong><br/>
                Kies een voedselveilige regenton en plaats deze op een stabiele, verhoogde ondergrond (bijv. op een paar tegels). Dit maakt het makkelijker om water af te tappen via het kraantje. Sluit de ton aan op een regenpijp met een 'regentonvulautomaat', die te koop is bij elke bouwmarkt. Deze zorgt ervoor dat de ton niet overloopt.</p>
                
                <p><strong>Stap 2: De 'First Flush Diverter' (De Pro-Tip).</strong><br/>
                Dit is de belangrijkste upgrade voor schoner water. Een 'first flush diverter' is een stuk buis dat de eerste paar liter regenwater van een bui opvangt en wegleidt. Waarom? De eerste regen spoelt al het vuil van je dak: vogelpoep, bladeren, stof en andere vervuiling. Door deze 'eerste spoeling' apart op te vangen, houd je het water in je regenton aanzienlijk schoner. Je kunt deze systemen kopen of relatief eenvoudig zelf maken.</p>
                
                <p><strong>Stap 3: Voor-filteren bij de inlaat.</strong><br/>
                Plaats een stuk fijnmazig gaas of een oude panty over de inlaat van je regenton. Dit filtert bladeren, takjes en insecten uit het water voordat het de ton in gaat.</p>

                <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800">
                  <h4 className="font-bold text-2xl">⚠️ De Cruciale Laatste Stap: Zuiveren voor Consumptie ⚠️</h4>
                  <p className="mt-2">Opgevangen regenwater is <strong>NOOIT</strong> direct veilig om te drinken, zelfs niet als het er helder uitziet. Het bevat bacteriën van vogelpoep en andere verontreinigingen. Je moet het <strong>ALTIJD</strong> zuiveren voordat je het consumeert.</p>
                  <p className="mt-2">Gebruik hiervoor een van de methoden uit onze andere gidsen:</p>
                   <ul className="list-disc list-inside mt-2 font-semibold">
                      <li><Link to="/vaardigheden/water/filters-vergelijken" className="underline hover:text-green-700">Zuiver met een goed waterfilter</Link> (aanbevolen methode).</li>
                      <li><Link to="/vaardigheden/water/zuiveren-zonder-filter" className="underline hover:text-green-700">Kook het water</Link> gedurende 1 minuut.</li>
                  </ul>
                </div>
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

export default RegenwaterOpvangenPage;