import { fireEvent, render, screen } from '@testing-library/react'
import { useContext } from 'react'
import { Context, ProviderComponent } from "@/context/postContext"
import { PropsState } from '@/reducer/reducerFunction'

// Componente de teste para verificar o contexto
const TestComponent = () => {
    const context = useContext(Context)
    return (
        <div>
            <span data-testid="context-value">{context?.post.length}</span>
            <button 
                onClick={() => context?.dispatch({type:"add",id:"fmeo",title:"teste1",body:"temfal"})}
                data-testid="add-button"
            >
                Add Post
            </button>
        </div>
    )
}

describe("Esse componente deve fornecer o contexto e alterar ele", () => {
    test("Verificar se o componente está sendo renderizado", () => {
        render(
            <ProviderComponent>
                <div>Test Content</div>
            </ProviderComponent>
        )
        expect(screen.getByText('Test Content')).toBeInTheDocument()
    })

    test("Verificar está aceitando Childrens", () => {
        render(
            <ProviderComponent>
                <div data-testid="child1">Child 1</div>
                <div data-testid="child2">Child 2</div>
            </ProviderComponent>
        )
        expect(screen.getByTestId('child1')).toBeInTheDocument()
        expect(screen.getByTestId('child2')).toBeInTheDocument()
    })

    test("Verifica se o estado está sendo criado", () => {
        render(
            <ProviderComponent>
                <TestComponent />
            </ProviderComponent>
        )
        const contextValue = screen.getByTestId('context-value')
        expect(contextValue.textContent).toBe('0') // Estado inicial deve ser um array vazio
    })

    test("verificar se consigo alterar o estado", async () => {
        render(
            <ProviderComponent>
                <TestComponent />
            </ProviderComponent>
        )
        
        const addButton = screen.getByTestId('add-button')
        const contextValue = screen.getByTestId('context-value')
        
        // Verifica valor inicial
        expect(contextValue.textContent).toBe('0')
        
        // Simula clique no botão para adicionar post
        fireEvent.click(addButton)
        
        // Verifica se o estado foi atualizado
        expect(contextValue.textContent).toBe('1')
    })
})