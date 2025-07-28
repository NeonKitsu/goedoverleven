

import React from 'react';
import type { NavLink, Feature } from './types';

// Hero Icon for Feature Cards
const ShieldIcon: React.FC<{className?: string}> = ({ className = "w-12 h-12" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
    </svg>
);

const ChecklistIcon: React.FC<{className?: string}> = ({ className = "w-12 h-12" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const HeartIcon: React.FC<{className?: string}> = ({ className = "w-12 h-12" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
);

// For top Navbar
export const navLinks: NavLink[] = [
    { href: "noodpakket", label: "Noodpakket", emoji: "" },
    { href: "noodpakket/samenstellen-noodpakket", label: "Checklist", emoji: "" },
    { href: "vaardigheden", label: "Vaardigheden", emoji: "" },
];

// For bottom Navbar
export const bottomNavLinks: NavLink[] = [
    { href: "", label: "Home", emoji: "🏠" },
    { href: "noodpakket", label: "Noodpakket", emoji: "🎒" },
    { href: "noodpakket/samenstellen-noodpakket", label: "Checklist", emoji: "✅" },
    { href: "vaardigheden", label: "Vaardigheden", emoji: "📚" },
];

export const features: Feature[] = [
    {
        icon: <ShieldIcon />,
        title: "Zorg voor je Dierbaren",
        description: "Wat er ook gebeurt, jij hebt de basis op orde om je gezin door de eerste onzekere dagen te helpen."
    },
    {
        icon: <ChecklistIcon />,
        title: "Neem de Controle",
        description: "Overbrug de eerste 72 uur zonder afhankelijk te zijn van hulpdiensten. Creëer rust en overzicht in een chaotische situatie."
    },
    {
        icon: <HeartIcon />,
        title: "Vind Gemoedsrust",
        description: "Het geruststellende gevoel dat je hebt nagedacht over 'wat als'. Dat is de ware winst van een goede voorbereiding."
    }
];