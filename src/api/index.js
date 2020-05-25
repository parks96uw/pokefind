import axios from 'axios';

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

// Get some paged data or searched pokemon
export const getSearchData = async (term) => {
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

export const getPagedData = async (page) => {
    let enteredTerm = BASE_URL;
    let offSet = 1;
    
    if (page) {
        offSet = 20*page - 20;
        enteredTerm = `${BASE_URL}?offset=${offSet}&limit=20`;
    }

    try {
        const data = await axios.get(enteredTerm);
        return { data };
    } catch (error) {
        console.log(error);
    }    
}