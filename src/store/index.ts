import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import ArticleReducer from "./reducers/ArticleReducer";
import AdminReducer from "./reducers/AdminReducer";

export const store = configureStore({
  reducer: {
    article: ArticleReducer,
    admin: AdminReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;