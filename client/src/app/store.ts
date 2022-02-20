import {configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cartReducer from '../components/features/Cart/cartSlice';
import productListReducer from '../components/features/ProductList/ProductListSlice';
import operationReducer from '../components/features/Operation/Operation';


export const store = configureStore({
    reducer : {
        cart : cartReducer,
        productList: productListReducer,
        operation: operationReducer
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