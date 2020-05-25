import React from 'react';

import CardList from '../CardList/CardList';
import Pagination from "react-js-pagination";

import './Browse.css';

const Browse = (props) => {
    return (
        <div>
            <CardList results={props.results} />
            <Pagination
                className="pagination"
                activePage={props.activePage}
                itemsCountPerPage={props.itemPerPage}
                totalItemsCount={props.totalItemsCount}
                pageRangeDisplayed={5}
                itemClass="page-item"
                linkClass="page-link"
                onChange={props.onChange}
            />
        </div>
    )    
}

export default Browse;