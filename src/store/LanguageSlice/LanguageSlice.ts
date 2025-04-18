import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Lang = "en" | "ar";

// read from localStorage key **userLanguage**
const initialState: Lang =
  (localStorage.getItem("userLanguage") as Lang) ?? "en";

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    toggleLang: (state) => (state === "en" ? "ar" : "en"),
    setLang: (_state, action: PayloadAction<Lang>) => action.payload,
  },
});

export const { toggleLang, setLang } = languageSlice.actions;
export default languageSlice.reducer;
