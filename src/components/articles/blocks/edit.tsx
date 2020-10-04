import React from 'react';
import { useDispatch } from 'react-redux';
import { authAdmin } from '../../../store/reducers/AdminReducer/actions';
import { AdminBar } from '../../adminBar';

export const ArticleEdit = ({match}:any) => {
    console.log(match)
    const mode = match.params.id ? 'edit' : 'save';
    return (
        <>
            <Button mode={mode}/>
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
const Button = ({mode}:any) => {
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
    </div>)
}