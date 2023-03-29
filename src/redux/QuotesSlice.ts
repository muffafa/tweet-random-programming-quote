import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

// Type for our state
export interface QuoteState {
  quote: string;
  author: string;
  status: "pending" | "error" | "done" | "idle";
  error: string | null;
}

// Initial state
const initialState: QuoteState = {
  quote: "empty",
  author: "unknown",
  status: "idle",
  error: "",
};

// Actual Slice
export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    setQuoteSlice(state, action) {
      state.quote = action.payload.quote;
      state.author = action.payload.author;
    },
    setQuoteStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setQuoteSlice, setQuoteStatus } = quoteSlice.actions;

export const selectQuote = (state: AppState) => state.quote;

export default quoteSlice.reducer;
