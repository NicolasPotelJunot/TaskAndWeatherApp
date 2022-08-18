import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
      theme: "corporate"
    },
    reducers: {
         changeTheme: (state) => {
            (state.theme==="corporate")
                ? state.theme= "dark"
                : state.theme= "corporate"            
        },
    }
});


export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer