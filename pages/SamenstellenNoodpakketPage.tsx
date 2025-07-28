
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// TypeScript declaration for jspdf from window object
declare global {
  interface Window {
    jspdf: any;
  }
}

const survivalKitItems = [
    // Categorie: Water & Voedsel
    { category: "Water & Voedsel", name: "Water in flessen", emoji: "💧", baseQuantity: 3, unit: "liter", scalesWithAdults: true, scalesWithChildren: true, per: "p.p. per dag" },
    { category: "Water & Voedsel", name: "Houdbaar eten (blik, pasta, rijst, etc.)", emoji: "🥫", baseQuantity: 1, unit: "voorraad", scalesWithAdults: true, scalesWithChildren: true, per: "p.p. (voor 3 dagen)" },
    { category: "Water & Voedsel", name: "Handmatige blikopener", emoji: "🔧", baseQuantity: 1, unit: "st.", scalesWithAdults: false, scalesWithChildren: false },
    // Categorie: Communicatie & Informatie
    { category: "Informatie & Communicatie", name: "Opwindbare radio / radio op batterijen", emoji: "📻", baseQuantity: 1, unit: "st.", scalesWithAdults: false, scalesWithChildren: false },
    { category: "Informatie & Communicatie", name: "Powerbank (volledig opgeladen)", emoji: "🔋", baseQuantity: 1, unit: "st.", scalesWithAdults: true, scalesWithChildren: false, per: "p. volwassene" },
    { category: "Informatie & Communicatie", name: "Lijst met belangrijke telefoonnummers", emoji: "📞", baseQuantity: 1, unit: "st.", scalesWithAdults: false, scalesWithChildren: false },
    // Categorie: Verlichting & Warmte
    { category: "Verlichting & Warmte", name: "Zaklamp (LED) met extra batterijen", emoji: "💡", baseQuantity: 1, unit: "st.", scalesWithAdults: false, scalesWithChildren: false },
    { category: "Verlichting & Warmte", name: "Kaarsen en lucifers (waterdicht)", emoji: "🕯️", baseQuantity: 1, unit: "set", scalesWithAdults: false, scalesWithChildren: false },
    { category: "Verlichting & Warmte", name: "Dekens of slaapzakken", emoji: "🛌", baseQuantity: 1, unit: "st.", scalesWithAdults: true, scalesWithChildren: true, per: "p.p." },
    // Categorie: Gezondheid & Hygiëne
    { category: "Gezondheid & Hygiëne", name: "EHBO-doos", emoji: "🩹", baseQuantity: 1, unit: "st.", scalesWithAdults: false, scalesWithChildren: false },
    { category: "Gezondheid & Hygiëne", name: "Persoonlijke medicijnen (min. 7 dagen)", emoji: "💊", baseQuantity: 1, unit: "voorraad", scalesWithAdults: true, scalesWithChildren: true, per: "p.p. die het gebruikt" },
    { category: "Gezondheid & Hygiëne", name: "Desinfecterende handgel", emoji: "🧴", baseQuantity: 1, unit: "fles", scalesWithAdults: false, scalesWithChildren: false },
    { category: "Gezondheid & Hygiëne", name: "Toilettas (zeep, tandenborstel, etc.)", emoji: "🦷", baseQuantity: 1, unit: "st.", scalesWithAdults: true, scalesWithChildren: true, per: "p.p." },
    { category: "Gezondheid & Hygiëne", name: "WC-papier en/of natte doekjes", emoji: "🧻", baseQuantity: 1, unit: "voorraad", scalesWithAdults: false, scalesWithChildren: false },
    // Categorie: Veiligheid & Documenten
    { category: "Veiligheid & Documenten", name: "Kopieën van identiteitsbewijzen (waterdicht)", emoji: "📄", baseQuantity: 1, unit: "set", scalesWithAdults: false, scalesWithChildren: false },
    { category: "Veiligheid & Documenten", name: "Reservesleutels van huis en auto", emoji: "🔑", baseQuantity: 1, unit: "set", scalesWithAdults: false, scalesWithChildren: false },
    { category: "Veiligheid & Documenten", name: "Contant geld (kleine coupures)", emoji: "💰", baseQuantity: 50, unit: "€ (richtlijn)", scalesWithAdults: true, scalesWithChildren: false, per: "p. volwassene" },
    { category: "Veiligheid & Documenten", name: "Fluitje", emoji: " 📣", baseQuantity: 1, unit: "st.", scalesWithAdults: true, scalesWithChildren: true, per: "p.p." },
    { category: "Veiligheid & Documenten", name: "Multitool of Zwitsers zakmes", emoji: "🛠️", baseQuantity: 1, unit: "st.", scalesWithAdults: false, scalesWithChildren: false },
    { category: "Veiligheid & Documenten", name: "Ducttape", emoji: " 📦", baseQuantity: 1, unit: "rol", scalesWithAdults: false, scalesWithChildren: false },
    // Categorie: Specifieke Behoeften
    { category: "Specifieke Behoeften", name: "Babyvoeding & luiers (indien van toepassing)", emoji: "🍼", baseQuantity: 1, unit: "voorraad", scalesWithAdults: false, scalesWithChildren: false },
    { category: "Specifieke Behoeften", name: "Voer & water voor huisdieren (indien van toepassing)", emoji: "🐾", baseQuantity: 1, unit: "voorraad", scalesWithAdults: false, scalesWithChildren: false },
    { category: "Specifieke Behoeften", name: "Spelletje, boek of knuffel (voor kinderen)", emoji: "🧸", baseQuantity: 1, unit: "st.", scalesWithAdults: false, scalesWithChildren: false },
];

const SamenstellenNoodpakketPage: React.FC = () => {
    const [numAdults, setNumAdults] = useState(1);
    const [numChildren, setNumChildren] = useState(0);
    const [collectedItems, setCollectedItems] = useState<Set<number>>(new Set());
    const [activeTab, setActiveTab] = useState(survivalKitItems[0].category);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        try {
            const savedAdults = localStorage.getItem('numAdults');
            const savedChildren = localStorage.getItem('numChildren');
            const savedItems = localStorage.getItem('noodpakketItems');
            const savedTab = localStorage.getItem('activeTabCategory');

            if (savedAdults) setNumAdults(parseInt(savedAdults, 10));
            if (savedChildren) setNumChildren(parseInt(savedChildren, 10));
            if (savedItems) setCollectedItems(new Set(JSON.parse(savedItems)));
            if (savedTab && survivalKitItems.some(item => item.category === savedTab)) {
                setActiveTab(savedTab);
            }
        } catch (error) {
            console.error("Failed to load state from localStorage", error);
            // Fallback to default state
            setNumAdults(1);
            setNumChildren(0);
            setCollectedItems(new Set());
        }
    }, []);

    useEffect(() => {
        if (!isClient) return;
        try {
            localStorage.setItem('numAdults', String(numAdults));
            localStorage.setItem('numChildren', String(numChildren));
            localStorage.setItem('noodpakketItems', JSON.stringify(Array.from(collectedItems)));
            localStorage.setItem('activeTabCategory', activeTab);
        } catch (error) {
            console.error("Failed to save state to localStorage", error);
        }
    }, [numAdults, numChildren, collectedItems, activeTab, isClient]);

    const categories = useMemo(() => [...new Set(survivalKitItems.map(item => item.category))], []);
    
    const calculateQuantity = useCallback((item: typeof survivalKitItems[0]) => {
        let quantity = 0;
        let peopleCount = 0;
        if (item.scalesWithAdults) peopleCount += numAdults;
        if (item.scalesWithChildren) peopleCount += numChildren;

        if (peopleCount > 0) {
            quantity = item.name === "Contant geld (kleine coupures)" ? item.baseQuantity * numAdults : item.baseQuantity * peopleCount;
        } else if (!item.scalesWithAdults && !item.scalesWithChildren) {
            quantity = item.baseQuantity;
        }
        
        if (item.per === "p. volwassene") quantity = item.baseQuantity * numAdults;
        else if (item.per === "p.p. die het gebruikt") quantity = item.baseQuantity;

        return quantity;
    }, [numAdults, numChildren]);
    
    const totalItems = survivalKitItems.length;
    const collectedCount = collectedItems.size;
    const progressPercentage = totalItems > 0 ? (collectedCount / totalItems) * 100 : 0;
    
    const missingItems = useMemo(() => survivalKitItems.filter((_, index) => !collectedItems.has(index)), [collectedItems]);
    
    const handleCheckboxChange = (itemIndex: number, isChecked: boolean) => {
        setCollectedItems(prev => {
            const newSet = new Set(prev);
            if (isChecked) newSet.add(itemIndex);
            else newSet.delete(itemIndex);
            return newSet;
        });
    };
    
    const handleReset = () => {
        if (window.confirm("Weet je zeker dat je je checklist wilt resetten? Alle voortgang gaat verloren.")) {
            setCollectedItems(new Set());
            localStorage.removeItem('noodpakketItems');
        }
    };
    
    const handleDownloadPdf = () => {
        if (!window.jspdf) {
            alert("PDF-generator kon niet worden geladen. Probeer de pagina te vernieuwen.");
            return;
        }
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        let yPos = 20;
        const margin = 20;
        const lineHeight = 10;
        const maxWidth = doc.internal.pageSize.getWidth() - 2 * margin;

        doc.setFontSize(22);
        doc.text("Jouw Persoonlijke Noodpakket Checklist", margin, yPos);
        yPos += lineHeight;
        doc.setFontSize(12);
        doc.text(`Voor ${numAdults} volwassene(n) en ${numChildren} kind(eren)`, margin, yPos);
        yPos += lineHeight * 2;
        doc.setFontSize(10);
        doc.text("Gegenereerd op GoedOverleven.nl", margin, yPos);
        yPos += lineHeight * 2;
        
        let currentCategory = '';
        survivalKitItems.forEach((item, index) => {
            if (item.category !== currentCategory) {
                currentCategory = item.category;
                yPos += lineHeight;
                doc.setFontSize(14);
                doc.setTextColor(34, 197, 94); // green-500
                doc.text(item.category, margin, yPos);
                yPos += lineHeight;
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(12);
            }

            const requiredQuantity = calculateQuantity(item);
            let quantityText = "";
            if (!item.name.includes("(indien van toepassing)")) {
               quantityText = `(${requiredQuantity > 0 ? requiredQuantity : item.baseQuantity} ${item.unit}${item.per ? ' ' + item.per : ''})`;
           }
           const status = collectedItems.has(index) ? "[X]" : "[ ]";
           const itemLine = `${status} ${item.emoji} ${item.name} ${quantityText}`;
           const splitText = doc.splitTextToSize(itemLine, maxWidth - 5); // -5 for checkbox
           if (yPos + (lineHeight * splitText.length) > doc.internal.pageSize.getHeight() - margin) {
               doc.addPage();
               yPos = margin;
           }
           doc.text(splitText, margin + 5, yPos);
           yPos += lineHeight * splitText.length;
        });
        doc.save('goedoverleven_noodpakket_checklist.pdf');
    };

    if (!isClient) {
        return <div className="min-h-screen bg-gray-50" />; // Render nothing or a loader on server
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-16 md:pb-0">
                <div className="max-w-4xl mx-auto">
                    <section className="my-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4">Stel Jouw Noodpakket Samen</h1>
                        <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-4">
                            Gebruik deze interactieve checklist om een noodpakket samen te stellen dat perfect is afgestemd op jouw situatie.
                        </p>
                    </section>
                    
                    <section className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8 text-center">
                        <h2 className="text-2xl font-bold text-green-900 mb-4">Stap 1: Stel je Huishouden Samen</h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6">
                            <div className="flex items-center gap-2">
                                <label htmlFor="num-adults" className="text-lg text-gray-700">Volwassenen:</label>
                                <input type="number" id="num-adults" value={numAdults} onChange={(e) => setNumAdults(Math.max(1, parseInt(e.target.value) || 1))} min="1" className="w-20 p-2 border border-gray-300 rounded-md text-center focus:ring-green-500 focus:border-green-500"/>
                            </div>
                            <div className="flex items-center gap-2">
                                <label htmlFor="num-children" className="text-lg text-gray-700">Kinderen:</label>
                                <input type="number" id="num-children" value={numChildren} onChange={(e) => setNumChildren(Math.max(0, parseInt(e.target.value) || 0))} min="0" className="w-20 p-2 border border-gray-300 rounded-md text-center focus:ring-green-500 focus:border-green-500"/>
                            </div>
                        </div>
                        <button onClick={handleDownloadPdf} className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 transition-transform transform hover:scale-105">
                            Download Je Persoonlijke Lijst als PDF »
                        </button>
                    </section>
                    
                    <section className="bg-green-50 rounded-lg shadow-md p-4 mb-8 text-center">
                        <h2 className="text-xl font-bold text-green-900 mb-2">Jouw Voortgang</h2>
                        <p className="text-lg text-gray-700 mb-2">
                            Items verzameld: <span className="font-bold text-green-700">{collectedCount}</span> van <span className="font-bold">{totalItems}</span>
                        </p>
                        <div className="w-full bg-gray-200 rounded-full h-4">
                            <div className="bg-green-500 h-4 rounded-full transition-all duration-500 ease-out" style={{ width: `${progressPercentage}%` }}></div>
                        </div>
                    </section>
                    
                    <section className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
                        <h2 className="text-2xl font-bold text-green-900 mb-6">Stap 2: Vink Af Wat Je Al Hebt</h2>
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                            {categories.map(category => (
                                <button key={category} onClick={() => setActiveTab(category)} className={`tab-button ${activeTab === category ? 'active' : ''}`}>
                                    {category}
                                </button>
                            ))}
                        </div>
                        <div>
                            {categories.map(category => (
                                <div key={category} className={`tab-content ${activeTab === category ? 'active' : ''}`}>
                                    {survivalKitItems.filter(item => item.category === category).map((item, index) => {
                                        const originalIndex = survivalKitItems.indexOf(item);
                                        const requiredQuantity = calculateQuantity(item);
                                        const quantityText = !item.name.includes("(indien van toepassing)")
                                            ? `(${(requiredQuantity > 0 ? requiredQuantity : item.baseQuantity)} ${item.unit}${item.per ? ' ' + item.per : ''})`
                                            : '';
                                        return (
                                            <label key={originalIndex} className="checkbox-container">
                                                <input type="checkbox" checked={collectedItems.has(originalIndex)} onChange={(e) => handleCheckboxChange(originalIndex, e.target.checked)} />
                                                <span className="checkmark"></span>
                                                <span className={`ml-2 ${collectedItems.has(originalIndex) ? 'item-checked' : ''}`}>{item.emoji} {item.name} <span className="text-gray-500 text-sm">{quantityText}</span></span>
                                            </label>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </section>
                    
                    <section className="bg-green-50 rounded-lg shadow-lg p-6 md:p-8">
                        <h3 className="text-xl font-bold text-green-900 mb-4">Jouw Persoonlijke Boodschappenlijst:</h3>
                        {missingItems.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {missingItems.map(item => {
                                    const requiredQuantity = calculateQuantity(item);
                                    const quantityText = !item.name.includes("(indien van toepassing)")
                                        ? `(${(requiredQuantity > 0 ? requiredQuantity : item.baseQuantity)} ${item.unit}${item.per ? ' ' + item.per : ''})`
                                        : '';
                                    return (
                                        <div key={item.name} className="missing-item-card">
                                            <span className="text-2xl">{item.emoji}</span>
                                            <span className="text-gray-800">{item.name} <span className="text-gray-500 text-sm">{quantityText}</span></span>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <p className="text-gray-600 text-center py-4">Alle essentiële items zijn verzameld! Goed gedaan!</p>
                        )}
                        <div className="text-center mt-6">
                            <button onClick={handleReset} className="px-4 py-2 rounded-full text-sm font-medium text-red-700 bg-red-100 hover:bg-red-200 transition-colors">
                                Reset Checklist
                            </button>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SamenstellenNoodpakketPage;
