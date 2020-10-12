import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {BiArrowToLeft} from "react-icons/bi";
import { ArticleType } from '../../../store/types';
import { add, del, edit } from '../../../store/reducers/ArticleReducer/actions';
import { RootState } from '../../../store';
import store from 'store';

const ArticleEdit = ({ match, articles, addArticle, editArticle, history}:any) => {
    const [mode] = useState<string>(match.params.id ? 'edit' : 'publish')
    const [article, setArticle] = useState(() => {
        const cacheArticle = store.get('article');
        console.log(cacheArticle)
        if(!match.params.id) {
            if(cacheArticle && (cacheArticle.title || cacheArticle.content) != '' && (mode != 'publish' || !cacheArticle.id) ) return cacheArticle
            return { title: '', content: ''}
        } else {
            const article = articles.find((article: any) => article.id === match.params.id)
            if(cacheArticle && article.id === cacheArticle.id) return cacheArticle
            return article
        }
    })

    useEffect(() => {
        store.set('article', article)
    }, [article]);
    
    return (
        <>
            <div className='adminBar'>
                {mode === 'publish' ?
                    <button
                        className='btn btn-float-right'
                        onClick={() => addArticle(article)}
                    >Опубликовать</button>
                :
                    <button
                        onClick={() => editArticle(article)}
                        className='btn btn-float-right'
                    >Сохранить</button>}
                <button
                    onClick={() => history.goBack()}
                    className='btn btn-float-right icon icon-left'
                >
                    <BiArrowToLeft/>
                </button>
            </div>
            <div className='articles-edit'>
                <input
                    className='articles-edit__input'
                    placeholder='Заголовок' type="text"
                    defaultValue={article.title}
                    onChange={(e) => setArticle({...article, title: e.target.value})}
                />

                <textarea
                    className='articles-edit__textarea'
                    placeholder='Основной текст .....'
                    defaultValue={article.content}
                    onChange={(e) => setArticle({...article, content: e.target.value})}
                    name="content">
                </textarea>
            </div>
        </>
    )
}

const mapStateToProps = (store: RootState) => ({
    articles: store.article,
})
  
const mapDispatchToProps = (dispatch: any) => ({
    addArticle: (article: ArticleType) => dispatch(add(article)),
    editArticle: (article: ArticleType) => dispatch(edit(article)),
    delArticle: (id: string) => dispatch(del(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEdit)
