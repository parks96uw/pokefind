import React from 'react';

import CardList from './CardList';
import SearchBar from './SearchBar';
import SelectedCard from './SelectedCard';

import { fetchData } from '../api/';

class App extends React.Component {
    state = {
        term: '',
        results: [],
        selectedCard: {}
    }


    // OnLoad -> fetchData()
    // OnSearch -> fetchData(term)

    onFormSubmit = async (term, page) => {
        const response = await fetchData(term);
        console.log(response);
        const data = response.data;
        this.setState({
            term: term,
            selectedCard: {
                name: ''
            }
        });
    }

    async componentDidMount() {
        const response = await fetchData();
        console.log(response);
        this.setState({
            results: response.data.data.results
        });
    }

    render() {
        return (
            <div>
                <SearchBar onFormSubmit={this.onFormSubmit} />
                <SelectedCard selectedCard={this.state.selectedCard} />
                <CardList results={this.state.results} />
                {/* {this.state.results.length > 1 && <CardList results={this.state.results} />} */}
            </div>
        )
    }
}

export default App;