import { AnyAction } from "redux";
import { constants } from "../actions";
import { ArticleState } from "../types";

export const ArticleReducer = (state: ArticleState = [], action: AnyAction) => {
  switch (action.type) {
    case constants.ADD_ARTICLE:
      const { payload } = action;
      return [...state, { ...payload }];
    default:
      return state;
  }
}