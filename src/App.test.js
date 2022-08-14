import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


test('check whether app renders correctly', () => {
    render(<App />);

    const text = screen.getByText(/Enter github username/i);
    const inputBox = screen.getByPlaceholderText(/John_278/i);
    
    expect(text).toBeInTheDocument();
    expect(inputBox).toBeInTheDocument();
})


test('check whether user is able to type on input box', async () => {
    render(<App />);

    const inputBox = screen.getByPlaceholderText(/John_278/i);

    expect(inputBox).toHaveTextContent('');
    await userEvent.type(inputBox, 'random_123');
    expect(screen.getByDisplayValue('random_123')).toBeInTheDocument();
})