import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Lang = "en" | "ar";

// read from localStorage key **userLanguage**
const initialState: Lang =
  (localStorage.getItem("userLanguage") as Lang) ?? "en";

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    toggleLang: (state) => {
      const newLang = state === "en" ? "ar" : "en";
      window.location.reload();
      return newLang;
    },
    setLang: (_state, action: PayloadAction<Lang>) => {
      return action.payload;
    },
  },
});

export const { toggleLang, setLang } = languageSlice.actions;
export default languageSlice.reducer;
