import axios from 'axios'


export const PRODUCTS_URL = 'https://imago-project-c99fa-default-rtdb.firebaseio.com/Products.json'


export const getAutocompleteData = async (name) => {
    try {
        const urlToUse = `${PRODUCTS_URL}?orderBy="name"&startAt="${name}"&endAt="${name}\uf8ff"`
        const {data} = await axios.get(urlToUse);
        return data;
    } catch (error) {
        console.log(error);
    }
}