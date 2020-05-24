import React from 'react';

const SelectedCard = ({ selectedCard }) => {
    console.log(selectedCard.sprites);
    return (
        <div>
            {selectedCard.name}
        </div>
    )
}

export default SelectedCard;