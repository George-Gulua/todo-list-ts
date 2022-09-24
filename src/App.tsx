import classes from './App.module.css';
import { BrowserRouter } from "react-router-dom";
import NavMenu from "./components/NavBar/NavMenu";
import AppRouter from "./components/AppRouter/AppRouter";
import { useState } from "react";
import { GlobalContext } from "./context/global";
import { Itodo } from "./types/types";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [todoList, setTodoList] = useState<Itodo[]>([])
    return (
        <GlobalContext.Provider value={{
            isAuth,
            setIsAuth,
            todoList,
            setTodoList
        }}>
            <BrowserRouter>
                <main className={ classes.app }>
                    <div className={ classes.container }>
                        <NavMenu/>
                        <AppRouter/>
                    </div>
                </main>
            </BrowserRouter>
        </GlobalContext.Provider>
    );
}

export default App;
