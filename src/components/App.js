import React from 'react';

import CardList from './CardList/CardList';
import SearchBar from './SearchBar/SearchBar';
import SelectedCard from './SelectedCard/SelectedCard';

import { fetchData } from '../api/';

import './App.css';
import logo from '../images/icon.png';

class App extends React.Component {
    state = {
        term: '',
        results: [],
        selectedCard: {}
    }

    onFormSubmit = async (term, page) => {
        const response = await fetchData(term.toLowerCase());
        if (!response) {
            this.setState({
                term: '',
                selectedCard: {}
            });
            return;
        }

        const data = response.data.data;
        this.setState({
            term: term,
            selectedCard: {
                name: data.name,
                back_default: data.sprites.back_default,
                front_default: data.sprites.front_default,
                back_shiny: data.sprites.back_shiny,
                front_shiny: data.sprites.front_shiny
            }
        });
    }

    async componentDidMount() {
        const response = await fetchData();
        console.log(response);
        this.setState({ results: response.data.data.results });
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    <img className="header-image" src={logo} alt="pokemon-search"/>
                    {/* <h1 className="ui header">PokéSearch</h1> */}
                </div>
                <SearchBar onFormSubmit={this.onFormSubmit} />
                <div class="ui divider"></div>
                <SelectedCard selectedCard={this.state.selectedCard} />
                <div class="ui divider"></div>
                <CardList results={this.state.results} />
            </div>
        )
    }
}

export default App;