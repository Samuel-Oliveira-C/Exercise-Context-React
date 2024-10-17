import { ChangeEvent, useCallback, useContext, useState } from "react"
import { Context } from "@/context/postContext";

const generateId = ():string => {
    const date = new Date();
    const returnGenerateId = `${Math.floor(Math.random() * 9001) + 1000} ${date.getMilliseconds()}` ;
    return returnGenerateId;
}

const HeaderComponent = () =>{
    //context
    const context = useContext(Context);
    //Input
    const [inputState,setState] = useState("");
    const cbEventInput = useCallback((e:ChangeEvent<HTMLInputElement>) => setState(() => e.target.value),[])
    //TextArea
    const [textAreaState,textareaSetState] = useState("")
    const cbEventTextArea = useCallback((e:ChangeEvent<HTMLTextAreaElement>) => textareaSetState(() => e.target.value),[])
    return(
        <header className="flex flex-col">
            <h1>Titulo Da pagina</h1>
            <div className="flex flex-col gap-2">
                <div>
                    <input 
                        className="text-black"
                        type="text"
                        value={inputState}
                        onChange={keyboard => cbEventInput(keyboard)}
                    />
                </div>
                <div>
                    <textarea 
                        className="text-black"
                        name="textArea" 
                        id="textArea"
                        value={textAreaState}
                        onChange={(keyboard) => cbEventTextArea(keyboard) }
                    >
                    </textarea>
                </div>
                <div>
                <button 
                    className="hover:text-orange-300 hover:underline"
                    onClick={() => context?.dispatch({type: "add",id:generateId(),title:inputState,body:textAreaState})}
                >
                    Adicionar Post</button>
                </div>
            </div>
        </header>
    )
}

export {HeaderComponent}

