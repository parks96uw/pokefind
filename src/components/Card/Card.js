import React from 'react';

import './Card.css';
import pikachuSad from '../images/pikachuSad.png';

const Card = ({ data, id }) => {
    // console.log(data.name);
    // TODO: FIX THIS
    let imagePath = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    // TODO: Fix image path for later gen pokemons -- id is wonky for newer gen pokemons
    if (id >= 10091) {
        imagePath = pikachuSad;
    }

    // TODO: Find a better place to add this
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