import React from 'react';
import Pagination from "react-js-pagination";

import CardList from '../CartList/CardList';
import './Browse.css';

const Browse = ({activePage, results, itemsCountPerPage, totalItemsCount, onChange}) => {
    return (
        <div className="browse ui container">
            <div className="browse-header">
                <h1 className="ui header">Browse through the Pokémon</h1>
            </div>
            <CardList results={results} />
            <Pagination
                className="pagination"
                activePage={activePage}
                itemsCountPerPage={itemsCountPerPage}
                totalItemsCount={totalItemsCount}
                pageRangeDisplayed={5}
                itemClass="page-item"
                linkClass="page-link"
                onChange={onChange}
            />
        </div>
    )
}

export default Browse;