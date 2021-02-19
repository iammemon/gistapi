import { render, screen } from '@testing-library/react';
import GistList from '../components/Body'


test('renders gist list', () => {
    render(<GistList/>);
    const element = screen.getByTestId('gist-list')
    expect(element).toBeInTheDocument();
});


test('renders no result screen when no data', () => {
    render(<GistList/>);
    const element = screen.getByTestId('gist-list')
    expect(element).toHaveTextContent('No Result');
});