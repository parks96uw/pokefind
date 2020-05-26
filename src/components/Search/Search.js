import React, { useState } from 'react';

import SelectedCard from '../SelectedCard/SelectedCard';
import './Search.css';

const Search = (props) => {
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
                <h1 className="ui header">Search through the Pokémon</h1>
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