import { ArticleType, ADD_ARTICLE, DELETE_ARTICLE, EDIT_ARTICLE } from "../../types"

export const addArticle = (Article: ArticleType) => {
  return {
    type: ADD_ARTICLE,
    payload: Article
  }
};
export const editArticle = (payload: object) => {
  return {
    type: EDIT_ARTICLE,
    payload: payload
  }
};
export const deleteArticle = (payload: object) => {
  return {
    type: DELETE_ARTICLE,
    payload: payload
  }
};
