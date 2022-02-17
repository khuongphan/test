import axios from 'axios';

export async function loadingProductList() {
    var products = await axios.get('/api/products');
    return products;
}