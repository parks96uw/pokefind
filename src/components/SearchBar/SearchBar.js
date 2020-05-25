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
                <div className="ui focus input">
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