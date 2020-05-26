import React from 'react';

import SelectedError from '../SelectedError/SelectedError';
import './SelectedCard.css';
import pikachuSad from '../images/pikachuSad.png';

const SelectedCard = ({ selectedCard }) => {

    // Pokemon not found -- render error
    if (selectedCard.error == 'POKEMON_NOT_FOUND') {
        return <SelectedError />
    }

    let imagePath = `https://pokeres.bastionbot.org/images/pokemon/${selectedCard.id}.png`;
    const name = selectedCard.name.split('-').join(' ');

    // Image path is null, replace of sad pikachu
    const missingImage = (e) => {
        e.target.src = pikachuSad;
    }

    return (
        <div className="selected-card">
            <h1 className="poke-name">You found {name}!</h1>
            <div className="selected-card ui card">
                <div className="image">
                    <img className="selected-image"
                        src={imagePath}
                        alt={selectedCard.name}
                        onError={(e) => missingImage(e)}
                    />
                </div>
            </div>
            <h2>Did you know?</h2>
            <h4>A <label className="poke-name">{selectedCard.name}</label> can
                weigh {selectedCard.weight} pounds and can get {selectedCard.height} feet tall!
                </h4>
        </div >
    )
}

export default SelectedCard;