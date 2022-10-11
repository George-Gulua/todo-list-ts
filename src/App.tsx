import classes from './App.module.css';
import { BrowserRouter } from "react-router-dom";
import NavMenu from "./components/NavBar/NavMenu";
import AppRouter from "./components/AppRouter/AppRouter";
import { useState } from "react";
import { GlobalContext } from "./context/global";
import { ITodo } from "./types/ITodo";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

function App() {
    const [isAuth, setIsAuth] = useState(false)
    return (
        <GlobalContext.Provider value={{
            isAuth,
            setIsAuth,
        }}>
            <ErrorBoundary>
                <BrowserRouter>
                    <main className={ classes.app }>
                        <div className={ classes.container }>
                            <NavMenu />
                            <AppRouter />
                        </div>
                    </main>
                </BrowserRouter>
            </ErrorBoundary>
        </GlobalContext.Provider>
    )
}
export default App;
