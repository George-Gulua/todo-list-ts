import React, {useContext, useState} from 'react';
import { Route, Routes} from "react-router-dom";
import TodosPage from "../TodosPage/TodosPage";
import LoginPage from "../LoginPage/LoginPage";
import {AuthContext} from "../../context/auth";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);
    return (
        isAuth
            ?
            <Routes>
                <Route path = "*" element={<TodosPage />}/>
                <Route path = "/todos" element={<TodosPage />}/>
            </Routes>
            :
            <Routes>
                <Route path = "*" element={<LoginPage />}/>
                <Route path = "/login" element={<LoginPage />}/>
            </Routes>
    );
};

export default AppRouter;