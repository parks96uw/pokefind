import React from 'react';

import './Card.css';
import pikachuSad from '../images/pikachuSad.png';

const Card = ({ data, id }) => {
    let imagePath = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const name = data.name.split('-').join(' ');

    // Image Path is null
    // Replaces with stock image of sad pikachu
    const missingImage = (e) => {
        e.target.src = pikachuSad;
    }

    return (
        <div className="poke-card ui card">
            <div className="poke-card-container image">
                <img className="poke-card-image" src={imagePath} alt={name} onError={(e) => missingImage(e)} />
            </div>
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