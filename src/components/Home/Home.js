import React from 'react';

import home from '../images/welcome.png';
import './Home.css';

const Home = () => {
    return (
        <div className="home ui container">
            <div className="home-image-container">
                <img className="home-image" src={home} alt={"pokemon-search"}/>
            </div>
            <label className="home-intro">Explore and look up your favorite Pokémon!</label>
        </div>
    )
}

export default Home;