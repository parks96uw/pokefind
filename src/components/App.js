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
        itemsCountPerPage: 20,
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
        this.setState({
            selectedCard: {
                name: response.data.data.name,
                id: response.data.data.id
            }
        });
    }

    onPageData = async (page) => {
        const response = await getPagedData(page);
        // let combined = [...this.state.results].concat(response.data.data.results);
        this.setState({
            results: response.data.data.results,
            // results: combined,
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
                                itemsCountPerPage={this.state.itemsCountPerPage}
                                totalItemsCount={this.state.totalCount}
                                onChange={this.handlePageChange}
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