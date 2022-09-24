import React, {useContext, useState} from 'react';
import { Route, Routes} from "react-router-dom";
import TodosPage from "../Todo/TodosPage/TodosPage";
import LoginPage from "../LoginPage/LoginPage";
import { GlobalContext } from "../../context/global";

const AppRouter = () => {
    const {isAuth} = useContext(GlobalContext);
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
