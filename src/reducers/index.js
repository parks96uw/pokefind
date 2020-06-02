import { combineReducers } from 'redux';

import resultsReducer from './pagedPokemonsReducer';
import searchReducer from './searchedPokemonReducer';

export default combineReducers({
    results: resultsReducer,
    searched: searchReducer
});