import React from "react";
import "../assets/scss/style.scss";
import { Route } from 'react-router-dom'
import {Header} from './components/header'
import { ArticleComponent } from "./Article";

export const App: React.FC = () => {
  return (
    <main>
        <Header/>
        <Route path='/' component={ ArticleComponent }/>
    </main>
  );
};

