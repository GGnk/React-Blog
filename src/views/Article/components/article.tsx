import React, { useEffect } from "react";
import {BiTrash, BiPencil, BiArrowToLeft} from "react-icons/bi";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import { Adminlogin } from "../../../store/reducers/AdminReducer/actions";
import { del } from "../../../store/reducers/ArticleReducer/actions";
import store from 'store';

const Article = ({ articles, article, admin, match, history, delArticle, loginAction, logout } : any):any => {
    const isArticle = article || articles.find((item: { id: string; }) => item.id == match.params.id);
    const cacheAdmin = store.get('admin');
    const cacheLogout = store.get('logout');

    useEffect(() => {
        loginAction(!cacheLogout && cacheAdmin)
    }, []);

    useEffect(() => {
        store.set('admin', admin)
        store.set('logout', logout)
    }, [admin, logout]);
    return (
        <>
            <div className='adminBar'>
                {admin ?
                    <>
                        <button
                            className='btn btn_float_right icon'
                        >
                            <Link to={`/edit/${isArticle.id}`}><BiPencil/></Link>

                        </button>
                        <button
                            onClick={() => delArticle(isArticle.id)}
                            className='btn btn_float_right icon'
                        >
                            <BiTrash style={{color: 'red'}}/>
                        </button>
                    </>
                    : ''}
                <button
                    onClick={() => history.goBack()}
                    className='btn btn_float_right icon icon-left'
                >
                    <BiArrowToLeft/>
                </button>
            </div>
            <div className='article'>
                <div  className='header'>
                    <div className='article__header__title'>
                        <h1> {isArticle.title}</h1>
                    </div>

                    <span>{isArticle.dateTime}</span>
                </div>
                <img className={'img'} src='../img/noimage.jpg' alt="Нет картинки"/>
                <div className={'content'}>
                    {isArticle.content}
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (store: any) => ({
    articles: store.article,
    admin: store.admin.admin,
    logout: store.admin.logout
})
  
const mapDispatchToProps = (dispatch: any) => ({
    delArticle: (id: string) => dispatch(del(id)),
    loginAction: (login: boolean) => dispatch(Adminlogin(login)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Article)
