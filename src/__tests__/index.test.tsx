import { render, screen } from '@testing-library/react';
import { App } from '@/components/App';
import { vi } from 'vitest';

vi.mock('@/components/App', () => ({
  App: () => {
    return <div>Mock App Component</div>;
  },
}));

describe('index', () => {
  it('should render the mock App component', () => {
    render(<App />);
    expect(screen.getByText(/Mock App Component/i)).toBeInTheDocument();
  });
});
