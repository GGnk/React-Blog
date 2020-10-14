import { Action, createStore, applyMiddleware  } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, {ThunkAction} from 'redux-thunk'
import { RootReducer } from './reducers';

export const store = createStore(RootReducer, composeWithDevTools(applyMiddleware (thunk)))

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;