import { createContext,useReducer } from "react";
import { ToDoreducer } from "../reducer/Todoreducer";


const ToDoContext = createContext();

export const ToDoContextProvider = ({children}) => {

    const [todo,dispatch] = useReducer(ToDoreducer,[])

    return(
        <ToDoContext.Provider value={{
            todo,
            dispatch
            
        }}>
            {children}
        </ToDoContext.Provider>
    );


}

export default ToDoContext;