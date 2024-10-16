import { Context } from "@/context/postContext";
import { useContext } from "react";

const FooterComponent = () =>{
    const context = useContext(Context);

    
    return(
        <footer>
            {context && <p>{context.post? `Total de post: ${context.post.length}`: `Total de post: 0` }</p> }
        </footer>
    );
}

export { FooterComponent };