import { reducerFunction, Actions, PropsState } from "@/reducer/reducerFunction";


describe("Essa função deve receber um array de objetos e deve fazer o actions dela corretamente", () => {
    // Estado inicial mock para os testes
    const initialState: PropsState[] = [
        {
            id: "teste1",
            title: "testando o title",
            body: "testando o body"
        }
    ];

    test("Deve Retornar o state quando os parametros são invalidos", () => {
        const invalidAction = { type: "invalid",id:123,title:true,body:null };
        // @ts-ignore
        const result = reducerFunction(initialState, invalidAction);
        
        // Deve retornar o estado inicial sem modificações
        expect(result).toEqual(initialState);
    });

    test("Verificar se o case de 'add' está funcionando", () => {
        const newPost: Actions = {
            type: "add",
            id: "teste2",
            title: "novo post",
            body: "corpo do novo post"
        };

        const result = reducerFunction(initialState, newPost);

        // Verifica se o novo post foi adicionado
        expect(result).toHaveLength(2);
        expect(result).toEqual([
            ...initialState,
            {
                id: "teste2",
                title: "novo post",
                body: "corpo do novo post"
            }
        ]);
    });

    test("Verificar se o case de 'remove' está funcionando", () => {
        const removeAction: Actions = {
            type: "remove",
            id: "teste1"
        };

        const result = reducerFunction(initialState, removeAction);

        // Verifica se o post foi removido
        expect(result).toHaveLength(0);
        expect(result).toEqual([]);
    });

    test("Verificar se o remove não faz nada quando ID não existe", () => {
        const removeAction: Actions = {
            type: "remove",
            id: "id_inexistente"
        };

        const result = reducerFunction(initialState, removeAction);

        // Deve manter o estado inalterado
        expect(result).toEqual(initialState);
        expect(result).toHaveLength(1);
    });
});