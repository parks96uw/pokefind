import React from 'react';
import Pagination from "react-js-pagination";

import CardList from './CardList/CardList';
import SearchBar from './SearchBar/SearchBar';
import SelectedCard from './SelectedCard/SelectedCard';
import { getSearchData, getPagedData } from '../api/';

import './App.css';
import logo from '../images/PokeFind.png';

class App extends React.Component {
    state = {
        term: '',
        results: [],
        selectedCard: {},
        activePage: 1,
        itemsPerPage: 20,
        totalCount: 0,
    }

    // DEF: Request for selected Pokemon
    onFormSubmit = async (term, page) => {
        const response = await getSearchData(term.toLowerCase(), page);
        
        // Need better error handling -- show pokemon not found
        if (!response) { // if nothing found
            this.setState({ term: '', selectedCard: {} });
            return;
        }
        const data = response.data.data;
        const name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        this.setState({
            term,
            selectedCard: {
                name,
                back_default: data.sprites.back_default,
                front_default: data.sprites.front_default,
                back_shiny: data.sprites.back_shiny,
                front_shiny: data.sprites.front_shiny
            }
        });
    }

    onPageData = async (page) => {
        const response = await getPagedData(page);
        this.setState({
            results: response.data.data.results,
            totalCount: response.data.data.count
        });
    }

    handlePageChange = (page) => {
        this.setState({
            activePage: page
        });
        this.onPageData(page);
    }

    // DEF: Request for first page of Pokemon
    async componentDidMount() {
        this.onPageData(this.state.activePage - 1);
    }

    render() {
        return (
            <div className="ui container">
                <div><img className="header-image" src={logo} alt="pokemon-search" /></div>
                <SearchBar onFormSubmit={this.onFormSubmit} />
                {this.state.selectedCard.name && <SelectedCard selectedCard={this.state.selectedCard} />}
                <CardList results={this.state.results} />
                {this.state.totalCount > 0 && <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.itemsPerPage}
                    totalItemsCount={this.state.totalCount}
                    pageRangeDisplayed={10}
                    itemClass="page-item"
                    linkClass="page-link"
                    onChange={this.handlePageChange.bind(this)}
                />}
            </div>
        )
    }
}

export default App;