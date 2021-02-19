import { render, screen } from '@testing-library/react';
import Body from '../components/Body'

test('renders Error msg when when provided', () => {
    render(<Body errMsg="Not Found" />);
    const element = screen.getByTestId('body')
    expect(element).toHaveTextContent('Not Found')
});

test('renders Loading indicatior', () => {
    render(<Body errMsg="Not Found" isLoading={true} />);
    const element = screen.getByTestId('body')
    expect(element).toHaveTextContent('Loading')
});

test('renders gist list when there is no error or loading', () => {
    render(<Body/>);
    const element = screen.getByTestId('gist-list')
    expect(element).toBeInTheDocument()
});