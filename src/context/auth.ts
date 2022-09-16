import {createContext} from "react";
interface AuthContextData {
    isAuth: boolean;
    setIsAuth:(isAuth: boolean) => void;
}
export const AuthContext = createContext<AuthContextData>({
    isAuth: true,
    setIsAuth: () => {}
})