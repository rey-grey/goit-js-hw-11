import axios from 'axios';
const API_KEY = '50194034-6daf74b2774d983dcc54e4495';
const BASE_URL = 'https://pixabay.com/api/';

function getImagesByQuery(query) {
    const response = axios.get(BASE_URL, {
        params: {
            key: '50194034-6daf74b2774d983dcc54e4495',
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: 'true',

        },
        
    });
    return response.data;
    
}

