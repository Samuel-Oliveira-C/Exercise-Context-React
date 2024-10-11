import { createContext, ReactNode, useState } from "react"

type ContextState = {
    state:string,
    setState: (arg:string) => void
}
type ChildrenComponent ={children:ReactNode}

const Context = createContext<ContextState | null>(null);

const ComponentProvider = ({children}:ChildrenComponent) =>{
    const [state,setState] = useState("");
    
    return(
        <Context.Provider value={{state,setState}}>
            {children}
        </Context.Provider>
    )
}


export{ComponentProvider,Context}