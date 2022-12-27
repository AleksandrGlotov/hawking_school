import { RootState } from './store';
import { createSelector } from 'reselect'

export const selectNews = (state: RootState) => {
  return state.newsPage.news;
};

export const selectFilter = (state: RootState) => {
  return state.newsPage.filter;
};

export const selectFilterNews = createSelector(
  (state: RootState) => state.newsPage.news,
  (state: RootState) => state.newsPage.filter,
  (news, filter) => news.filter((n) => n.description.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
)

// export const selectFilterNews = (state: RootState) => {
//   return state.newsPage.news.filter(n => {
//     n.description.includes(state.newsPage.filter)
//   });
// };
