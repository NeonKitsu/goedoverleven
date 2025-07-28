
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'wouter';

const VluchttasPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-16 md:pb-0">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-green-900 mb-6">Je Vluchttas: Wat is Absoluut Onmisbaar?</h1>
          
          <div className="mb-12">
            <div className="space-y-4 text-slate-600 text-lg">
                <p>Er is een cruciaal verschil tussen uw noodpakket voor thuis en een vluchttas. Het thuispakket is uw fort, ontworpen om een crisis uit te zitten. De vluchttas, ook wel 'grab-and-go bag' of 'bug-out bag' genoemd, is uw reddingsboot. Het is een lichte, direct grijpklare rugzak die is ontworpen voor één doel: u en uw gezin de eerste 72 uur doorhelpen wanneer thuisblijven geen optie is.</p>
                <p>De mindset voor het samenstellen van een vluchttas is radicaal anders. Het is de kunst van het strategisch weglaten. De vraag is niet 'wat is handig?', maar 'wat is absoluut onmisbaar?'. Elke gram telt. Deze gids geeft u een geprioriteerde checklist om de perfecte, lichtgewicht vluchttas samen te stellen.</p>
            </div>
          </div>

          <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">De Anatomie van een Perfecte Vluchttas: Een Gelaagde Checklist</h2>
              <div className="space-y-4 text-slate-600">
                  <p>Een effectieve vluchttas is niet zomaar een verzameling spullen; het is een gelaagd systeem. We bouwen het op van binnen naar buiten: van de onmisbare kern tot de functionele extra's.</p>
              </div>
          </section>

          <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Laag 1: De Niet-Onderhandelbare Kern (De "5 Vingers van Overleving")</h2>
              <div className="space-y-4 text-slate-600">
                  <p>Dit zijn de vijf items die uw identiteit, gezondheid en basisveiligheid waarborgen. Als u maar vijf dingen kon meenemen, dan waren het deze.</p>
                  <ul className="list-disc list-inside space-y-3 mt-4">
                      <li><strong>Identiteit & Geld:</strong> Een waterdicht mapje met kopieën van uw paspoorten, ID's, verzekeringspolissen en geboorteaktes. Voeg een kleine hoeveelheid contant geld toe in kleine coupures.</li>
                      <li><strong>Medicatie:</strong> Een voorraad voor minimaal 7 dagen van alle persoonlijk voorgeschreven, levensnoodzakelijke medicatie. Voeg een medicijnenpaspoort of een lijst met doseringen toe.</li>
                      <li><strong>Water & Filter:</strong> Een stevige, gevulde waterfles (minimaal 1 liter) en een compact, betrouwbaar waterfilter. Dit geeft u de mogelijkheid om van elke waterbron te drinken.</li>
                      <li><strong>Communicatie & Licht:</strong> Een volledig opgeladen, krachtige powerbank (min. 10.000 mAh) met oplaadkabel, en een compacte hoofdlamp om uw handen vrij te houden.</li>
                      <li><strong>Sleutels:</strong> Een reserveset van uw huis- en autosleutels.</li>
                  </ul>
              </div>
          </section>

          <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Laag 2: De Functionele Schil (Essentiële Hulpmiddelen)</h2>
              <div className="space-y-4 text-slate-600">
                  <p>Zodra de kern veilig is, voegt u deze items toe die een enorm verschil maken in functionaliteit en comfort.</p>
                  <ul className="list-disc list-inside space-y-3 mt-4">
                      <li><strong>Voedsel (Energie):</strong> 3 tot 5 calorierijke, compacte energierepen of maaltijdrepen. Ze vereisen geen bereiding en geven directe energie.</li>
                      <li><strong>EHBO:</strong> Een zeer compacte, op trauma gerichte set. De focus ligt op het stoppen van bloedingen (drukverband), blarenverzorging, pijnstilling en desinfectie.</li>
                      <li><strong>Gereedschap:</strong> Een kwalitatief goed multitool (zoals een Leatherman of Victorinox). Dit is uw gereedschapskist, blikopener en mes in één.</li>
                      <li><strong>Navigatie:</strong> Een gedetailleerde kaart van de omgeving en een kompas. Ga er niet vanuit dat de GPS op uw telefoon werkt.</li>
                      <li><strong>Warmte & Beschutting:</strong> Een nooddeken van folie (zeer licht en compact) en een stevige poncho. Deze beschermen u tegen onderkoeling en regen.</li>
                  </ul>
              </div>
          </section>

          <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">De Buitenkant: De Tas en de Kleding die u Draagt</h2>
              <div className="space-y-4 text-slate-600">
                  <ul className="list-disc list-inside space-y-3">
                      <li><strong>De Tas:</strong> Kies een onopvallende, stevige rugzak (ca. 30-40 liter) zonder een al te militair uiterlijk. Zorg dat de schouderbanden comfortabel zijn.</li>
                      <li><strong>De Kleding aan uw Lijf:</strong> Dit is uw eerste beschermingslaag. Draag stevige, ingelopen (waterdichte) wandelschoenen. Kleed u in lagen die u kunt aanpassen aan de temperatuur. Een jas met meerdere zakken is ideaal voor items die u direct bij de hand wilt hebben.</li>
                      <li><strong>De Test:</strong> De belangrijkste stap. Pak de tas volledig in en ga er een uur mee wandelen. Is hij te zwaar? Voelt hij oncomfortabel? Wees meedogenloos en verwijder de items die niet absoluut noodzakelijk zijn.</li>
                  </ul>
              </div>
          </section>
          
          <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4 border-l-4 border-red-600 pl-4">Een Levend Systeem</h2>
              <div className="space-y-4 text-slate-600">
                  <p>Uw vluchttas moet op een vaste, grijpklare plek staan waar elk gezinslid hem kan vinden. Controleer de inhoud twee keer per jaar: vervang de batterijen, rouleer de energierepen en update de medicijnen. Door uw vluchttas te zien als een actief onderdeel van uw plan, verandert u een statische tas in een dynamische reddingslijn.</p>
              </div>
          </section>

          <div className="relative z-10 container mx-auto flex flex-col items-center justify-center my-12 text-center">
            <Link to="/noodpakket/samenstellen-noodpakket" className="inline-block text-white bg-red-600 hover:bg-red-700 transition-transform transform hover:scale-105 text-xl md:text-2xl font-bold py-4 px-8 rounded-full shadow-lg">
                Gebruik onze tool voor je basislijst »
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VluchttasPage;