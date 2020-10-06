export type ArticleType = {
    id: string;
    title: string;
    dateTime: string;
    content: string;
    img?: string | any;
    author?: string | any;
    [key: string]: string;
};

export type ArticleState = {
    articles: ArticleType[],
    article: ArticleType
}

export type Admin = {
    logout: boolean,
    admin: boolean
};

