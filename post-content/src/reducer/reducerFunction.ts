
type ActionAddPost = "add";

type ActionRemovePost = "remove";

type Actions = ActionAddPost | ActionRemovePost;

type PropsState = {
    id: string,
    title: string,
    body: string
}

const reducerFunction = (state:PropsState[],action: Actions): PropsState[] => {

    switch (action) {
        case "add":
        //Gerar um novo array
            return state;
        case "remove":
        //excluir e gerar um novo array
        return state;
        default:
            return state;
    }

}

export {reducerFunction};
export type { Actions,PropsState }