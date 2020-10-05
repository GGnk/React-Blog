import React from "react";
import {BiTrash, BiPencil, BiArrowToLeft} from "react-icons/bi";
import {useSelector} from "react-redux";
import { selectAdminList } from "../../../store/reducers/AdminReducer";
import { selectArticleList } from "../../../store/reducers/ArticleReducer";

export const Article = (props: any):any => {
    const store = useSelector(selectAdminList);
    const { articles } = useSelector(selectArticleList);
    const article = props.article || articles.find((item) => item.id == props.match.params.id);
    return (
        <>
            <Button admin={store.admin} back={props.history.goBack}/>
            <div className='article'>
                <div className={'article-wrap'}>
                    <div  className={'title'}>
                        <div className={'title-h1-button'}>
                            <h1> {article.title}</h1>
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
const Button = ({admin, back}:any) => {
    return (
        <div className='adminBar'>
            {admin ?
                <>
                    <button
                        className='btn btn-float-right icon'
                    >
                        <BiPencil/>
                    </button>
                    <button
                        className='btn btn-float-right icon'
                    >
                        <BiTrash style={{color: 'red'}}/>
                    </button>
                </>
                : ''}
            <button
                onClick={() => back()}
                className='btn btn-float-right icon icon-left'
            >
                <BiArrowToLeft/>
            </button>
        </div>)
};
