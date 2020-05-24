import React from 'react';

import Card from './Card';

const CardList = ( { results }) => {
    const renderedList = results.map(item => {
        return <Card key={item.name} data={item} /> 
    });

    return ( 
        <div>
            {renderedList}
        </div>
    )
}

export default CardList;