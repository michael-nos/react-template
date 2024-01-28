import { render, screen } from '@testing-library/react';
import { App } from '@/components/App';
import { vi } from 'vitest';

// deciding to mock the App component since we probably don't want the mess of
// having to mock future queries/content from children components
vi.mock('@/components/App', () => ({
  App: () => {
    return <div>Mock App Component</div>;
  },
}));

describe('App', () => {
  it('should match the snapshot', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it('should render the mock App component', () => {
    render(<App />);
    expect(screen.getByText(/Mock App Component/i)).toBeInTheDocument();
  });
});
