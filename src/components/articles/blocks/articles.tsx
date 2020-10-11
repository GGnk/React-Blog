import React from "react";
import { connect } from "react-redux";
import { BiPencil, BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import AdminBar  from "../../adminBar";
import { ArticleState, ArticleType } from "../../../store/types";

const Articles = ({ articles, admin }: any) => {
    console.log('Консоль статей', articles)
    const data = articles.map((article:ArticleType) => {
        return <List key={article.id} article={article} admin={ admin }/>
    });
    return <>
        <AdminBar />
        {data}
    </>
};

const List = ({article, admin}: any): any => {
    return (
        <div className='article'>
            <div className={'article-wrap'}>
                <div  className={'title'}>
                    <div className={'title-h1-button'}>
                        <h1> <Link to={`/article/${article.id}`}>{article.title}</Link></h1>
                        {admin ?
                            <span>
                                <BiTrash style={{color: 'red'}}/>
                                <Link to={`/edit/${article.id}`}><BiPencil/></Link>
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
    toggleOn: () => dispatch({ type: 'TOGGLE_IS_ON' })
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles)
