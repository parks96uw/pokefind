import React from 'react';
import { connect } from 'react-redux';

import { fetchSearchedPokemon, clearSearchedPokemon } from '../../actions';
import SelectedCard from '../SelectedCard/SelectedCard';
import search from '../images/searchDex.png';
import './Search.css';

class Search extends React.Component {
    state = {
        searched: ''
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.fetchSearchedPokemon(this.state.searched);
    }

    onTermSubmit = event => {
        this.setState({ searched: event.target.value });
    }

    componentWillUnmount() {
        this.props.clearSearchedPokemon();
    }

    render() {
        return (
            <div className="search ui container">
                <div className="search-header">
                    <div className="search-image-container">
                        <img className="search-image" src={search} alt={"pokemon-search"} />
                    </div>
                </div>
                <div className="search-bar-container">
                    <form onSubmit={(e) => this.onFormSubmit(e)}>
                        <div className="search-bar ui input">
                            <input
                                placeholder="Search for a specific Pokémon..."
                                type="text"
                                value={this.state.searched}
                                onChange={(e) => this.onTermSubmit(e)}
                            />
                        </div>
                    </form>
                </div>
                {this.props.searched && <SelectedCard {...this.props}/> }
            </div>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        searched: state.searched.searched,
        id: state.searched.id,
        weight: state.searched.weight,
        height: state.searched.height,
        error: state.searched.error
    };

}

export default connect(mapStateToProps, { fetchSearchedPokemon, clearSearchedPokemon })(Search);