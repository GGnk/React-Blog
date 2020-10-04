import React from "react";
import { BiTrash, BiPencil } from "react-icons/bi";
import {useSelector} from "react-redux";
import { selectAdminList } from "../../../store/reducers/AdminReducer";
import {Link} from "react-router-dom";
import { selectArticleList } from "../../../store/reducers/ArticleReducer";
import { AdminBar } from "../../adminBar";

export const Article = (props: any):any => {
    const store = useSelector(selectAdminList);
    const { articles } = useSelector(selectArticleList);
    const article = props.article || articles.find((item) => item.id == props.match.params.id);
    return (
        <>
            <AdminBar />
            <div className='article'>
                <div className={'article-wrap'}>
                    <div  className={'title'}>
                        <div className={'title-h1-button'}>
                            <h1> <Link to={`/article/${article.id}`}>{article.title}</Link></h1>
                            {store.admin ?
                                <span>
                                    <BiTrash style={{color: 'red'}}/>
                                    <BiPencil/>
                                </span>
                                : ''
                            }
                        </div>

                        <span>{article.dateTime}</span>
                    </div>
                    <img className={'img'} src='../img/noimage.jpg' alt="Нет картинки"/>
                    <div className={'content'}>
                        {article.content}
                    </div>
                </div>
            </div>
        </>
    );
};
