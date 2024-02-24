import React from 'react';
import {useState} from 'react';
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

const Card = ({ card }: CardProps) => {
  const [flip, setFlip] = useState(false);
  return (
    <div className={flip ? "card flip" : "card"}
    onClick={() => {
      setFlip(!flip);
    }}
    >
      <div className="card-inner">
        <div className="front">
          <h3>{card.title}</h3>
          <img className="card-img-top" src={card.image} />
        </div>
        <div className="back">
          <h3>{card.title}</h3>
          <p>Technology Used: {card.technology}</p>
          <p>Summary: {card.summary}</p>
          <p>
            GitHub link:{" "}
            <a href={card.gitHubLink} target="_blank">
              {card.gitHubTitle}
            </a>
          </p>
          <p>
            Web page link:{" "}
            <a href={card.webPageLink} target="_blank">
              {card.webPageTitle}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;