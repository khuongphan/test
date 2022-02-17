export interface Product {
    id: number,
    name: string;
    price: number;
    count: number;
}

export interface Cart {
    products: Product[];    
}