import React from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {BiArrowToLeft} from "react-icons/bi";
import { ArticleType } from '../../../store/types';
import { addArticle } from '../../../store/reducers/ArticleReducer/actions';

const ArticleEdit = (props:any) => {
    console.log(props)
    const mode = props.match.params.id ? 'edit' : 'publish';

    const { article } = props;

    return (
        <>
            <Button 
                mode={mode} 
                addArticle={addArticle} 
                article={article} 
                back={props.history.goBack}
            />
            <div className='articles-edit'>
                <input
                    className='articles-edit__input'
                    placeholder='Заголовок' type="text"
                    onChange={(value) => article.title = value }
                />

                <textarea
                    className='articles-edit__textarea'
                    placeholder='Основной текст .....'
                    onChange={(value) => article.content = value }
                    name="content">
                </textarea>
            </div>
        </>
    )
}
const Button = ({mode, back, addArticle, article}:any) => {

    return (
    <div className='adminBar'>
        {mode === 'publish' ?
            <button
                className='btn btn-float-right'
                onClick={() => addArticle(article)}
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

const mapStateToProps = (store: any) => ({
    articles: store.article,
    article: {
        title: '',
        content: '',
    },
})
  
const mapDispatchToProps = (dispatch: any) => ({
    addArticle: (article: ArticleType) => dispatch(addArticle(article))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEdit)
