import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/react";

export interface CompilerSliceStateType {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };
  currentLanguage: "html" | "css" | "javascript";
}

const initialState: CompilerSliceStateType = {
  fullCode: {
    html: "<!-- This is HTML Code -->",
    css: "/* This is CSS Code */",
    javascript: "// This is JS Code",
  },

  currentLanguage: "html"
  
};

const compilerSlice = createSlice({
  name: "compilerSlice",
  initialState,
  reducers: {
    updateCurrentLanguage: (
      state,
      action: PayloadAction<CompilerSliceStateType["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload;
    },
    updateCodeValue: (
      state,
      action: PayloadAction<string>
    ) => {
      state.fullCode[state.currentLanguage] = action.payload;
    },
    updateFullCode: (state, action: PayloadAction<CompilerSliceStateType['fullCode']>) => {
      state.fullCode = action.payload;
    }
  },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage, updateCodeValue,updateFullCode } =
  compilerSlice.actions;
