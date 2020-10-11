import { guid } from '../../../utils'

import { ADD_ARTICLE, ArticleActionTypes, 
  ArticleState, DELETE_ARTICLE, 
  EDIT_ARTICLE } from "../../types";

export const initialState: ArticleState = [
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
];

export function ArticleReducer(
  state = initialState,
  action: ArticleActionTypes
) {
  switch (action.type) {
    case ADD_ARTICLE:
      const art = action.payload;
      art.id = guid();
      const dateArticle = new Date();
      art.dateTime = dateArticle.getDate() + "/" + (dateArticle.getMonth() + 1) + "/" + dateArticle.getFullYear();
      return [...state, art];
    case EDIT_ARTICLE:
      return state.map((article) => {
        const { payload } = action;
        if (article.id !== payload.id) return article;
    
        return {
          ...article,
          ...payload,
        };
      });
    case DELETE_ARTICLE:
      const articles = state;
      return articles.filter((article) => article.id !== action.payload.id);
    default:
      return state
  }
}

// setArticle: (state, action: PayloadAction<{ key: string, value: string}>):void => {
//   const { article } = state;
//   const { payload } = action;
//   article[payload.key] = payload.value;
// },