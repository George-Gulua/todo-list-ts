import React, {useContext, useState} from 'react';
import { Route, Routes} from "react-router-dom";
import TodosPage from "../TodosPage/TodosPage";
import LoginPage from "../LoginPage/LoginPage";
import {AuthContext} from "../../context/auth";

const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    return (
        isAuth
            ?
            <Routes>
                <Route path = "/todos" element={<TodosPage />}/>
                <Route path = "*" element={<TodosPage />}/>
            </Routes>
            :
            <Routes>
                <Route path = "/login" element={<LoginPage />}/>
                <Route path = "*" element={<LoginPage />}/>
            </Routes>
    );
};

export default AppRouter;