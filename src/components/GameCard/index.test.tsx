import React from 'react';
import { render } from '@testing-library/react';
import GameCard from './index';

describe('rendering', () => {
  it('renders all props', () => {
    const { getByText } = render(
      <GameCard name="Title" model="Model" passengers={1000} crew={2000} />
    );
    const name = getByText(/Title/i);
    const model = getByText(/Model/i);
    const passengers = getByText(/1000/i);
    const crew = getByText(/2000/i);

    expect(name).toBeInTheDocument();
    expect(model).toBeInTheDocument();
    expect(passengers).toBeInTheDocument();
    expect(crew).toBeInTheDocument();
  });

  it('does not crash if particular props are not supplied', () => {
    const { getByText } = render(<GameCard name="Title" model="Model" />);
    const name = getByText(/Title/i);
    const model = getByText(/Model/i);

    expect(name).toBeInTheDocument();
    expect(model).toBeInTheDocument();
  });
});
