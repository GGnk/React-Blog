import React from 'react';
import { useDispatch } from 'react-redux';
import {BiArrowToLeft} from "react-icons/bi";

export const ArticleEdit = (props:any) => {
    console.log(props)
    const mode = props.match.params.id ? 'edit' : 'save';

    return (
        <>
            <Button mode={mode} back={props.history.goBack}/>
            <div className='articles-edit'>
                <input
                    className='articles-edit__input'
                    placeholder='Заголовок' type="text" />
                <textarea
                    className='articles-edit__textarea'
                    placeholder='Основной текст .....'
                    name="context">
                </textarea>
            </div>
        </>
    )
}
const Button = ({mode, back}:any) => {
    const dispatch = useDispatch();
    return (
    <div className='adminBar'>
        {mode === 'save' ?
            <button
                className='btn btn-float-right'
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
