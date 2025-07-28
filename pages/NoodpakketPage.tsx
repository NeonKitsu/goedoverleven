
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'wouter';

const NoodpakketPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-16 md:pb-0">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-green-900 mb-6">Welkom bij de meest concrete en belangrijke stap in je voorbereiding.</h1>
            <p className="text-lg text-gray-700 mb-4">Het doel van deze gids is niet om je iets te verkopen, maar om je iets te leren: de kennis en het vertrouwen om zelf een effectief noodpakket samen te stellen.</p>
            <p className="text-lg text-gray-700 mb-4">Een kant-en-klaar pakket lijkt misschien makkelijk, maar echte voorbereiding begint met begrijpen waarom bepaalde items essentieel zijn. Door zelf je pakket te bouwen, neem je de volledige controle. Je stemt het perfect af op jouw gezin, je kent de inhoud door en door, en je transformeert een abstract gevoel van 'voorbereid zijn' in tastbare, persoonlijke zekerheid.</p>
            <p className="text-lg text-gray-700">Deze gids is je startpunt. We leiden je door de basisprincipes en geven je de tools om direct aan de slag te gaan.</p>
          </div>

          <section className="pt-12 mt-12 border-t">
              <h2 className="text-3xl font-bold text-green-900 mb-4 border-l-4 border-red-600 pl-4">Het 72-Uur Principe: De Gouden Standaard</h2>
              <p className="text-lg text-gray-700 mb-6">De kernfilosofie achter elk goed noodpakket is zelfredzaamheid voor minimaal 72 uur. Dit is de internationale standaard omdat het de geschatte tijd is die hulpdiensten nodig hebben om na een grootschalige crisis de hulpverlening te organiseren. In die eerste, meest kritieke dagen ben je op jezelf aangewezen. Dit pakket is jouw brug naar veiligheid.</p>
          </section>
          
          <section id="zelf-samenstellen" className="pt-12 mt-12 border-t">
              <h2 className="text-3xl font-bold text-green-900 mb-4 border-l-4 border-red-600 pl-4">De Checklist: De Fundamenten van Jouw Noodpakket</h2>
              <p className="text-lg text-gray-700 mb-6">Een goed pakket is opgebouwd uit verschillende categorieën die samen een compleet vangnet vormen. Hieronder vind je de essentiële bouwstenen. Gebruik onze interactieve tool om een gedetailleerde, persoonlijke lijst te maken die je kunt afvinken.</p>
              <ul className="list-none space-y-4 mb-8 pl-2 text-gray-800 text-lg">
                  <li>💧 <strong>Water & Voedsel:</strong> De absolute basis voor overleving. Denk aan water in flessen en lang houdbaar, energierijk voedsel.</li>
                  <li>💡 <strong>Licht & Communicatie:</strong> Een opwindradio en LED-zaklamp om verbonden en veilig te blijven in het donker.</li>
                  <li>🩹 <strong>EHBO & Hygiëne:</strong> Een uitgebreide EHBO-doos, persoonlijke medicijnen en desinfectiemiddelen om gezond te blijven.</li>
                  <li>📄 <strong>Documenten & Geld:</strong> Waterdichte kopieën van je belangrijkste papieren en een kleine hoeveelheid contant geld.</li>
                  <li>🔧 <strong>Gereedschap & Warmte:</strong> Een kwalitatief multitool, ducttape en wollen dekens voor onverwachte problemen en kou.</li>
                  <li>❤️ <strong>Persoonlijke Items:</strong> De unieke behoeften van jouw gezin: van babyvoeding en medicatie tot spullen voor huisdieren.</li>
              </ul>
              <div className="text-center my-8">
                  <Link to="/noodpakket/samenstellen-noodpakket" className="inline-block text-white bg-red-600 hover:bg-red-700 transition-transform transform hover:scale-105 text-xl md:text-2xl font-bold py-4 px-8 rounded-full shadow-lg">
                      Start de Gratis Interactieve Samensteller »
                  </Link>
                  <p className="mt-4 text-sm text-gray-500">Liever een offline versie voor Windows? <a href="#" className="underline hover:text-green-700">Steun ons en download de app voor €1.</a></p>
              </div>
          </section>

          <section className="pt-12 mt-12 border-t">
              <h2 className="text-3xl font-bold text-green-900 mb-4 border-l-4 border-red-600 pl-4">De Volgende Stap: Voorbereiden op Specifieke Scenario's</h2>
              <p className="text-lg text-gray-700 mb-8">Met je basispakket op orde, kun je je voorbereiding verfijnen. Elke crisis is anders. Onze gidsen helpen je om je pakket en plan aan te passen aan de meest realistische scenario's in Nederland.</p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <Link to="/noodpakket/voorbereiden-op-stroomuitval" className="block p-6 border rounded-lg hover:bg-green-50 hover:shadow-lg transition-all duration-300">
                      <h3 className="text-xl font-semibold mb-2 text-green-800">Voorbereiden op Stroomuitval</h3>
                      <p className="text-gray-600">Leer hoe je je huis warm, verlicht en comfortabel houdt als de stroom wegvalt.</p>
                  </Link>
                  <Link to="/noodpakket/overstromingen-noodpakket" className="block p-6 border rounded-lg hover:bg-green-50 hover:shadow-lg transition-all duration-300">
                      <h3 className="text-xl font-semibold mb-2 text-green-800">Voorbereiden op een Overstroming</h3>
                      <p className="text-gray-600">Ontdek de cruciale extra items en stappen die nodig zijn bij hoogwater.</p>
                  </Link>
                  <Link to="/noodpakket/vluchttas" className="block p-6 border rounded-lg hover:bg-green-50 hover:shadow-lg transition-all duration-300">
                      <h3 className="text-xl font-semibold mb-2 text-green-800">Je Vluchttas Samenstellen</h3>
                      <p className="text-gray-600">Wat neem je mee als je direct je huis moet verlaten? De kunst van het prioriteren.</p>
                  </Link>
                  <Link to="/noodpakket/auto-noodpakket" className="block p-6 border rounded-lg hover:bg-green-50 hover:shadow-lg transition-all duration-300">
                      <h3 className="text-xl font-semibold mb-2 text-green-800">De Noodkit voor in de Auto</h3>
                      <p className="text-gray-600">Wees voorbereid op pech onderweg met deze essentiële autokit.</p>
                  </Link>
              </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NoodpakketPage;