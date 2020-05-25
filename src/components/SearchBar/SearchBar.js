import React, { useState } from 'react';

import './SearchBar.css';

const SearchBar = (props) => {
    const [term, setTerm] = useState('');

    // Forward the searched term to the parent component
    const onFormSubmit = event => {
        event.preventDefault();
        if (term) props.onFormSubmit(term);
    }

    const onTermSubmit = event => {
        setTerm(event.target.value);
    }

    return (
        <div className="search-container">
            <form onSubmit={(e) => onFormSubmit(e)}>
                <div className="search-bar ui input">
                    <input
                        type="text"
                        value={term}
                        onChange={(e) => onTermSubmit(e)}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;