import { Children, createContext, ReactNode, useReducer } from "react"

type ContextType= {
    post: [],
    dispatch: (title: string,body:string) => void
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
