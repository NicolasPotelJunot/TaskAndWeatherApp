import { createSlice } from '@reduxjs/toolkit';

export const wheatherSlice = createSlice({
    name: 'wheather',
    initialState: {
         city: "cordoba"
    },
    reducers: {
         changeCity: (state, action ) => {
                state = action.payload
        },
    }
});

export const { changeCity } = wheatherSlice.actions;
export default wheatherSlice.reducer