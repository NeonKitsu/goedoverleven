
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'wouter';

const RecipeCard: React.FC<{ title: string; ingredients: string[]; instructions: string; }> = ({ title, ingredients, instructions }) => (
  <div className="bg-green-50 p-6 rounded-lg mb-8">
    <h3 className="text-2xl font-bold text-green-900 mb-3">{title}</h3>
    <div className="md:flex md:gap-8">
      <div className="md:w-1/3 mb-4 md:mb-0">
        <h4 className="font-bold text-slate-700 mb-2">Ingrediënten:</h4>
        <ul className="list-disc list-inside text-slate-600">
          {ingredients.map(ing => <li key={ing}>{ing}</li>)}
        </ul>
      </div>
      <div className="md:w-2/3">
        <h4 className="font-bold text-slate-700 mb-2">Bereiding:</h4>
        <p className="text-slate-600">{instructions}</p>
      </div>
    </div>
  </div>
);

const NoodvoorraadReceptenPage: React.FC = () => {
  const recipes = [
    { title: "Robuuste Bonen-Chili met Rijst", ingredients: ["Blik kidneybonen", "Blik tomatenblokjes", "Rijst", "Ui- en knoflookpoeder", "Chilipoeder", "Zout en peper", "Olie"], instructions: "Kook de rijst. Bak ondertussen de specerijen in een beetje olie. Voeg de bonen en tomatenblokjes toe. Laat 10 minuten sudderen. Serveer over de rijst." },
    { title: "Snelle Tonijn Pasta", ingredients: ["Pasta", "Blikje tonijn op olie", "Blik tomatenblokjes", "Gedroogde Italiaanse kruiden", "Zout en peper"], instructions: "Kook de pasta. Giet de olie van de tonijn in een pan en voeg de kruiden toe. Voeg de tomatenblokjes toe en laat opwarmen. Roer de tonijn erdoor. Meng met de gekookte pasta." },
    { title: "Verwarmende Linzensoep", ingredients: ["Gedroogde rode linzen", "Bouillonblokje", "Wortel in blik", "Ui- en knoflookpoeder", "Water"], instructions: "Spoel de linzen. Breng water met het bouillonblokje aan de kook. Voeg linzen, specerijen en de uitgelekte worteltjes toe. Kook 20-25 minuten tot de linzen zacht zijn." },
    { title: "Prepper's Pannenkoeken", ingredients: ["Bloem", "Water", "Snufje zout", "Snufje suiker", "Olie om in te bakken"], instructions: "Meng bloem, zout en suiker. Voeg langzaam water toe terwijl je klopt tot je een glad, niet te dik beslag hebt. Bak in een hete pan met olie aan beide kanten goudbruin." },
    { title: "Energie-Havermoutpap", ingredients: ["Havermout", "Water", "Gedroogd fruit (rozijnen)", "Noten of zaden", "Snufje zout", "Honing of suiker"], instructions: "Breng water met een snufje zout aan de kook. Voeg de havermout toe en kook volgens de aanwijzingen. Roer op het laatst het gedroogde fruit en de noten erdoor. Voeg honing of suiker naar smaak toe." },
    { title: "Sardientjes op Crackers 2.0", ingredients: ["Blikje sardientjes", "Crackers of beschuit", "Mosterd (lang houdbaar)", "Peper"], instructions: "Laat de sardientjes uitlekken. Prak ze fijn met een vork. Meng met een beetje mosterd en peper. Smeer op crackers. Simpel, snel en vol eiwitten en omega-3." },
    { title: "Maïs- en Bonensalade", ingredients: ["Blik maïs", "Blik zwarte bonen", "Azijn", "Olie", "Zout, peper, suiker"], instructions: "Spoel de maïs en bonen goed af. Meng azijn, olie en kruiden tot een dressing. Giet de dressing over de maïs en bonen. Laat even intrekken. Een verfrissend bijgerecht dat geen koken vereist." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-16 md:pb-0">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-green-900 mb-6">7 Verrassend Lekkere Noodvoorraad Recepten</h1>
          <p className="text-lg text-slate-600 mb-10">Eten uit blik en gedroogde producten saai? Absoluut niet! Met een beetje creativiteit en de juiste smaakmakers tover je de meest basale ingrediënten om in een voedzame, smaakvolle en moraal-verhogende maaltijd. Hier zijn 7 simpele recepten om je op weg te helpen.</p>
          
          {recipes.map(rec => <RecipeCard key={rec.title} {...rec} />)}

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

export default NoodvoorraadReceptenPage;