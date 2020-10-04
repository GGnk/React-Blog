import React from "react";
import {useSelector} from "react-redux";
import { selectArticleList } from "../../../store/reducers/ArticleReducer";
import { BiPencil, BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import { selectAdminList } from "../../../store/reducers/AdminReducer";
import { AdminBar } from "../../adminBar";

export const Articles = ():any => {
    const { articles } = useSelector(selectArticleList);
    const data = articles.map((article) => {
        return <List key={article.id} article={article} />
    });
    return <>
        <AdminBar />
        {data}
    </>
};

const List = ({article}: any): any => {
    const {admin} = useSelector(selectAdminList);

    return (
        <div className='article'>
            <div className={'article-wrap'}>
                <div  className={'title'}>
                    <div className={'title-h1-button'}>
                        <h1> <Link to={`/article/${article.id}`}>{article.title}</Link></h1>
                        {admin ?
                            <span>
                                <BiTrash style={{color: 'red'}}/>
                                <BiPencil/>
                            </span>
                            : ''
                        }
                    </div>

                    <span>{article.dateTime}</span>
                </div>
                <img className={'img'} src='./img/noimage.jpg' alt="Нет картинки"/>
                <div className={'content'}>
                    {article.content}
                </div>
            </div>
        </div>
    )
}