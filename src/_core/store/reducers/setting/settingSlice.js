import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  theme: "dark",
  lang: "en",
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setLang: (state, { payload }) => {
      state.lang = payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    changeTheme: (state, { payload }) => {
      state.theme = payload;
    },
    // It's necessary for changing texts based on language
    // DO NOT REMOVE IT
    setRefresh: (state, { payload }) => {
      state.refresh = payload;
    },
  },
});

export const { setLang, toggleTheme, changeTheme, setRefresh } =
  settingSlice.actions;
export default settingSlice;
