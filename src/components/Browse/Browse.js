import React from 'react';
// import Pagination from "react-js-pagination";

import CardList from '../CartList/CardList';
import browse from '../images/browseDex.png';
import './Browse.css';

const Browse = (props) => {
    return (
        <div className="browse ui container">
            <div className="browse-header">
                <div className="browse-image-container">
                    <img className="browse-image" src={browse} alt={"pokemon-search"} />
                </div>
            </div>
            <CardList results={props.results} />
            {props.totalItemsCount > props.results.length && <button
                className="browse-load-btn ui button"
                onClick={() => props.onChange(props.activePage + 1)}>
                Load More
            </button>}
            {/* <Pagination
                className="pagination"
                activePage={activePage}
                itemsCountPerPage={itemsCountPerPage}
                totalItemsCount={totalItemsCount}
                pageRangeDisplayed={5}
                itemClass="page-item"
                linkClass="page-link"
                hideDisabled={true}
                hideFirstLastPages={true}
                onChange={onChange}
            /> */}
        </div>
    )
}

export default Browse;