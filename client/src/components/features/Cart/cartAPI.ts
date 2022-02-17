import axios from 'axios';

export function loadingCart() {
    return axios.get('/api/cart');
}