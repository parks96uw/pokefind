// Initialize first list of pokemons to be empty
const INITIAL_STATE = {
    searched: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_POKEMON_SEARCHED':
            return action.payload
        case 'CLEAR_POKEMON_SEARCHED':
            return INITIAL_STATE;
        default:
            return state;
    }
}