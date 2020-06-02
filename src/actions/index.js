import { getPagedData, getSearchData } from '../api/pokeAPI';

export const fetchPagedPokemon = (page) => async (dispatch) => {
    const response = await getPagedData(page);
    dispatch({
        type: 'FETCH_POKEMON_PAGED', payload: {
            list: response.data.data.results,
            count: response.data.data.count,
            page: page,
        }
    });
}

export const clearPagedPokemon = () => (dispatch) => {
    dispatch({ type: 'CLEAR_POKEMON_PAGED' });
}

export const fetchSearchedPokemon = (term) => async dispatch => {
    const response = await getSearchData(term);
    let error = 'none';
    // Need better error handling -- show pokemon not found
    if (!response || !term) {
        dispatch({
            type: 'FETCH_POKEMON_SEARCHED',
            payload: {
                searched: 'NOT_FOUND',
                id: 'NOT_FOUND',
                weight: 'NOT_FOUND',
                height: 'NOT_FOUND',
                error: "POKEMON_NOT_FOUND"
            }
        });
        return;
    }
    dispatch({
        type: 'FETCH_POKEMON_SEARCHED',
        payload: {
            searched: response.data.data.name,
            id: response.data.data.id,
            weight: response.data.data.weight,
            height: response.data.data.height,
            error: 'none'
        }
    });
}

export const clearSearchedPokemon = () => (dispatch) => {
    dispatch({ type: 'CLEAR_POKEMON_SEARCHED' });
}