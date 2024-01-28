import { render, screen } from '@testing-library/react';
import { Main } from '@/components/Main';

describe('Main', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Main />);
    expect(container).toMatchSnapshot();
  });

  it('should render the Main component', () => {
    render(<Main />);
    expect(screen.getByText(/Hey there, time to make a fast app!/i)).toBeInTheDocument();
  });
});
