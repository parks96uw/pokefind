// Initialize first list of pokemons to be empty
const INITIAL_STATE = {
    list: [],
    count: 0,
    page: 1
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // Append paged to current list of pokemon
        case 'FETCH_POKEMON_PAGED':
            return {
                ...state,
                count: action.payload.count,
                list: [...state.list, ...action.payload.list],
                page: action.payload.page
            }
        case 'CLEAR_POKEMON_PAGED':
            return INITIAL_STATE;
        default:
            return state;
    }
}