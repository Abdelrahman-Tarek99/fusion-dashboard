import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Theme = "light" | "dark";

const initialState: Theme =
  (localStorage.getItem("theme") as Theme) ??
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => (state === "dark" ? "light" : "dark"),
    setTheme: (_state, action: PayloadAction<Theme>) => action.payload,
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
