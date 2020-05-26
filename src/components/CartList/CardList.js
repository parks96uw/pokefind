import React from 'react';

import Card from '../Card/Card';
import './CardList.css';

const CardList = ( { results }) => {
    const renderedList = results.map(item => {
        const id = item.url.match(/(?:\/)([0-9]+)/).toString().split(',')[1];
        return (
            <div className="column" key={item.name}>
                <Card data={item} id={id} /> 
            </div>
        )
    });

    return ( 
        <div className="cardlist-segment ui segment">
            <div className="ui four column grid">{renderedList}</div>
        </div>
    ) 
}

export default CardList;