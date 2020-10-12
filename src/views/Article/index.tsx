import React from "react";
import './articles.scss';
import { Route, Switch } from "react-router-dom";
import Article from './components/article';
import Articles  from "./components/articles";
import ArticleEdit from "./components/edit";

export const ArticleComponent = () => {
    return (
        <>
            <div className='articles'>
                <Switch>
                    <Route path='/article/:id' component={Article} />
                    <Route exact path='/edit' component={ArticleEdit} />
                    <Route path='/edit/:id' component={ArticleEdit} />
                    <Route path='*' component={Articles} />
                </Switch>
            </div>
        </>
    );
};
