import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: false,
    reducers: {
         changeTheme: (state) => {
                if (state===false) {
                    state(true)
                  }else{
                    setTheme(false)
                  }
        },
    }
});


export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer