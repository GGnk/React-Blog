export const ADD_ARTICLE = 'ADD_ARTICLE'
export const EDIT_ARTICLE = 'EDIT_ARTICLE'
export const DELETE_ARTICLE = 'DELETE_ARTICLE'

export const LOGOUT_ADMIN = 'LOGOUT_ADMIN'
export const ROLE_ADMIN = 'ROLE_ADMIN'

export interface ArticleType {
    id: string;
    title: string;
    dateTime?: string| any;
    content: string;
    img?: string | any;
    author?: string | any;
    [key: string]: string;
};

export type ArticleState = ArticleType[]

export type Admin = {
    logout: boolean,
    admin: boolean
};

interface AddArticle {
  type: typeof ADD_ARTICLE
  payload: ArticleType
}

interface EditArticle {
  type: typeof EDIT_ARTICLE
  payload: {
    id: string
  }
}

interface DeleteArticle {
    type: typeof DELETE_ARTICLE
    payload: string
}

export type ArticleActionTypes = AddArticle | EditArticle | DeleteArticle


interface Logout {
    type: typeof LOGOUT_ADMIN
    payload: boolean
}
interface Role {
    type: typeof ROLE_ADMIN
    payload: boolean
}

export type AdminActionTypes = Logout | Role