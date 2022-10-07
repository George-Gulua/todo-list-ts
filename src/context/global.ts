import { createContext } from "react";

interface GlobalContextData {
    isAuth: boolean;
    setIsAuth:(isAuth: boolean) => void;
}
export const GlobalContext = createContext<GlobalContextData>({
    isAuth: true,
    setIsAuth: () => {},
})
