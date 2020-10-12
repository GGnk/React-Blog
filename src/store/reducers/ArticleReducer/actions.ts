import { AppThunk } from "../..";
import { ArticleType, ADD_ARTICLE, DELETE_ARTICLE, EDIT_ARTICLE } from "../../types"

export const addArticle = (payload: ArticleType) => {
  return {
    type: ADD_ARTICLE,
    payload: payload
  }
};
export const editArticle = (payload: object) => {
  return {
    type: EDIT_ARTICLE,
    payload: payload
  }
};
export const deleteArticle = (payload: string) => {
  return {
    type: DELETE_ARTICLE,
    payload: payload
  }
};
export const add = (article: ArticleType): AppThunk => dispatch => {
  dispatch(addArticle(article))
} 
export const edit = (article: ArticleType): AppThunk => dispatch => {
  dispatch(editArticle(article))
} 
export const del = (id: string): AppThunk => dispatch => {
  dispatch(deleteArticle(id))
} 