import { render, screen } from '../utils';
import Home from '@/pages/index';

describe('Home', () => {
  it('renders the title: Welcome to FaceMash!', () => {
    render(<Home />);
    const welcomeText = screen.getByText(/Welcome to/i);
    const linkElement = screen.getByRole('link', { name: 'FaceMash!' });

    expect(welcomeText).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://nextjs.org');
  });
});
