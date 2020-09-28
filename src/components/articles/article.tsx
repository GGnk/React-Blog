import React from "react";
import { Article } from "../../store/types";

export const ArticleComponent = (props: any) => {
    return (
        <div className='article'>
            <div className={'article-wrap'}>
                <div  className={'title'}>
                    <h1>{props.article.title} ({props.article.id})</h1>
                    <span>{props.article.dateTime}</span>
                </div>
                <img className={'img'} src="img/noimage.jpg" alt="Нет картинки"/>
                <div className={'content'}>
                    {props.article.content}
                </div>
            </div>
        </div>
    );
};
