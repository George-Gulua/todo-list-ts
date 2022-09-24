import {createContext} from "react";
import {Itodo} from "../types/types";
interface GlobalContextData {
    isAuth: boolean;
    setIsAuth:(isAuth: boolean) => void;
    todoList: Itodo[];
    setTodoList:(todoList: Itodo[]) => void;
}
export const GlobalContext = createContext<GlobalContextData>({
    isAuth: true,
    setIsAuth: () => {},
    todoList: [],
    setTodoList: () => {}
})
