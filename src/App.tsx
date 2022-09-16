import classes from './App.module.css';
import {BrowserRouter} from "react-router-dom";
import NavMenu from "./components/NavBar/NavMenu";
import AppRouter from "./components/AppRouter/AppRouter";
import {useEffect, useState} from "react";
import {AuthContext} from "./context/auth";

function App() {
    const [isAuth, setIsAuth] = useState(false);

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <main className={ classes.app }>
                    <div className={ classes.container }>
                        <NavMenu/>
                        <AppRouter/>
                    </div>
                </main>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
