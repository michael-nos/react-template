import { render } from '@testing-library/react';
import { NotFound } from '@/components/NotFound';

describe('NotFound', () => {
  it('should match the snapshot', () => {
    const { container } = render(<NotFound />);
    expect(container).toMatchSnapshot();
  });
});
