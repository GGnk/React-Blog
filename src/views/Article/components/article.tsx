import React from "react";
import {BiTrash, BiPencil, BiArrowToLeft} from "react-icons/bi";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import { del } from "../../../store/reducers/ArticleReducer/actions";

const Article = ({ articles, article, admin, match, history, delArticle } : any):any => {
    const isArticle = article || articles.find((item: { id: string; }) => item.id == match.params.id);
    return (
        <>
            <div className='adminBar'>
                {admin ?
                    <>
                        <button
                            className='btn btn-float-right icon'
                        >
                            <Link to={`/edit/${isArticle.id}`}><BiPencil/></Link>

                        </button>
                        <button
                            onClick={() => delArticle(isArticle.id)}
                            className='btn btn-float-right icon'
                        >
                            <BiTrash style={{color: 'red'}}/>
                        </button>
                    </>
                    : ''}
                <button
                    onClick={() => history.goBack()}
                    className='btn btn-float-right icon icon-left'
                >
                    <BiArrowToLeft/>
                </button>
            </div>
            <div className='article'>
                <div className={'article-wrap'}>
                    <div  className={'title'}>
                        <div className={'title-h1-button'}>
                            <h1> {isArticle.title}</h1>
                        </div>

                        <span>{isArticle.dateTime}</span>
                    </div>
                    <img className={'img'} src='../img/noimage.jpg' alt="Нет картинки"/>
                    <div className={'content'}>
                        {isArticle.content}
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (store: any) => ({
    articles: store.article,
    admin: store.admin.admin
})
  
const mapDispatchToProps = (dispatch: any) => ({
    delArticle: (id: string) => dispatch(del(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Article)