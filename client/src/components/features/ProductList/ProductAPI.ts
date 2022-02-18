import axios from 'axios';

export async function loadingProductList() {
    var products = await axios.get('https://localhost:5001/products');
    return products;
}