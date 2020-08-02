import { render } from '@testing-library/react';
import React from 'react';
import { HouxProvider } from 'houx';
import reducers from '../../flux/reducers';
import AddTaskButton from '../AddTaskButton';

describe('AddTaskButton component unit tests', () => {
  test('AddTaskButton should render properly', () => {
    const { container } = render(
      <HouxProvider reducers={reducers}>
        <AddTaskButton />
      </HouxProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
