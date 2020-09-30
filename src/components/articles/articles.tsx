import React from "react";
import { ArticleComponent } from './article';
import { useDispatch, useSelector } from "react-redux";
import './articles.scss';
import { selectArticleList } from "../../store/reducers/ArticleReducer";

export const Articles = () => {
    const data = useSelector(selectArticleList);
    const dispatch = useDispatch();

    const list = data.map((article) => {
        return <ArticleComponent key={article.id} article={article} />
    });
    return (
        <div className='articles'>
            {list}
        </div>
    );
};
