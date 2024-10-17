import { ChangeEvent, useCallback, useContext, useState } from "react"
import { Context } from "@/context/postContext";

const HeaderComponent = () =>{
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
            <div>
                <div>
                    <input 
                        type="text"
                        value={inputState}
                        onChange={keyboard => cbEventInput(keyboard)}
                    />
                </div>
                <div>
                    <textarea 
                        name="textArea" 
                        id="textArea"
                        value={textAreaState}
                        onChange={(keyboard) => cbEventTextArea(keyboard) }
                    >
                    </textarea>
                </div>
                <button className="hover:text-orange-300 hover:underline">Adicionar Post</button>
            </div>
        </header>
    )
}

export {HeaderComponent}