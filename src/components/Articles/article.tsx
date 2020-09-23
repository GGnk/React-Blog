import React from "react";
import { Article } from "../../store/types";

export const ArticleComponent = (props: any) => {
    return (
        <div className='article'>
            id: {props.article.id}<br/>
            title: {props.article.title}<br/>
            dateTime: {props.article.dateTime}<br/>
            content: {props.article.content}<br/>
        </div>
    );
}
