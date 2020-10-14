import React from "react";
import { connect } from "react-redux";
import { BiPencil, BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import AdminBar  from "../../components/adminBar";
import { ArticleType } from "../../../store/types";
import { del } from "../../../store/reducers/ArticleReducer/actions";

const Articles = ({ articles, admin, delArticle }: any) => {
    const data = articles().map((article:ArticleType) => {
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
            <div  className='header'>
                <div className='article__header__title'>
                    <h1> <Link to={`/article/${article.id}`}>{article.title}</Link></h1>
                    {admin ?
                        <span>
                            <button
                                onClick={() => delArticle(article.id)}
                                className='btn btn_float_right icon'
                            >
                                <BiTrash style={{color: 'red'}}/>
                            </button>
                            <button
                                className='btn btn_float_right icon'
                            >
                                <Link to={`/edit/${article.id}`}><BiPencil/></Link>
                            </button>
                        </span>
                        : ''
                    }
                </div>

                <span className='article__header__date'>{article.dateTime}</span>
            </div>
            <img className='img' src='./img/noimage.jpg' alt="Нет картинки"/>
            <div className='content'>
                {article.content}
            </div>
        </div>
    )
}


const mapStateToProps = (state: any) => ({
    articles: () => {
        const { article, find } = state;
        if(find.title !== '') return article.filter((article: ArticleType) => {
                          const lc = article.title.toLowerCase();
                          const filter = find.title.toLowerCase();
                          return lc.includes(filter);
                        });
        return article;
    },
    admin: state.admin.admin
});
  
const mapDispatchToProps = (dispatch: any) => ({
    delArticle: (id: string) => dispatch(del(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles)
