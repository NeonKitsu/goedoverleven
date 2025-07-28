import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'wouter';

const SkillCard: React.FC<{
  title: string;
  description: string;
  link: string;
  linkText: string;
  imageUrl: string;
}> = ({ title, description, link, linkText, imageUrl }) => {
  return (
    <Link to={link} className="block group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-green-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <span className="inline-block text-red-600 font-semibold group-hover:text-red-700 transition-colors">
          {linkText}
          <span aria-hidden="true"> »</span>
        </span>
      </div>
    </Link>
  );
};

const VaardighedenPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-16 md:pb-0">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-green-900 sm:text-5xl mb-4">Leer de Essentiële Vaardigheden voor Zelfredzaamheid</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Een noodpakket is je fundament, maar echte zekerheid komt voort uit kennis en vaardigheid. Dit zijn de competenties die je niet kunt verliezen en die in elke situatie het verschil maken. Ze zijn gewichtloos, onbetaalbaar en geven je het vertrouwen om elke uitdaging het hoofd te bieden.
            </p>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              Hieronder vind je onze diepgaande gidsen, opgedeeld in de meest cruciale kennisgebieden voor praktische zelfredzaamheid. Kies het onderwerp waar je vandaag mee wilt beginnen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <SkillCard
              title="Water Zuiveren en Opslaan"
              description="Water is de bron van leven en de meest kritieke voorraad. Leer hoe je water veilig kunt opslaan voor de lange termijn, hoe je elke waterbron drinkbaar maakt met simpele technieken, en hoe je een duurzame watervoorziening voor je gezin creëert."
              link="/vaardigheden/water"
              linkText="Leer Alles over Water"
              imageUrl="/images/water-zuivering.webp"
            />
            <SkillCard
              title="Voedselvoorziening en Koken Zonder Stroom"
              description="Een warme maaltijd is cruciaal voor energie en moraal. Leer hoe je een slimme, langdurige voedselvoorraad aanlegt, welke kookmethodes veilig en effectief zijn zonder elektriciteit, en hoe je voedzame maaltijden maakt met houdbare ingrediënten."
              link="/vaardigheden/voedsel"
              linkText="Ontdek Kooktechnieken"
              imageUrl="/images/voedsel-koken-zonder-gas-of-electra.webp"
            />
          </div>

          <div className="text-center text-gray-600 my-12">
            <p>Begin vandaag nog met het investeren in de meest waardevolle voorraad die er is: uw eigen kennis. Elke vaardigheid die u leert, is een extra laag zekerheid voor de toekomst.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VaardighedenPage;