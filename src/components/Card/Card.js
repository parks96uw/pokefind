import React from 'react';

import './Card.css';

const Card = ({ data, id }) => {
    const imagePath = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    const name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    return (
        <div className="poke-card ui card">
            <div className="poke-card image"><img src={imagePath} alt={name} /></div>
            <div className="content">
                <div className="header">
                    <div className="meta">#{id}</div>
                    {name}
                </div>
            </div>
        </div>
    )
}

export default Card;