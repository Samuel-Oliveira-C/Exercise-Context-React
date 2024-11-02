import { ContextType,Context } from "@/context/postContext";
import { PropsState } from "@/reducer/reducerFunction";
import { render, screen, fireEvent } from '@testing-library/react';
import { ListRender } from "@/components/list";

//Esse componente renderiza um Context.

//Mock para o context tendo o type ContextType | null
//deve aparecer no documento o "title" e "body", confirmando que foi criado o post com sucesso
// em caso de nenhum post criado, não deve aparecer o "title" e "body".

const createMockContext = (posts: PropsState[] | null): ContextType => 
    ({  // @ts-ignore
        post: posts,
        dispatch: jest.fn()
    });

describe("ListRender component",() => {
    it("Deve renderizar os post",() => {
        const mockPost = [
            { id: "1", title: 'Post 1', body: 'Conteúdo 1' },
            { id: "2", title: 'Post 2', body: 'Conteúdo 2' }            
        ]
        const mockContext = createMockContext(mockPost);

        render(
            <Context.Provider value={mockContext}>
                <ListRender />
            </Context.Provider>
        );
        expect(screen.getByText('title: Post 1')).toBeInTheDocument();
        expect(screen.getByText('body:Conteúdo 1')).toBeInTheDocument();
        expect(screen.getByText('title: Post 2')).toBeInTheDocument();
        expect(screen.getByText('body:Conteúdo 2')).toBeInTheDocument();
    });
    
    it("Caso não tenha post, não deve aparecer 'title' nem o 'body' ",()=>{
        render(
            <Context.Provider value={null}>
                <ListRender />
            </Context.Provider>
        );
        expect(screen.queryByText('title:')).not.toBeInTheDocument();
        expect(screen.queryByText('body:')).not.toBeInTheDocument();
    });
    it("Deve excluir os post",() =>{
        const mockPost = [
            { id: "1", title: 'Post 1', body: 'Conteúdo 1' }          
        ];
        const mockDispatch = jest.fn();
        const mockContext = createMockContext(mockPost);

        render(
            <Context.Provider value={mockContext}>
                <ListRender />
            </Context.Provider>
        );
        const deleteButton = screen.getByText('Excluir Post');
        fireEvent.click(deleteButton);
        
        expect(screen.queryByText('title:')).not.toBeInTheDocument();
        expect(screen.queryByText('body:')).not.toBeInTheDocument();
    })
})


