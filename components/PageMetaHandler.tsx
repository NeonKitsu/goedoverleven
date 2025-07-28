
import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';

const defaultMeta = {
  title: 'GoedOverleven.nl - Klaar voor elke crisis',
  description: 'Een interactieve en informatieve webapplicatie gericht op crisisvoorbereiding en zelfredzaamheid, gebouwd met React en Tailwind CSS.'
};

const PageMetaHandler: React.FC = () => {
  const [location] = useLocation();
  const [metaData, setMetaData] = useState<Record<string, { title: string; description: string }> | null>(null);

  useEffect(() => {
    // Laad de metagegevens asynchroon uit het JSON-bestand
    fetch('/meta.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setMetaData(data);
      })
      .catch(error => {
        console.error('Kon meta.json niet laden, standaardwaarden worden gebruikt:', error);
      });
  }, []); // Lege dependency array zorgt ervoor dat dit één keer wordt uitgevoerd bij het mounten

  useEffect(() => {
    let currentPath = location || '/';

    // Normaliseer het pad om een eventuele afsluitende slash te verwijderen voor consistentie.
    if (currentPath.length > 1 && currentPath.endsWith('/')) {
        currentPath = currentPath.slice(0, -1);
    }

    // Gebruik de geladen data indien beschikbaar, anders de standaardwaarden.
    const meta = (metaData && metaData[currentPath]) || defaultMeta;

    document.title = meta.title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', meta.description);
    
  }, [location, metaData]); // Draai opnieuw als de locatie of de metagegevens veranderen

  return null; // Deze component rendert geen DOM-elementen
};

export default PageMetaHandler;