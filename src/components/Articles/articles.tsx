import React from "react";
import { ArticleComponent } from "./article";
import './articles.scss';

export const Articles = () => {
    const article = {
        id: 1,
        title: 'Первая статья',
        dateTime: '22/09/2020',
        content: 'Тут огромный текст статьи'
    }
    return (
        <div className='articles'>
            <ArticleComponent article={article} />
        </div>
    );
}
