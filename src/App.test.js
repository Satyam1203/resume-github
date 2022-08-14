import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ApolloProvider } from '@apollo/client';
import { client } from './config/apolloClientConfig';
import App from './App';

const provider = ({ children }) => (
    <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
)

const renderWithApolloClient = (component) => {
    return {
        user: userEvent.setup(),
        ...render(component, { wrapper: provider })
    }
}


test('check whether app renders correctly', () => {
    render(<App />);

    const text = screen.getByText(/Enter github username/i);
    const inputBox = screen.getByPlaceholderText(/John_278/i);
    const button = screen.getByTitle(/button/i);

    expect(text).toBeInTheDocument();
    expect(inputBox).toBeInTheDocument();
    expect(button).toBeInTheDocument();
})


test('check whether user is able to type on input box', async () => {
    render(<App />);

    const inputBox = screen.getByPlaceholderText(/John_278/i);

    expect(inputBox).toHaveTextContent('');
    await userEvent.type(inputBox, 'random_123');
    expect(screen.getByDisplayValue('random_123')).toBeInTheDocument();
})

test('check whether error is thrown for invalid username', async () => {
    const { user } = renderWithApolloClient(<App />);

    const inputBox = screen.getByPlaceholderText(/John_278/i);
    await userEvent.type(inputBox, 'random_user_123@!');
    await user.click(screen.getByTitle(/button/i));

    const resume = await screen.findByTitle(/resume-block/i);
    expect(resume).toBeDefined();

    expect(screen.getByText(/Unexpected error/i)).toBeInTheDocument();
})

test('check whether resume is displayed for a valid username', async () => {
    const { user } = renderWithApolloClient(<App />);

    // verify why cleanup is not happening automatically
    // manually redirected back to home screen
    expect(screen.getByTitle('link')).toBeInTheDocument();
    fireEvent.click(screen.getByTitle('link'));

    const inputBox = screen.getByPlaceholderText(/John_278/i);
    await userEvent.type(inputBox, 'satyam1203');
    await user.click(screen.getByTitle(/button/i));

    const resume = await screen.findByTitle(/resume-block/i);
    expect(resume).toBeDefined();

    expect(screen.getByText(/my github profile/i)).toBeInTheDocument();
})