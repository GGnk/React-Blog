export type ArticleType = {
    id: number;
    title: string;
    dateTime: string;
    content: string;
    img?: string;
    author?: string;
};
  
export type ArticleState = {
    articles: ArticleType[],
    article: ArticleType
}

export type Admin = {
    logout: boolean,
    admin: boolean
};

