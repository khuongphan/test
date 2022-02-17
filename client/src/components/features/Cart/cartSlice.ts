import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from '../../../app/store';
import { Cart, Product } from "../types";
import { loadingCart } from "./cartAPI";


export interface CartState {
    cart: Cart;
    status : 'loading' | 'idle' | 'failed';
}

const initialState: CartState = {
    cart: {
        products: [],
    },
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
            console.log('addProduct', action.payload);
            state.cart.products.push()
        },
        removeProduct: (state, action: PayloadAction<Product>) => {
            console.log('removeProduct');
            var product = state.cart.products.find(x => x.name == action.payload.name);
            if (product) {
                console.log(product);
            }
        },
        clearCart: (state) => {
            console.log('clearCart');
            state.cart.products = [];
        }
    },
    extraReducers: (builder) => {
    }
});

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.cart;

export default cartSlice.reducer;