import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Root component for the "/" path', () => {
  const queryClient = new QueryClient();

  render(<QueryClientProvider client={queryClient}><App /></QueryClientProvider>);

  // Ensure the Root component is rendered
  const rootElement = screen.getByText(/Podcaster/i);
  expect(rootElement).toBeInTheDocument();
});
