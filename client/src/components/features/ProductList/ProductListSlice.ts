import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { Country, Product } from "../../../app/types";
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
    async (payload: Country, thunkAPI) => {
        const response = await loadingProductList(payload.code);
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