import { render } from '@testing-library/react';
import React from 'react';
import Header from '../Header';

describe('Header component unit tests', () => {
  test('Header should render properly', () => {
    const { container } = render(
      <Header />,
    );
    expect(container).toMatchSnapshot();
  });
});
