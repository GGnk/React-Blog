import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "../../../components/articles/blocks/article";
import { RootState } from "../../index";

import { ArticleState, ArticleType } from "../../types";

let initialState: ArticleState;
const dateArticle = new Date();
function guid():string {
  function s4():string {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
}

initialState = {
  articles: [
    {
      id: '069badb9-73cd-fd0d-1ddf-a53d57d4fea5',
      title: "1 статья",
      dateTime: '22/09/2020',
      content: 'Lorem ipsum dolor sit amet, maiores ornare ac fermentum, imperdiet ut vivamus a, nam lectus at nunc. Quam euismod sem, semper ut potenti pellentesque quisque. In eget sapien sed, sit duis vestibulum ultricies, placerat morbi amet vel, nullam in in lorem vel. In molestie elit dui dictum, praesent ...',
      author: 'admin'
    },
    {
      id: '01261be8-1787-2ddd-55c7-4850c3e26f4b',
      title: "2 статья",
      dateTime: '22/09/2020',
      content: 'Lorem ipsum dolor sit amet, maiores ornare ac fermentum, imperdiet ut vivamus a, nam lectus at nunc. Quam euismod sem, semper ut potenti pellentesque quisque. In eget sapien sed, sit duis vestibulum ultricies, placerat morbi amet vel, nullam in in lorem vel. In molestie elit dui dictum, praesent ...',
      author: 'admin'
    },
    {
      id: '4b09b9b8-7069-98df-9bb8-cd3ea28e0204',
      title: "3 статья",
      dateTime: '22/09/2020',
      content: 'Lorem ipsum dolor sit amet, maiores ornare ac fermentum, imperdiet ut vivamus a, nam lectus at nunc. Quam euismod sem, semper ut potenti pellentesque quisque. In eget sapien sed, sit duis vestibulum ultricies, placerat morbi amet vel, nullam in in lorem vel. In molestie elit dui dictum, praesent ...',
      author: 'admin'
    },
    {
      id: '97d69812-90f5-f41e-116c-67b60cd8f4bb',
      title: "4 статья",
      dateTime: '22/09/2020',
      content: 'Lorem ipsum dolor sit amet, maiores ornare ac fermentum, imperdiet ut vivamus a, nam lectus at nunc. Quam euismod sem, semper ut potenti pellentesque quisque. In eget sapien sed, sit duis vestibulum ultricies, placerat morbi amet vel, nullam in in lorem vel. In molestie elit dui dictum, praesent ...',
      author: 'admin'
    },
  ],
  article: <ArticleType>{
    id: '',
    title: '',
    dateTime: dateArticle.getDate() + "/" + (dateArticle.getMonth() + 1) + "/" + dateArticle.getFullYear(),
    content: '',
    img: '',
  },
};
const emptyArticle = {
      id: '',
      title: '',
      dateTime: dateArticle.getDate() + "/" + (dateArticle.getMonth() + 1) + "/" + dateArticle.getFullYear(),
      content: '',
      img: '',
    };
const toObject = <K extends string, V, T extends { [P in K]: V }>(keyValuePair: { key: K, value: V }): T => {
  const obj: any = {}
  obj[keyValuePair.key] = keyValuePair.value
  return obj as T
};
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
    addArticle: (state) => {
      let { articles, article } = state;
      article.id = guid();
      console.log('Я вроде работаю')
      articles.splice(0, 0, article);
    },
    /**
     * Remove Article from state
     */
    removeArticle: (
      state: ArticleState,
      action: PayloadAction<String>
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

export const { setArticle, addArticle, removeArticle, updateArticle } = ArticleSlice.actions;
export const selectArticleList = (state: RootState) => state.article;
export default ArticleSlice.reducer;

