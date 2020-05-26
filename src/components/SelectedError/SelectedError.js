import React from 'react';

import './SelectedError.css';
import pikachuSad from '../images/pikachuSad.png';

const SelectedError = () => {
    return (
        <div className="error-card">
            <h1 className="error-header">Pokémon Not Found</h1>
            <div className="image">
                <img className="selected-image" src={pikachuSad} />
            </div>
            <h3 className="error-desc">Make sure you typed the Pokémon's name right!</h3>
        </div >
    )
}

export default SelectedError;