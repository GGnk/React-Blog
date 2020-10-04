import { AppThunk } from "../../index";
import { ArticleType } from "../../types"
import  { addArticle, removeArticle, updateArticle } from '.'
/**
 * Post new Event to database
 * @param Article new Article
 */
export const postArticle = (Article: ArticleType): AppThunk => async (dispatch) => {

    const newArticle: ArticleType = { ...Article };
  
    const response = await fetch(`$/link`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newArticle),
    });
  
    dispatch(addArticle(newArticle));
};