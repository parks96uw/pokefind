import React from 'react';

import './SelectedCard.css';

import Card from '../Card/Card';


const SelectedCard = ({ selectedCard }) => {
    // TODO: Fix this
    return (
        // <div className="selected-card ui segment">
        <div className="selected-card">
            <Card data={selectedCard} id={selectedCard.id} />
        </div>
    )
}

export default SelectedCard;