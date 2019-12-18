import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Panel from './index';

it('renders props', () => {
  function handleClick(): void {
    done(); // eslint-disable-line no-undef
  }
  const { getByText } = render(
    <Panel
      handleRefresh={handleClick}
      winner={1}
      scoreFirst={100}
      scoreSecond={99}
    />
  );
  const value = getByText(/Player 1 won!/i);
  expect(value).toBeInTheDocument();
});

it('captures clicks', done => {
  function handleClick(): void {
    done(); // eslint-disable-line no-undef
  }
  const { getByText } = render(
    <Panel
      handleRefresh={handleClick}
      winner={1}
      scoreFirst={100}
      scoreSecond={99}
    />
  );
  const node = getByText('Try again');
  fireEvent.click(node);
});

afterEach(cleanup);
