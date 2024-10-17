
type ActionAddPost = {
    type: "add",
    id: string,
    title: string,
    body: string
};

type ActionRemovePost = {
    type: "remove",
    id:string
};

type Actions = ActionAddPost | ActionRemovePost;

type PropsState = {
    id: string,
    title: string,
    body: string
}

const reducerFunction = (state:PropsState[],action: Actions): PropsState[] => {

    switch (action.type) {
        case "add":
            return [...state,{
                    id:action.id,
                    title:action.title,
                    body:action.body
                }];
        case "remove":
            return state.filter(element => element.id !== action.id);
        default:
            return state;
    }

}

export {reducerFunction};
export type { Actions,PropsState }

