import { render } from '@testing-library/react';
import React from 'react';
import { HouxProvider } from 'houx';
import reducers from '../../flux/reducers';
import RemoveButton from '../RemoveButton';

describe('RemoveButton component unit tests', () => {
  test('RemoveButton should render properly', () => {
    const { container } = render(
      <HouxProvider reducers={reducers}>
        <RemoveButton id={1} />
      </HouxProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
