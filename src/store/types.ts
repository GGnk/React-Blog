export type Article = {
    id: string;
    title: string;
    dateTime: string;
    content: string;
    img?: string;
    author?: string;
};
  
export type ArticleState = Article[];