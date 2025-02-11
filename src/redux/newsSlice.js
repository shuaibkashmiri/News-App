import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "40dd280d53a149f48c7c4f88adaf28ec";
const BASE_URL = "https://newsapi.org/v2";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async ({ category, query }) => {
    let url = "";

    url = `${BASE_URL}/everything?q=${query}&apiKey=${API_KEY}`;

    const response = await axios.get(url);
    return { category, data: response.data.articles };
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: {
    headlines: [],
    indiaNews: [],
    sportsNews: [],
    technologyNews: [],
    bussinessNews: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        const { category, data } = action.payload;
        switch (category) {
          case "top-headlines":
            state.headlines = data;
            break;
          case "India":
            state.indiaNews = data;
            break;
          case "Sports":
            state.sportsNews = data;
            break;
          case "Technology":
            state.technologyNews = data;
            break;
            break;
          case "Bussiness":
            state.bussinessNews = data;
            break;
          default:
            break;
        }
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
