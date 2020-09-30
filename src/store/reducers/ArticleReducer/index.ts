import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../index";

import { ArticleState, Article } from "../../types";

const initialState: ArticleState = [
  {
      id: 1,
      title: 'Первая статья',
      dateTime: '22/09/2020',
      content: 'Lorem ipsum dolor sit amet, maiores ornare ac fermentum, imperdiet ut vivamus a, nam lectus at nunc. Quam euismod sem, semper ut potenti pellentesque quisque. In eget sapien sed, sit duis vestibulum ultricies, placerat morbi amet vel, nullam in in lorem vel. In molestie elit dui dictum, praesent ...'
  },
  {
      id: 2,
      title: 'Первая статья',
      dateTime: '22/09/2020',
      content: 'Lorem ipsum dolor sit amet, maiores ornare ac fermentum, imperdiet ut vivamus a, nam lectus at nunc. Quam euismod sem, semper ut potenti pellentesque quisque. In eget sapien sed, sit duis vestibulum ultricies, placerat morbi amet vel, nullam in in lorem vel. In molestie elit dui dictum, praesent ...'
  },
  {
      id: 3,
      title: 'Первая статья',
      dateTime: '22/09/2020',
      content: 'Lorem ipsum dolor sit amet, maiores ornare ac fermentum, imperdiet ut vivamus a, nam lectus at nunc. Quam euismod sem, semper ut potenti pellentesque quisque. In eget sapien sed, sit duis vestibulum ultricies, placerat morbi amet vel, nullam in in lorem vel. In molestie elit dui dictum, praesent ...'
  },
  {
      id: 4,
      title: 'Первая статья',
      dateTime: '22/09/2020',
      content: 'Lorem ipsum dolor sit amet, maiores ornare ac fermentum, imperdiet ut vivamus a, nam lectus at nunc. Quam euismod sem, semper ut potenti pellentesque quisque. In eget sapien sed, sit duis vestibulum ultricies, placerat morbi amet vel, nullam in in lorem vel. In molestie elit dui dictum, praesent ...'
  }
];

export const ArticleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    /**
     * Add Article at state
     */
    addArticle: (state: ArticleState, action: PayloadAction<Article>): ArticleState => {
      return [...state, action.payload];
    },
    /**
     * Remove Article from state
     */
    removeArticle: (
      state: ArticleState,
      action: PayloadAction<Number>
    ): ArticleState => {
      return state.filter((article) => article.id != action.payload);
    },
    /**
     * Update Article in state
     */
    updateArticle: (state: ArticleState, action: PayloadAction<Article>): ArticleState => {
      return state.map((article) => {
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
