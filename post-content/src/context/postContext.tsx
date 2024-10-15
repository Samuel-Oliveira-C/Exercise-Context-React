import { Children, createContext, Dispatch, ReactNode, useReducer } from "react"
import { reducerFunction, Actions , PropsState } from "@/reducer/reducerFunction"

type ContextType= {
    post: PropsState[],
    dispatch: Dispatch<Actions>
}
type ChildrenComponent= {
    children: ReactNode
}

const Context = createContext<ContextType | null>(null);

const ProviderComponent = ({children}:ChildrenComponent) => {
    const [post,dispatch] = useReducer(reducerFunction,[]);  

    return(
        <Context.Provider value={{post,dispatch}}>
            {children}
        </Context.Provider>
    );
}

export { Context,ProviderComponent }

