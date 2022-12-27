import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import newsReducer from './newsSlice'

const store = configureStore({
  reducer: {
    newsPage: newsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch

export default store