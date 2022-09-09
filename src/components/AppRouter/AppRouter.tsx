import React from 'react';
import {Route, Routes} from "react-router-dom";
import TodosPage from "../TodosPage/TodosPage";
import LoginPage from "../LoginPage/LoginPage";
import classes from './AppRouter.module.css'

const AppRouter = () => {
    const isAuth = false;

    return (
        isAuth
            ?
            <Routes>
                <Route path = "/todos" element={<TodosPage />}/>
                <Route path = "/login" element={<LoginPage />}/>
            </Routes>
            :
            <Routes>
                <Route path = "/todos" element={<TodosPage />}/>
                <Route path = "/login" element={<LoginPage />}/>
            </Routes>
    );
};

export default AppRouter;