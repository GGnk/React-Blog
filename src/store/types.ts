export type Article = {
    id: string;
    title: string;
    dateTime: string;
    description: string;
    img?: string;
    author?: string;
};
  
export type ArticleState = Article[];