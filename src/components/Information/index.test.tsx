import React from 'react';
import { render } from '@testing-library/react';
import Information from './index';

it('renders props', () => {
  const { getByText } = render(<Information text="A sample text" />);
  const value = getByText(/A sample text/i);
  expect(value).toBeInTheDocument();
});
