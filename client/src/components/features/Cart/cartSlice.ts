import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from '../../../app/store';
import { Cart, Country, Product, CartItem } from "../../../app/types";
import { loadingCart, getDeliveryCost, updateCost } from "./cartAPI";
import { Countries, getCountry, AUST } from "../../../app/const";


export interface CartState {
    cart: Cart,
    status : 'loading' | 'idle' | 'failed';
}

const initialState: CartState = {
    cart: {
        items: [],
        country: AUST,
        deliveryCost: 0.0
    } as Cart,
    status: 'idle'
};

export const loadingCartAsync = createAsyncThunk(
    'cart/loading',
    async () => {
        const response = await loadingCart();
        return response.data;
    }
);

export const updateCostAsync = createAsyncThunk(
    'cart/calculate',
    async(payload : Cart, thunkAPI) => { 
        const response = await updateCost(payload);
        console.log('updateCost', payload)
        return response.data;
    }
)

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {            
            var product = action.payload;
            var cart = state.cart;
            var existingItem = cart.items.find(x => x.product.id === product.id);
            if (existingItem) {
                existingItem.count += 1;
            } else {
                var newItem: CartItem = {
                    product: product,
                    count: 1,
                    totalCost: product.price
                };
                cart.items.push(newItem);
            }            
        },
        reduceProduct: (state, action: PayloadAction<Product>) => {
            var cart = state.cart;
            var existingItem = cart.items.find(x => x.product.id === action.payload.id);
            if (existingItem && existingItem.count > 1) {
                existingItem.count -= 1;
            }
            else {
                cart.items = cart.items.filter(x => x.product.id !== action.payload.id);
            }
        },
        removeItem: (state, action: PayloadAction<Product>) => {
            var cart = state.cart;
            var existingProduct = cart.items.find(x => x.product.id === action.payload.id);
            if (existingProduct && existingProduct.count >= 1) {
                cart.items = cart.items.filter(x => x.product.id !== action.payload.id);
            }
        },
        updateCoutry: (state, action: PayloadAction<Country>) => {
            state.cart.country = action.payload 
        },
        removeAllItems: (state) => {
            state.cart.items = [];
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(updateCostAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(updateCostAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            var result: Cart = action.payload;
            console.log('result', result);
            state.cart.items.map(x => {
                var item = result.items.find(_ => _.product.id === x.product.id);
                if (item) {
                    x.totalCost = item?.totalCost;
                };
                return x;
            });
            state.cart.deliveryCost = result.deliveryCost;
        })

    }
});

export const { addProduct, removeItem, removeAllItems, reduceProduct, updateCoutry } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;