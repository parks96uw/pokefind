import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header/Header';
import Browse from './Browse/Browse';
import Search from './Search/Search';

import { getSearchData, getPagedData } from '../api/';

import './App.css';

class App extends React.Component {
    state = {
        term: '',
        results: [],
        selectedCard: null,
        activePage: 1,
        itemsPerPage: 20,
        totalCount: 0,
    }

    // DEF: Request for selected Pokemon
    onFormSubmit = async (term, page) => {
        const response = await getSearchData(term.toLowerCase(), page);

        // Need better error handling -- show pokemon not found
        if (!response || !term) { // if nothing found
            this.setState({ term: '', selectedCard: null });
            return;
        }
        console.log(response.data.data);

        this.setState({
            selectedCard: {
                name: response.data.data.name,
                id: response.data.data.id
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
    //      PAGE == 0 because of API offset == 0
    async componentDidMount() {
        this.onPageData(this.state.activePage - 1);
    }

    render() {
        return (
            <div className="ui container">
                <BrowserRouter>
                    <Header />
                    <div>
                        <Route path="/" exact render={(routeProps) => (
                            <div>Hi</div>
                        )} />
                        <Route path="/browse" exact render={(routeProps) => (
                            <Browse 
                                results={this.state.results}
                                activePage={this.state.activePage}
                                itemsCountPerPage={this.state.itemsPerPage}
                                totalItemsCount={this.state.totalCount}
                                onChange={this.handlePageChange.bind(this)}
                            />
                        )} />
                        <Route path="/search" render={(routeProps) => (
                            <Search
                                onFormSubmit={this.onFormSubmit}
                                selectedCard={this.state.selectedCard}
                            />
                        )} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;