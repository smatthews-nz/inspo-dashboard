import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuote = createAsyncThunk('quote/fetchQuote', async () => {
    const response = await fetch(`https://api.quotable.io/random`)
    const json = await response.json();
    return json;    
})

const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        quote: {

        },
        isLoading: false,
        hasError: false
    },
    reducers: {
    
    },
    extraReducers: {
        [fetchQuote.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError =  false;
        },
        [fetchQuote.fulfilled]: (state, action) => {
            state.quote = {
                quote: action.payload.content,
                author: action.payload.author
            };
            state.isLoading = false;
            state.hasError = false;
        },
        [fetchQuote.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

export default quoteSlice.reducer;
