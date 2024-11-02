import { render, screen } from '@testing-library/react';
import { FooterComponent } from '@/components/footer';
import { Context, ContextType } from '@/context/postContext';
import { PropsState } from '@/reducer/reducerFunction';


// Mock do Context
const createMockContext = (posts: PropsState[] | null): ContextType => ({
    // @ts-ignore
    post: posts,
    dispatch: jest.fn()
});

describe('FooterComponent', () => {
    it('deve mostrar "Total de post: 0" quando não houver posts', () => {
        // Arrange
        const mockContext = createMockContext(null);
        
        // Act
        render(
            <Context.Provider value={mockContext}>
                <FooterComponent />
            </Context.Provider>
        );
        
        // Assert
        expect(screen.getByText('Total de post: 0')).toBeInTheDocument();
    });

    it('deve mostrar a quantidade correta de posts quando houver posts', () => {
        // Arrange
        const mockPosts = [
            { id: "1", title: 'Post 1', body: 'Conteúdo 1' },
            { id: "2", title: 'Post 2', body: 'Conteúdo 2' }
        ];
        
        const mockContext = createMockContext(mockPosts);
        
        // Act
        render(
            <Context.Provider value={mockContext}>
                <FooterComponent />
            </Context.Provider>
        );
        
        // Assert
        expect(screen.getByText('Total de post: 2')).toBeInTheDocument();
    });
});