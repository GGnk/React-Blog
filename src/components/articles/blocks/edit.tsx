import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {BiArrowToLeft} from "react-icons/bi";
import {selectArticleList} from "../../../store/reducers/ArticleReducer";
import { setArticle, addArticle } from "../../../store/reducers/ArticleReducer";

export const ArticleEdit = (props:any) => {
    console.log(props)
    const mode = props.match.params.id ? 'edit' : 'publish';

    const { article } = useSelector(selectArticleList);


    const dispatch = useDispatch();

    return (
        <>
            <Button mode={mode} back={props.history.goBack}/>
            <div className='articles-edit'>
                <input
                    className='articles-edit__input'
                    placeholder='Заголовок' type="text"
                    value={article.title}
                    onChange={(e) => dispatch(setArticle({ key: 'title', value: e.target.value}))}
                />

                <textarea
                    className='articles-edit__textarea'
                    placeholder='Основной текст .....'
                    value={article.content}
                    onChange={(e) => dispatch(setArticle({ key: 'content', value: e.target.value}))}
                    name="content">
                </textarea>
            </div>
        </>
    )
}
const Button = ({mode, back}:any) => {
    const dispatch = useDispatch();

    return (
    <div className='adminBar'>
        {mode === 'publish' ?
            <button
                className='btn btn-float-right'
                onClick={() => dispatch(addArticle())}
            >Опубликовать</button>
        :
            <button
                className='btn btn-float-right'
            >Сохранить</button>}
        <button
            onClick={() => back()}
            className='btn btn-float-right icon icon-left'
        >
            <BiArrowToLeft/>
        </button>
    </div>)
};
//
// const mapStateToProps = {
//     article:
// }
