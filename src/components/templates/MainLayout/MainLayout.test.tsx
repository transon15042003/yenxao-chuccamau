import { render, screen } from '@/tests/test-utils';

import { MainLayout } from '.';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn()
    // add any other router methods your code uses
  }),
  usePathname: () => '/',
  useSearchParams: () => ({})
}));

describe('MainLayout', () => {
  it('should render the children components', () => {
    render(
      <MainLayout>
        <h1>MainLayout children</h1>
      </MainLayout>
    );

    // Assert
    screen.getByRole('heading', { name: /MainLayout children/i });
  });
});
