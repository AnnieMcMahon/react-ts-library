import React from 'react';

interface ButtonProps {
    label: string;
    color: string;
}
declare const Button: ({ label, color }: ButtonProps) => React.JSX.Element;

interface CardProps {
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

export { Button, Card };
