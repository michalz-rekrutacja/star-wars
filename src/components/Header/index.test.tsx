import React from 'react';
import { render } from '@testing-library/react';
import Header from './index';

describe('rendering', () => {
  it('renders heading', () => {
    const { getByText } = render(
      <Header heading="Title" highlight="Highlight" />
    );
    const value = getByText(/Title/i);
    expect(value).toBeInTheDocument();
  });

  it('renders highlight', () => {
    const { getByText } = render(
      <Header heading="Title" highlight="Highlight" />
    );
    const value = getByText(/Highlight/i);
    expect(value).toBeInTheDocument();
  });

  it('renders default values on props missing', () => {
    const { getByText } = render(<Header highlight="Highlight" />);
    const value = getByText(/Star Wars/i);
    expect(value).toBeInTheDocument();
  });
});
