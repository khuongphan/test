export interface Product {
    id: number,
    name: string;
    price: number;
}

export interface CartItem {
    product: Product,
    count: number,
    totalCost: number
}

export interface Cart { 
    items: CartItem[],
    country: Country,
    deliveryCost: number
}

export interface Country {
    name: string,
    code: string,
    currency: string
}