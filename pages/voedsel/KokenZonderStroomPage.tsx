
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'wouter';

const KokenZonderStroomPage: React.FC = () => {
  const options = [
    { name: "Campinggasstel (Propaan/Butaan)", fuel: "Gasflesjes", power: "Hoog, goed regelbaar", safety: "Buiten gebruiken; goed ventileren", cost: "Laag in aanschaf, brandstof medium", portability: "Zeer draagbaar" },
    { name: "Houtgestookte Rocket Stove", fuel: "Sprietjeshout, takjes", power: "Zeer hoog, moeilijk regelbaar", safety: "Alleen buiten gebruiken", cost: "Medium in aanschaf, brandstof gratis", portability: "Redelijk draagbaar" },
    { name: "Barbecue (Houtskool/Briketten)", fuel: "Houtskool/briketten", power: "Medium, traag op temperatuur", safety: "Alleen buiten gebruiken", cost: "Variabel, brandstof medium", portability: "Minder draagbaar" },
    { name: "Esbit/Spiritus Brander", fuel: "Vaste blokjes/spiritus", power: "Laag, vooral voor opwarmen", safety: "Buiten gebruiken; goed ventileren", cost: "Zeer laag in aanschaf, brandstof duur", portability: "Extreem draagbaar" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-16 md:pb-0">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-green-900 mb-6">Koken Zonder Stroom: De Beste en Veiligste Opties Vergeleken</h1>
          <p className="text-lg text-slate-600 mb-10">Je fornuis en magnetron werken niet. Hoe krijg je nu een warme maaltijd op tafel? Er zijn diverse uitstekende manieren om te koken zonder elektriciteit. Deze gids vergelijkt de meest populaire opties, zodat je de juiste keuze kunt maken voor jouw situatie en budget.</p>

          <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-800 mb-12">
            <h4 className="font-bold text-2xl">⚠️ VEILIGHEID EERST: Koolmonoxide Gevaar ⚠️</h4>
            <p className="mt-2">Koolmonoxide (CO) is een reukloos, onzichtbaar en dodelijk gas dat vrijkomt bij onvolledige verbranding. Gebruik apparaten die brandstof verbranden (gas, hout, houtskool, etc.) <strong>NOOIT</strong> in een afgesloten ruimte zoals een huis, garage of tent. Zorg altijd voor <strong>maximale ventilatie</strong>. Bij twijfel: gebruik het buiten.</p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Vergelijking van Kookmethodes</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Optie</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brandstof</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kookkracht</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Draagbaarheid</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {options.map((option) => (
                    <tr key={option.name}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{option.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{option.fuel}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{option.power}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{option.portability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-xs text-gray-500">
              <p><strong>Veiligheid:</strong> Alle genoemde opties dienen primair buiten of in een extreem goed geventileerde ruimte (bv. open schuur) gebruikt te worden. </p>
            </div>
          </section>

          <section>
             <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Onze Aanbeveling</h2>
             <div className="space-y-4 text-slate-600">
                 <p>Voor de meeste mensen is een simpel <strong>campinggasstel</strong> de beste allround keuze. Het is betaalbaar, makkelijk in gebruik, zeer effectief en de brandstof is overal verkrijgbaar.</p>
                 <p>Een <strong>rocket stove</strong> is een fantastische optie voor wie duurzaamheid en gratis brandstof belangrijk vindt, maar vereist meer oefening.</p>
                 <p>De <strong>barbecue</strong> is een goede back-up als je die al hebt, maar minder efficiënt voor het simpelweg koken van water.</p>
                 <p><strong>Esbit-branders</strong> zijn de ultieme ultralichte back-up voor in een vluchttas, maar niet geschikt voor het bereiden van complete maaltijden.</p>
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

export default KokenZonderStroomPage;