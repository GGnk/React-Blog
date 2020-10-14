import { ArticleReducer } from "../reducers/ArticleReducer";
import { AdminReducer } from "../reducers/AdminReducer";
import { combineReducers } from "redux";
import { FindReducer } from "./FindReducer";

export const RootReducer = combineReducers({
    article: ArticleReducer,
    admin: AdminReducer,
    find: FindReducer
});