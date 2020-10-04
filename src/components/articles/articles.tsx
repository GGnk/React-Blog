import React from "react";
import { ArticleComponent } from './article';
import { useDispatch, useSelector } from "react-redux";
import './articles.scss';
import { selectArticleList } from "../../store/reducers/ArticleReducer";
import { Route, Switch } from "react-router-dom";

export const Articles = ({ match }: any) => {
    console.log(match)
    const data = useSelector(selectArticleList);
    const dispatch = useDispatch();

    const list = data.map((article) => {
        return <ArticleComponent key={article.id} article={article} />
    });

    return (
        <div className='articles'>
            <Switch>
                <Route path='/' render={() => list}/>
                <Route path='article' render={() => list}/>
                <Route path='article/:id' component={ArticleComponent}/>
            </Switch>
        </div>
    );
};
