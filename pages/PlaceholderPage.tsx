import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-16 md:pb-0">
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-green-900">{title}</h1>
            <p className="mt-4 text-lg text-gray-600">
                Welkom op de pagina voor {title.toLowerCase()}.
            </p>
            <p className="mt-2 text-gray-500">
                De inhoud voor deze sectie is momenteel in ontwikkeling. Kom snel terug voor uitgebreide gidsen en artikelen!
            </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlaceholderPage;