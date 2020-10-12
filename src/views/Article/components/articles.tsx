import React from "react";
import { connect } from "react-redux";
import { BiPencil, BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import AdminBar  from "../../components/adminBar";
import { ArticleState, ArticleType } from "../../../store/types";
import { del } from "../../../store/reducers/ArticleReducer/actions";

const Articles = ({ articles, admin, delArticle }: any) => {
    console.log('Консоль статей', articles)
    const data = articles.map((article:ArticleType) => {
        return <List key={article.id} article={article} admin={ admin } delArticle={delArticle}/>
    });
    return <>
        <AdminBar />
        {data}
    </>
};

const List = ({article, delArticle, admin}: any): any => {
    return (
        <div className='article'>
            <div className={'article-wrap'}>
                <div  className={'title'}>
                    <div className={'title-h1-button'}>
                        <h1> <Link to={`/article/${article.id}`}>{article.title}</Link></h1>
                        {admin ?
                            <span>
                                <button
                                    onClick={() => delArticle(article.id)}
                                    className='btn btn-float-right icon'
                                >
                                    <BiTrash style={{color: 'red'}}/>
                                </button>
                                <button
                                    className='btn btn-float-right icon'
                                >
                                    <Link to={`/edit/${article.id}`}><BiPencil/></Link>
                                </button>
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


const mapStateToProps = (state: any) => ({
    articles: state.article,
    admin: state.admin.admin
});
  
const mapDispatchToProps = (dispatch: any) => ({
    delArticle: (id: string) => dispatch(del(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles)
