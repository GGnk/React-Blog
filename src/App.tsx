import React from "react";
import "./assets/scss/style.scss";
import { Route } from 'react-router-dom'
import {Header} from './components/header'
import { AdminBar } from "./components/adminBar";
import { Articles } from "./components/articles";

export const App = () => {
  return (
    <main>
        <Header/>
        <AdminBar/>
        <Route exact  path='/' component={ Articles }/>
    </main>
  );
};

