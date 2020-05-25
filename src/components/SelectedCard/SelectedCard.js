import React from 'react';

const SelectedCard = ({ selectedCard }) => {
    console.log(selectedCard);
    return (
        <div className="ui segment">
            <h3 className="ui header">{selectedCard.name}</h3>
            <img src={selectedCard.front_default} alt={selectedCard.name}/>
            <img src={selectedCard.back_default} alt={selectedCard.name}/>
            <img src={selectedCard.front_shiny} alt={selectedCard.name}/>
            <img src={selectedCard.back_shiny} alt={selectedCard.name}/>
        </div>
    )
}

export default SelectedCard;