import React, { useContext } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentProvider, Context, ContextState } from '@/contexts/contextUser'; // Ajuste o caminho de importação conforme necessário

// Componente de teste que usa o contexto
const TestComponent = () => {
    const context = useContext(Context) as ContextState;
    return (
        <div>
        <div data-testid="state-value">{context.state}</div>
        <button onClick={() => context.setState('updated')}>Update State</button>
        </div>
    );
};

describe('Context', () => {
    it('provides the correct initial state', () => {
        render(
        <ComponentProvider>
            <TestComponent />
        </ComponentProvider>
        );

    expect(screen.getByTestId('state-value')).toHaveTextContent('');
    });

    it('updates the state when setState is called', async () => {
        render(
        <ComponentProvider>
            <TestComponent />
        </ComponentProvider>
        );

        const button = screen.getByRole('button', { name: /update state/i });
        await userEvent.click(button);

        expect(screen.getByTestId('state-value')).toHaveTextContent('updated');
    });
});