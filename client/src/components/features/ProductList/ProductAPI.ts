import axios from 'axios';

export async function loadingProductList(code: string) {
    var products = await axios.get(`https://localhost:5001/api/products?countryCode=${code}`);
    return products;
}