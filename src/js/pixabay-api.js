import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export function getImagesByQuery(query) {
    const API_KEY = '50194034-6daf74b2774d983dcc54e4495';
    const BASE_URL = 'https://pixabay.com/api/';

    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    };

    return axios.get(BASE_URL, { params })
        .then(res => {
            // console.log(`🔍 Знайдено зображень: ${res.data.totalHits}`);
            return res.data;
        })
        .catch(error => {
            iziToast.error({
                title: 'Error',
                message: 'Illegal operation',
            });
        });
}
