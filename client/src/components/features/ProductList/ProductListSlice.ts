import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
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
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(loadingProductListAsync.pending, (state) => {
            state.status = 'loading';
            console.log(state.status);            
        })
        .addCase(loadingProductListAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            console.log(state.status);
            state.productList = action.payload;
        })
    }
});

export const { refreshProductList } = productListSlice.actions;

export const selectProductList = (state: RootState) => state.productList.productList;

export default productListSlice.reducer;