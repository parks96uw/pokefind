import React from 'react';

import CardList from './CardList/CardList';
import SearchBar from './SearchBar/SearchBar';
import SelectedCard from './SelectedCard/SelectedCard';

import { fetchData } from '../api/';

import './App.css';
import logo from '../images/PokeFind.png';

class App extends React.Component {
    state = {
        term: '',
        results: [],
        selectedCard: {}
    }

    // DEF: Request for selected Pokemon
    onFormSubmit = async (term, page) => {
        const response = await fetchData(term.toLowerCase());
        if (!response) { // if not found, show pokemon not found
            this.setState({ term: '', selectedCard: {} });
            return;
        }
        console.log(response);
        const data = response.data.data;
        
        const name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        this.setState({
            term: term,
            selectedCard: {
                name,
                back_default: data.sprites.back_default,
                front_default: data.sprites.front_default,
                back_shiny: data.sprites.back_shiny,
                front_shiny: data.sprites.front_shiny
            }
        });
    }

    // DEF: Request for first page of Pokemon
    async componentDidMount() {
        const response = await fetchData();
        this.setState({ results: response.data.data.results });
    }

    render() {
        return (
            <div className="ui container">
                <div><img className="header-image" src={logo} alt="pokemon-search" /></div>
                <SearchBar onFormSubmit={this.onFormSubmit} />
                {this.state.selectedCard.name && <SelectedCard selectedCard={this.state.selectedCard} /> }
                <CardList results={this.state.results} />
            </div>
        )
    }
}

export default App;