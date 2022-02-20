import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { Cart } from "../../../app/types";
import { placeOrder } from "../Cart/cartAPI";

export interface Operation {
    operation: {
        name: string,
        result: any
    };
    status : 'loading' | 'idle' | 'failed';
}

const initialState: Operation = {
    operation: {
        name: '',
        result: undefined
    },
    status: 'idle'
};

export const placeOrderAsync = createAsyncThunk(
    'order/place',
    async (payload: Cart, thunkAPI) => {
        const response = await placeOrder(payload);
        return response.data;
    }
);

export const operationSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        placeOrderSuccessful: (state, action) => {
            state.operation = {
                name : 'placeOrder',
                result: action.payload
            };
            state.status = 'idle';
        },
        placingOrder: (state) => {
            state.status = 'loading';
            state.operation = {
                name: 'placeOrder',
                result: undefined
            };
        },
        placeOrderFailed: (state) => {
            state.operation = {
                name: 'placeOrder',
                result: null
            }
            state.status = 'failed'
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(placeOrderAsync.pending, (state) => {
            state.operation = {
                name : 'placeOrder',
                result: null
            };
            state.status = 'loading';
        })
        .addCase(placeOrderAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.operation.result = action.payload;            
        })
        .addCase(placeOrderAsync.rejected, (state, action)=>{
            state.status = 'failed';
            state.operation.result = {
                errorMessage: action.payload
            };
        });
    }
});

export const {placeOrderSuccessful, placingOrder, placeOrderFailed} = operationSlice.actions;

export const selectOperation = (state: RootState) => state.operation;

export default operationSlice.reducer;