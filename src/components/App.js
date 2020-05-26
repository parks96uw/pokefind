import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header/Header';
import Browse from './Browse/Browse';
import Search from './Search/Search';
import Home from './Home/Home';
import { getSearchData, getPagedData } from '../api/';
import './App.css';

class App extends React.Component {
    state = {
        term: '',
        results: [],
        selectedCard: null,
        activePage: 1,
        itemsCountPerPage: 20,
        totalCount: 0,
    }

    // DEF: Request for selected Pokemon
    onFormSubmit = async (term, page) => {
        const response = await getSearchData(term.toLowerCase(), page);

        // Need better error handling -- show pokemon not found
        if (!response || !term) {
            this.setState({ term: '', selectedCard: { error: "POKEMON_NOT_FOUND" } });
            return;
        }
        console.log(response);
        this.setState({ selectedCard: response.data.data });
    }

    onPageData = async (page) => {
        const response = await getPagedData(page);
        let combined = [...this.state.results].concat(response.data.data.results);
        this.setState({
            results: combined,
            totalCount: response.data.data.count
        });
    }

    handlePageChange = (page) => {
        this.setState({ activePage: page });
        this.onPageData(page);
    }

    async componentDidMount() {
        this.onPageData(this.state.activePage);
    }

    render() {
        return (
            <div className="ui fluid container">
                <BrowserRouter>
                    <Header />
                    <div>
                        <Route path="/" exact component={Home} />
                        <Route path="/browse" exact render={(routeProps) => (
                            <Browse results={this.state.results}
                                activePage={this.state.activePage}
                                itemsCountPerPage={this.state.itemsCountPerPage}
                                totalItemsCount={this.state.totalCount}
                                onChange={this.handlePageChange}
                            />
                        )} />
                        <Route path="/search" render={(routeProps) => (
                            <Search onFormSubmit={this.onFormSubmit} selectedCard={this.state.selectedCard} />
                        )} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;