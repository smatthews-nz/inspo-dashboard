import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const weatherkey = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async(params) => {
    console.log(params.lon)
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${params.lat}&lon=${params.lon}&units=metric&appid=${weatherkey}`)
    const json = await response.json();
    return json;
})

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
      weather: {

      },
      isLoading: false,
      hasError: false
  },
  reducers: {

  },
  extraReducers: {
    [fetchWeather.pending]: (state, action) => {
        state.isLoading = true;
        state.hasError = false;
    },
    [fetchWeather.fulfilled]: (state, action) => {
        state.weather = {
            min: action.payload.main.temp_min,
            max: action.payload.main.temp_max,
            description: action.payload.weather[0].description,
            icon: action.payload.weather[0].icon
        }
        state.isLoading = false;
        state.hasError = false;
    },
    [fetchWeather.rejected]: (state, action) => {
        state.isLoading = false;
        state.hasError = true;
    }
  }  
})

export const selectWeather = state => state.weather;
export default weatherSlice.reducer;