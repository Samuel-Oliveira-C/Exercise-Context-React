import { useContext } from "react"
import { Context } from "@/context/postContext";

const HeaderComponent = () =>{
    const context = useContext(Context);

    return(
        <header className="flex flex-col">
            <h1>Titulo Da pagina</h1>
            <div>
                <div><input type="text" /></div>
                <div><textarea name="" id=""></textarea></div>
                <button>Adicionar Post</button>
            </div>
        </header>
    )
}