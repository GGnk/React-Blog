import React from "react";
import './adminBar.scss';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import { addArticle } from "../../store/reducers/ArticleReducer/actions";
import { ArticleType } from "../../store/types";

// TODO: доделать кнопки
const AdminBar = ({ logout, admin }: any) => {

    const adminButton = !logout || admin ?
        <>
            <button className='btn btn-float-left'>
                <Link to={'/edit'}>Добавить статью</Link>
            </button>
            <button 
            // onClick={() => ()} 
            className='btn btn-float-right'>Выйти из редактирования</button>
        </> :
        <button
            // onClick={() => ()}
            className='btn btn-float-right'
        >Режим редактирования</button>;
    return (
        <div className='adminBar'>
            {adminButton}
        </div>
    );
}
const mapStateToProps = (store: any) => ({
    logout: store.admin.logout,
    admin: store.admin.admin 
})
  
const mapDispatchToProps = (dispatch: any) => ({
    addArticle: (article: ArticleType) => dispatch(addArticle(article))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminBar)