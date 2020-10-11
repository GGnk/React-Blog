import React from "react";
import {BiTrash, BiPencil, BiArrowToLeft} from "react-icons/bi";
import {connect, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import { ArticleState } from "../../../store/types";

//TODO: доделать кнопки
const Article = (props: any):any => {
    const { articles } = props;
    console.log('Article', props)
    const article = props.article || articles.find((item: { id: string; }) => item.id == props.match.params.id);
    return (
        <>
            <Button 
                id={article.id} 
                admin={true} 
                back={props.history.goBack}
            />
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
const Button = ({id, admin, back}:any) => {
    return (
        <div className='adminBar'>
            {admin ?
                <>
                    <button
                        className='btn btn-float-right icon'
                    >
                        <Link to={`/edit/${id}`}><BiPencil/></Link>

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

const mapStateToProps = (store: any) => ({
    articles: store.article
})
  
const mapDispatchToProps = (dispatch: any) => ({
    toggleOn: () => dispatch({ type: 'TOGGLE_IS_ON' })
});

export default connect(mapStateToProps, mapDispatchToProps)(Article)
