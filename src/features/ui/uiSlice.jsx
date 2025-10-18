import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: localStorage.getItem('theme') === 'dark'
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem('theme', state.isDarkMode ? 'dark' : 'light');
      document.body.classList.toggle('dark-theme', state.isDarkMode);
    }
  }
});

export const { toggleTheme } = uiSlice.actions;
export default uiSlice.reducer;