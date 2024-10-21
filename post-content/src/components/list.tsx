import { Context } from "@/context/postContext"
import { useCallback, useContext } from "react"

const ListRender = () => {
    const context = useContext(Context);
    const cbContext = useCallback((elementID:string) => context?.dispatch({type:"remove", id: elementID}) , [])
    return(
        <section className="w-5/12">
            {context?.post.map(element => 
                <div className="flex flex-col gap-5"  key={element.id}>
                    <h1> title: {element.title}</h1>
                    <p>body:{element.body}</p>
                    <button onClick={() => cbContext(element.id)}>Excluir Post</button>
                    <hr />
                </div>
            )}
        </section>
    )
}

export {ListRender}

//TODO o Projeto é para guardar post e adicionar

/** Fazer os teste
 * saber porque não funcionou o usecallback no header.tsx
 *  possivel resposta: como é uma prop quem tem que usar o usecallback é o postContext não o header.tsx
 */