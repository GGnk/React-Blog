import { ThunkAction } from 'redux-thunk'
import { Action, createStore } from "redux";
import { RootReducer } from './reducers';

export const store = createStore(RootReducer)

// export type RootState = ReturnType<typeof RootReducer>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;