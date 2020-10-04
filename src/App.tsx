import React from "react";
import "./assets/scss/style.scss";
import { Route } from 'react-router-dom'
import {Header} from './components/header'
import { ArticleComponent } from "./components/articles";

export const App = (props:any) => {
  return (
    <main>
        <Header/>
        <Route path='/' component={ ArticleComponent }/>
    </main>
  );
};

