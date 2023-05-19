import { render, screen } from '@testing-library/react';
import AppMy from "./App-My";



test('renders learn react link', () => {
  render(<AppMy />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
