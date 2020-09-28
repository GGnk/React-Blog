import { AppThunk } from "../../index";
import { Article } from "../../types"
import  { addArticle, removeArticle, updateArticle } from '.'
/**
 * Post new Event to database
 * @param Article new Article
 */
export const postArticle = (Article: Article): AppThunk => async (dispatch) => {

    const newArticle: Article = { ...Article };
  
    const response = await fetch(`$/link`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newArticle),
    });
  
    dispatch(addArticle(newArticle));
};