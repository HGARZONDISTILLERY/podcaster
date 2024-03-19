import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Podcaster title', () => {
  render(<App />);
  const linkElement = screen.getByText(/podcaster/i);
  expect(linkElement).toBeInTheDocument();
});
