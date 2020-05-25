import React from 'react';

import './SelectedCard.css';

const SelectedCard = ({ selectedCard }) => {
    const name = selectedCard.name.charAt(0).toUpperCase() + selectedCard.name.slice(1);
    return (
        <div className="ui segment">
            <h3 className="ui header">{name}</h3>
            <img className="selected-img" src={selectedCard.front_default} alt={selectedCard.name}/>
            <img className="selected-img" src={selectedCard.back_default} alt={selectedCard.name}/>
            <img className="selected-img" src={selectedCard.front_shiny} alt={selectedCard.name}/>
            <img className="selected-img" src={selectedCard.back_shiny} alt={selectedCard.name}/>
        </div>
    )
}

export default SelectedCard;