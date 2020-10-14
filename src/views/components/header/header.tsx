import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../../store";
import { find } from "../../../store/reducers/FindReducer/actions";
import './header.scss';

const Header = ({ findArticle, valueFind }: any) => {
    return (
        <header>
            <input type="text" value={valueFind} onChange={({ target: { value } }) => findArticle({title: value})} placeholder='Поиск'/>
            <div className='logo'>
                <h1>Blog</h1>
            </div>
            <input type='date' />
        </header>
    );
}
const mapStateToProps = (state: RootState) => ({
    valueFind: state.find.title
})
  
const mapDispatchToProps = (dispatch: any) => ({
    findArticle: (payload: {
        title?: string,
        dateTime?: string
      }) => dispatch(find(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)
