import React from 'react';

import './SelectedCard.css';
import pikachuSad from '../images/pikachuSad.png';

const SelectedCard = ({ searched, weight, height, id }) => {
    if (searched === 'NOT_FOUND') {
        return (
            <div className="error-card">
                <h1 className="error-header">Pokémon Not Found</h1>
                <div className="image">
                    <img className="selected-image" src={pikachuSad} alt="Missing Pokemon" />
                </div>
                <h3 className="error-desc">Make sure you typed the Pokémon's name right!</h3>
            </div >
        )
    }

    let imagePath = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const formattedName = searched.split('-').join(' ');

    // Image path is null, replace of sad pikachu
    const missingImage = (e) => {
        e.target.src = pikachuSad;
    }

    return (
        <div className="selected-card">
            <h1 className="poke-name">You found {formattedName}!</h1>
            <div className="selected-card ui card">
                <div className="image">
                    <img className="selected-image" src={imagePath} alt={searched} onError={(e) => missingImage(e)} />
                </div>
            </div>
            <h2>Did you know?</h2>
            <h4>A <label className="poke-name">{formattedName}</label> can
                weigh {weight} pounds and can get {height} feet tall!
                </h4>
        </div >
    )
}

export default SelectedCard;