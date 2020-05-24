import React, { useState } from 'react';

const SearchBar = (props) => {
    const [term, setTerm] = useState('');

    // Forward the searched term to the parent component
    const onFormSubmit = event => {
        event.preventDefault();
        props.onFormSubmit(term);
    }

    const onTermSubmit = event => {
        setTerm(event.target.value);
    }

    return (
        <div>
            <form onSubmit={(e) => onFormSubmit(e)}>
                <input
                    type="text"
                    value={term}
                    onChange={(e) => onTermSubmit(e)}
                />
            </form>
        </div>
    )
}

export default SearchBar;