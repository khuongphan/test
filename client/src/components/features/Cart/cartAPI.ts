import axios from 'axios';

export function loadingCart() {
    console.log('loadingCart');
    return axios.get('/api/cart');
}