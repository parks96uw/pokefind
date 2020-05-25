import React from 'react';

import './Card.css';

const Card = ({ data, id }) => {
    const imagePath = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
        <div class="ui card">
            <div class="image"><img src={imagePath} /></div>
            <div class="content">
                <div class="header">{data.name}</div>
            </div>
        </div>
    )
}

export default Card;