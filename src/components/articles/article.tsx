import React from "react";
import { Article } from "../../store/types";
import { BiTrash, BiPencil } from "react-icons/bi";
import {useSelector} from "react-redux";
import { selectAdminList } from "../../store/reducers/AdminReducer";
import { selectArticleList } from "../../store/reducers/ArticleReducer";

export const ArticleComponent = (props: any) => {
    const store = useSelector(selectAdminList);
    const data = useSelector(selectArticleList);
    const article = props.article || data.find((article) => article.id == props.match.params.id);
    return (

        <div className='article'>
            <div className={'article-wrap'}>
                <div  className={'title'}>
                    <div className={'title-h1-button'}>
                        <h1>{article.title}</h1>
                        {store.admin ?
                            <span>
                                <BiTrash style={{color: 'red'}}/>
                                <BiPencil/>
                            </span>
                            : ''
                        }
                    </div>

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
