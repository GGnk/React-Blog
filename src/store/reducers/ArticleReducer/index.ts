import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "../../../components/articles/blocks/article";
import { RootState } from "../../index";

import { ArticleState, ArticleType } from "../../types";

let initialState: ArticleState;
initialState = {
  articles: [
    {
      id: 1,
      title: '1 статья',
      dateTime: '22/09/2020',
      content: 'Lorem ipsum dolor sit amet, maiores ornare ac fermentum, imperdiet ut vivamus a, nam lectus at nunc. Quam euismod sem, semper ut potenti pellentesque quisque. In eget sapien sed, sit duis vestibulum ultricies, placerat morbi amet vel, nullam in in lorem vel. In molestie elit dui dictum, praesent ...'
    },
    {
      id: 2,
      title: '2 статья',
      dateTime: '22/09/2020',
      content: 'Lorem ipsum dolor sit amet, maiores ornare ac fermentum, imperdiet ut vivamus a, nam lectus at nunc. Quam euismod sem, semper ut potenti pellentesque quisque. In eget sapien sed, sit duis vestibulum ultricies, placerat morbi amet vel, nullam in in lorem vel. In molestie elit dui dictum, praesent ...'
    },
    {
      id: 3,
      title: '3 статья',
      dateTime: '22/09/2020',
      content: 'Lorem ipsum dolor sit amet, maiores ornare ac fermentum, imperdiet ut vivamus a, nam lectus at nunc. Quam euismod sem, semper ut potenti pellentesque quisque. In eget sapien sed, sit duis vestibulum ultricies, placerat morbi amet vel, nullam in in lorem vel. In molestie elit dui dictum, praesent ...'
    },
    {
      id: 4,
      title: '4 статья',
      dateTime: '22/09/2020',
      content: 'Lorem ipsum dolor sit amet, maiores ornare ac fermentum, imperdiet ut vivamus a, nam lectus at nunc. Quam euismod sem, semper ut potenti pellentesque quisque. In eget sapien sed, sit duis vestibulum ultricies, placerat morbi amet vel, nullam in in lorem vel. In molestie elit dui dictum, praesent ...'
    }
  ],
  article: <ArticleType>{},
};
// TODO: Доделать
export const ArticleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setArticle: (state, action: PayloadAction<{ key: string, value: string}>):void => {
      const { article } = state;
      const { payload } = action;
      article[payload.key] = payload.value;
    },
    /**
     * Add Article at state
     */
    addArticle: (state, action: PayloadAction<ArticleType>):any => {
      const { articles } = state;
      return [...articles, action.payload];
    },
    /**
     * Remove Article from state
     */
    removeArticle: (
      state: ArticleState,
      action: PayloadAction<Number>
    ): any => {
      const { articles } = state;
      return articles.filter((article) => article.id != action.payload);
    },
    /**
     * Update Article in state
     */
    updateArticle: (state: ArticleState, action: PayloadAction<ArticleType>): any => {
      const { articles } = state;
      return articles.map((article) => {
        const { payload } = action;
        if (article.id !== payload.id) return article;

        return {
          ...article,
          ...payload,
        };
      });
    },
  },
});

export const { addArticle, removeArticle, updateArticle } = ArticleSlice.actions;
export const selectArticleList = (state: RootState) => state.article;
export default ArticleSlice.reducer;

