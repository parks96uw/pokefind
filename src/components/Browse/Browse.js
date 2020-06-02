import React from 'react';

import { connect } from 'react-redux';
import { fetchPagedPokemon, clearPagedPokemon } from '../../actions';

import Card from '../Card/Card';
import browse from '../images/browseDex.png';
import './Browse.css';

class Browse extends React.Component {
    state = {
        itemsPerPage: 20
    }

    handlePageChange = async (page) => {
        this.props.fetchPagedPokemon(page);
    }

    // Grab the first page of pokemon
    componentDidMount() {
        this.props.fetchPagedPokemon(this.props.page);
    }

    // Clear the list of items
    componentWillUnmount() {
        this.props.clearPagedPokemon();
    }

    renderedList() {
        if (!this.props.list) return null;
        return this.props.list.map(item => {
            const id = item.url.match(/(?:\/)([0-9]+)/).toString().split(',')[1];
            return (
                <div className="four wide column" key={item.name}>
                    <Card data={item} id={id} />
                </div>
            )
        });
    }

    render() {
        return (
            <div className="browse ui container">
                <div className="browse-header">
                    <div className="browse-image-container">
                        <img className="browse-image" src={browse} alt={"pokemon-search"} />
                    </div>
                </div>
                <div className="cardlist-segment ui segment">
                    <div className="ui stackable grid">{this.renderedList()}</div>
                </div>
                {this.props.list && this.props.count > this.props.list.length && <button className="browse-load-btn ui button"
                    onClick={() => this.handlePageChange(this.props.page + 1)}>Load More</button>}
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        list: state.results.list,
        count: state.results.count,
        page: state.results.page
    };
}

export default connect(mapStateToProps, { fetchPagedPokemon, clearPagedPokemon })(Browse);