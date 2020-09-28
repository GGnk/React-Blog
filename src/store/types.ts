export type Article = {
    id: number;
    title: string;
    dateTime: string;
    content: string;
    img?: string;
    author?: string;
};
  
export type ArticleState = Article[];

export type Admin = {
    logout: boolean,
    admin: boolean
};

