import React, { useState } from 'react';

import SelectedCard from '../SelectedCard/SelectedCard';
import search from '../images/searchDex.png';
import './Search.css';

const Search = (props) => {
    // Clear data when routed away
    const [term, setTerm] = useState('');

    const onFormSubmit = event => {
        event.preventDefault();
        props.onFormSubmit(term);
    }

    const onTermSubmit = event => {
        setTerm(event.target.value);
    }

    return (
        <div className="search ui container">
            <div className="search-header">
                <div className="search-image-container">
                    <img className="search-image" src={search} alt={"pokemon-search"} />
                </div>
            </div>
            <div className="search-bar-container">
                <form onSubmit={(e) => onFormSubmit(e)}>
                    <div className="search-bar ui input">
                        <input
                            placeholder="Search for a specific Pokémon..."
                            type="text"
                            value={term}
                            onChange={(e) => onTermSubmit(e)}
                        />
                    </div>
                </form>
            </div>
            {props.selectedCard && <SelectedCard selectedCard={props.selectedCard} />}
        </div>
    );
}

export default Search;