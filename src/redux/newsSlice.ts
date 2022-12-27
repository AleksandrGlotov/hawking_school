import { AppDispatch } from "./store";
import { createSlice } from "@reduxjs/toolkit";
import { newsAPI } from "../api/api";

export interface NewsType {
  id: number;
  photo: string;
  title: string;
  description: string;
  date: string;
}

export interface NewsState {
  news: NewsType[];
  filter: string;
}

let initialState: NewsState = {
  news: [],
  filter: "",
};

export const newsSlice = createSlice({
  name: "newsPage",
  initialState,
  reducers: {
    setNews: (state, action) => {
      state.news = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    }
  },
});


export const getNewsAC = () => async (dispatch: AppDispatch) => {
  let news = await newsAPI.getNews();

  dispatch(setNews(news));
};

export const { setNews, setFilter } = newsSlice.actions;

export default newsSlice.reducer;
