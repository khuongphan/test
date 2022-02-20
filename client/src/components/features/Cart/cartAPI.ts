import axios from 'axios';
import { Cart, Country, Product } from '../../../app/types';


export async function loadingCart() {
    console.log('loadingCart');
    return axios.get('/api/cart');
}

export async function getTotalCost(products: Product[], country: Country) {
    console.log('loadingCart');
    return axios.post('/api/cart/calculate', {
        products: products,
        country: country
    });
}

export async function getDeliveryCost(cart: Cart) {
    console.log('getShippingCost');
    return axios.post('https://localhost:5001/api/delivery/calculate', cart);
}

export async function updateCost(cart: Cart) {
    console.log('update cost');
    return axios.post('https://localhost:5001/api/cart/calculate', cart);
}

export async function placeOrder(cart: Cart) {
    console.log('placeOrder');
    return axios.post('https://localhost:5001/api/order/place', cart);
}