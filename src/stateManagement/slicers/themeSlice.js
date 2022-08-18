import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
      theme: "cmyk"
    },
    reducers: {
         changeTheme: (state) => {
            (state.theme==="cmyk")
                ? state.theme= "night"
                : state.theme= "cmyk"            
        },
    }
});


export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer