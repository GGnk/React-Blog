import { AppThunk } from "../..";
import { ArticleActionTypes, FIND_ARTICLE } from "../../types"

export const findArticle = (payload: {
  title?: string,
  dateTime?: string
}): ArticleActionTypes => {
  return {
    type: FIND_ARTICLE,
    payload: payload
  }
};

export const find = (payload: {
  title?: string,
  dateTime?: string
}): AppThunk => dispatch => {
  dispatch(findArticle(payload))
} 
