import { createSlice } from '@reduxjs/toolkit';

export const idSlice = createSlice({
    name: 'id',
    initialState: {
         id: ""
    },
    reducers: {
         captureId: (state,  action ) => {
                state.id = action.payload
        },
    }
});


export const { captureId } = idSlice.actions;
export default idSlice.reducer