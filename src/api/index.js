import axios from 'axios';

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

// Get some paged data or searched pokemon
export const fetchData = async (term) => {
    let enteredTerm = BASE_URL;
    
    if (term) {
        enteredTerm = `${BASE_URL}/${term}`;
    }

    try {
        const data = await axios.get(enteredTerm);
        return { data };
    } catch (error) {
        console.log(error);
    }
}