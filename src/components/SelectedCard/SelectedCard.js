import React from 'react';

import Card from '../Card/Card';
import './SelectedCard.css';

const SelectedCard = ({ selectedCard }) => {
    let imagePath = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selectedCard.id}.png`;
    console.log(selectedCard);
    return (
        <div className="selected-card">
            <div className={`${selectedCard.name}-info`}>
                <h1>{selectedCard.name.toUpperCase()}</h1>
                <h2>#{selectedCard.id}</h2>
                <img className="selected-image" src={imagePath} alt={selectedCard.name} />
            </div>
            <div className="body ui statistics">
                <div className="statistic">
                    <div className="value">{selectedCard.weight}</div>
                    <div className="label">WEIGHT</div>
                </div>
                <div className="statistic">
                    <div className="value">{selectedCard.height}</div>
                    <div className="label">HEIGHT</div>
                </div>
            </div>
            <div className="combat ui statistics">
                {selectedCard.stats.map(stat => {
                    const statName = stat.stat.name.split('-').join(' ').toUpperCase();
                    return (
                        <div key={stat.stat.name} className="statistic">
                            <div className="value">{stat.base_stat}</div>
                            <div className="label">{statName}</div>
                        </div>
                    )
                })}
            </div>
            {/* {selectedCard.types.length <= 1 && <div>{selectedCard.types.type}</div>}
            {selectedCard.types.length > 1 && <div>hehe</div>} */}
        </div>
    )
}

export default SelectedCard;