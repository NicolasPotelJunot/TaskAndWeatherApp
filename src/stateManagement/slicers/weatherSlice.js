import { createSlice } from '@reduxjs/toolkit';

export const wheatherSlice = createSlice({
    name: 'name',
    initialState:{
        name: "hola"
   },
    reducers: {
         changeCity: (state, action ) => {            
            state.name = action.payload
        },
    }
});

export const { changeCity } = wheatherSlice.actions;
export default wheatherSlice.reducer