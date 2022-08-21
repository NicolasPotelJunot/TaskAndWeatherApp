import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
    name: 'form',
    initialState: {
         modal: null
    },
    reducers: {
        openFormModal: (state) => {
            (state.modal!==false)
                ? state.modal= false
                : state.modal= true           
        },
    }
});


export const { openFormModal } = formSlice.actions;
export default formSlice.reducer