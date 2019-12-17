import React from 'react';
import { render } from '@testing-library/react';
import Header from './index';

describe('rendering', () => {
  it('renders heading', () => {
    const { getByText } = render(
      <Header heading="Title" highlight="Highlight" />
    );
    const linkElement = getByText(/Title/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders highlight', () => {
    const { getByText } = render(
      <Header heading="Title" highlight="Highlight" />
    );
    const linkElement = getByText(/Highlight/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders default values on props missing', () => {
    const { getByText } = render(<Header highlight="Highlight" />);
    const linkElement = getByText(/Star Wars/i);
    expect(linkElement).toBeInTheDocument();
  });
});
