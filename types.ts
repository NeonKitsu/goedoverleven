import type { ReactNode } from 'react';

export interface NavLink {
    href: string;
    label: string;
    emoji: string;
}

export interface Feature {
    icon: ReactNode;
    title:string;
    description: string;
}