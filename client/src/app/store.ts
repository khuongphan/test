import {configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cartReducer from '../components/features/Cart/cartSlice';
import productListReducer from '../components/features/ProductList/ProductListSlice';


export const store = configureStore({
    reducer : {
        cart : cartReducer,
        productList: productListReducer
    },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;