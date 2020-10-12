import { Action, createStore, applyMiddleware  } from "redux";
import logger from 'redux-logger'
import thunk, {ThunkAction} from 'redux-thunk'
import { RootReducer } from './reducers';

export const store = createStore(RootReducer, applyMiddleware (thunk, logger))

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;