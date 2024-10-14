import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { SwitchUser } from '@/components/IsLoged';
import { ContextState } from '@/contexts/contextUser';

// Mock do useContext
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: jest.fn(),
    }));

describe('SwitchUser', () => {
    let mockContextValue: ContextState;
    
    beforeEach(() => {
        mockContextValue = {
        state: 'InitialUser',
        setState: jest.fn(),
        };
        (React.useContext as jest.Mock).mockReturnValue(mockContextValue);
    });

    it('renders correctly with initial context value', () => {
        render(<SwitchUser />);
        expect(screen.getByText('Atual usuário: InitialUser')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toHaveValue('');
        expect(screen.getByRole('button', { name: 'Mudar usuario' })).toBeInTheDocument();
    });

    it('updates input value when typing', () => {
        render(<SwitchUser />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'NewUser' } });
        expect(input).toHaveValue('NewUser');
    });

    it('calls context setState when button is clicked', () => {
        render(<SwitchUser />);
        const input = screen.getByRole('textbox');
        const button = screen.getByRole('button', { name: 'Mudar usuario' });

        fireEvent.change(input, { target: { value: 'NewUser' } });
        fireEvent.click(button);

        expect(mockContextValue.setState).toHaveBeenCalledWith('NewUser');
    });
});