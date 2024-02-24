import React from 'react';
import './Card.css';
export interface CardProps {
    card: {
        id: number;
        title: string;
        image: string;
        technology: string;
        summary: string;
        gitHubLink: string;
        gitHubTitle: string;
        webPageLink: string;
        webPageTitle: string;
    };
}
declare const Card: ({ card }: CardProps) => React.JSX.Element;
export default Card;
