import {Action, AnyAction, applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import newsReducer from "./newsSlice";


let rootReducer = combineReducers({
    newsPage: newsReducer,
});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsType<T> = T extends {[keys: string]: (...args: any[])=> infer U} ? U : never

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

//мб какое-то дерьмо добавил!!!
export type AppDispatch = ThunkDispatch<AppStateType, any, AnyAction>; 

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));

// let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

export default store