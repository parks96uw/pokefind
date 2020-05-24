import React from 'react';

const Card = ({data}) => {
    // const sprite_path = data.sprites.front_shiny;
    // console.log(sprite_path);
    return (
        <div>
            <p>{data.name}</p>
            {/* <img src={data.sprites.front_shiny} /> */}
        </div>
    )
}

export default Card;