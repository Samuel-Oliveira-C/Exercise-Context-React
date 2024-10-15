import { Context } from "@/context/postContext";
import { useContext } from "react";

const FooterComponent = () =>{
    const context = useContext(Context);

    
    return(
        <footer>
            <p>{context?.post? <p>Total de post: {context?.post.length} </p>: null}</p>
        </footer>
    );
}

export { FooterComponent };