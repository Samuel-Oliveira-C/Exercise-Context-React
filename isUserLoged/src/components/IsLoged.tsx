import { Context } from "@/contexts/contextUser";
import { ChangeEvent, useCallback, useContext, useState } from "react";

const SwitchUser = () =>{
        //variaveis
    const context = useContext(Context);
    const [state,setState] = useState("");
        //Call-backs
    const cbInput = useCallback((e: ChangeEvent<HTMLInputElement>) => setState(e.target.value),[]);
    const cbContext = useCallback(()=> context?.setState(state),[state])
    return(
        <>
            <p>Atual usuário: {context?.state} </p>
            <input 
                className="bg-emerald-300"
                type="text" 
                value={state}
                onChange={(key) => cbInput(key) }
            />
            <br />
            <button onClick={() => cbContext()}>Mudar usuario</button>
        </>
    )
}

export{SwitchUser}