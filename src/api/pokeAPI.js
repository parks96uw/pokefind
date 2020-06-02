import axios from 'axios';

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

// DEF: Find Pokemon with term name
export const getSearchData = async (term) => {
    let enteredTerm = BASE_URL;
    if (term) {
        let formattedTerm = term.split(' ').join('-');
        enteredTerm = `${BASE_URL}/${formattedTerm}`;
    }

    try {
        const data = await axios.get(enteredTerm);
        return { data };
    } catch (error) {
        console.log(error);
    }
}

// DEF: Get paged data
export const getPagedData = async (page) => {
    let enteredTerm = BASE_URL;
    let offSet = 1;

    if (page) {
        offSet = 20 * page - 20;
        enteredTerm = `${BASE_URL}?offset=${offSet}&limit=20`;
    }

    try {
        const data = await axios.get(enteredTerm);
        return { data };
    } catch (error) {
        console.log(error);
    }
}