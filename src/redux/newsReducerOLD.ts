import { newsAPI } from "../api/api";
import { BaseThunkType, InferActionsType } from "./redux-storeOLD";

export type NewsType = {
  id: number;
  photo: string;
  title: string;
  description: string;
  date: string;
};

let initialState = {
  news: [] as NewsType[],
};

export type InitialStateType = typeof initialState;

const newsReducer = (state = initialState, action: ActionsTypes ): InitialStateType => {
  switch (action.type) {
    case "news/SET_NEWS": {
      return { ...state, news: action.news };
    }

    default:
      return state;
  }
};

//Action Creators

type ActionsTypes = InferActionsType<typeof actions>;

export const actions = {
  setNews: (news: NewsType[]) =>
    ({ type: "news/SET_NEWS", news } as const),
};

// Thunk

type ThunkType = BaseThunkType<ActionsTypes>;

export const getNewsAC = (): ThunkType => async (dispatch) => {
  let news = await newsAPI.getNews();
  
  dispatch(actions.setNews(news));
  // console.log(news)
};

export default newsReducer;
