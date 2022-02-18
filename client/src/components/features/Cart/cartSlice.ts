import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from '../../../app/store';
import { Product } from "../types";
import { loadingCart } from "./cartAPI";


export interface CartState {
    products: Product[];
    status : 'loading' | 'idle' | 'failed';
}

const initialState: CartState = {
    products: [],
    status: 'idle'
};

export const loadingCartAsync = createAsyncThunk(
    'cart/loading',
    async () => {
        const response = await loadingCart();
        return response.data;
    }
);

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {            
            var product = action.payload;
            var existingProduct = state.products.find(x => x.id === product.id);
            if (existingProduct) {
                existingProduct.count += 1;
            } else {
                var newProduct: Product = {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    count: 1
                };
                state.products.push(newProduct);
            }
        },
        reduceProduct: (state, action: PayloadAction<Product>) => {
            var existingProduct = state.products.find(x => x.name === action.payload.name);            
            if (existingProduct && existingProduct.count > 1) {
                existingProduct.count -= 1;
            }
            else {
                state.products = state.products.filter(x => x.id !== existingProduct?.id);
            }
        },
        removeProduct: (state, action: PayloadAction<Product>) => {
            var existingProduct = state.products.find(x => x.name === action.payload.name);            
            if (existingProduct && existingProduct.count >= 1) {
                state.products = state.products.filter(x => x.id !== existingProduct?.id);
            }
        },
        removeAllProducts: (state) => {
            state.products = [];
        }
    },
    extraReducers: (builder) => {
    }
});

export const { addProduct, removeProduct, removeAllProducts, reduceProduct } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;