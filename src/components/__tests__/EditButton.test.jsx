import { render } from '@testing-library/react';
import React from 'react';
import { HouxProvider } from 'houx';
import reducers from '../../flux/reducers';
import EditButton from '../EditButton';

describe('EditButton component unit tests', () => {
  test('EditButton should render properly', () => {
    const { container } = render(
      <HouxProvider reducers={reducers}>
        <EditButton id={1} />
      </HouxProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
