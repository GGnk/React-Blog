import { ArticleReducer } from "../reducers/ArticleReducer";
import { AdminReducer } from "../reducers/AdminReducer";
import { combineReducers } from "redux";

export const RootReducer = combineReducers({
    article: ArticleReducer,
    admin: AdminReducer
});