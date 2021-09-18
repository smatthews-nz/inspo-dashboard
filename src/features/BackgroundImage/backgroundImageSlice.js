import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const unsplashAccessKey = process.env.REACT_APP_UNSPSLASH_ACCESS_KEY;
// const unsplashSecretKey = process.env.REACT_APP_UNSPLASH_SECRET_KEY;
const url = 'https://api.unsplash.com/photos/random/'
const topicId = 'bo8jQKTaE0Y' //topic id for Unsplash wallpapers

export const fetchImage = createAsyncThunk('backgroundImage/fetchImage', async () => {
    const response = await fetch(`${url}?topics=${topicId}&client_id=${unsplashAccessKey}`)
    const json = await response.json();
    return json;
})

const backgroundImageSlice = createSlice({
    name: 'background',
    initialState: {
        image: {},
        isLoading: false,
        hasError: false
    },
    reducers: {},
    extraReducers: {
        [fetchImage.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchImage.fulfilled]: (state, action) => {
            state.image = {...action.payload};
            state.isLoading = false;
            state.hasError = false;
        },
        [fetchImage.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})


export default backgroundImageSlice.reducer
export const selectImage = state => state.background