import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types";
import { loadingProductList } from "./ProductAPI";


export interface ProductListState {
    productList: Product[];
    status : 'loading' | 'idle' | 'failed';
}

const initialState: ProductListState = {
    productList: [],
    status: 'idle'
};

export const loadingProductListAsync = createAsyncThunk(
    'products/loading',
    async () => {
        const response = await loadingProductList();
        return response.data;
    }
);

export const productListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {
        refreshProductList: (state) => {
            console.log('refreshProductList');
        }
    },
    extraReducers: (builder) => {
    }
});

export default productListSlice.reducer;