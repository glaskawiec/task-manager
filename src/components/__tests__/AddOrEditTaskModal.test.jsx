import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { HouxProvider } from 'houx';
import { getNodeText } from '@testing-library/dom';
import AddOrEditTaskModal from '../AddOrEditTaskModal';
import tasksReducer from '../../flux/reducers/tasksReducer';

describe('AddOrEditTaskModal component unit tests', () => {
  const mockedState = {
    tasks: [
      {
        id: 0,
        title: 'Test task 1',
        description: 'Test description 1',
        colors: {
          text: 'pink',
        },
      },
      {
        id: 1,
        title: 'Test task 2',
        description: '',
        colors: {
          text: 'purple',
        },
      },
    ],
    nextId: 1,
    isEditModalOpen: false,
    currentEditTaskId: null,
    isAddModalOpen: false,
  };

  const mockedReducers = {
    tasks: (state, action) => tasksReducer(mockedState, action),
  };

  test('AddOrEditTaskModal should render properly', () => {
    const { container } = render(
      <HouxProvider reducers={mockedReducers}>
        <AddOrEditTaskModal />
      </HouxProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  test('Should title be mandatory during adding new task', () => {
    const { getByTestId } = render(
      <HouxProvider reducers={mockedReducers}>
        <AddOrEditTaskModal />
      </HouxProvider>,
    );

    fireEvent.click(getByTestId('submit-button'));

    expect(getByTestId('title-input-error')).toBeInTheDocument();
    expect(getNodeText(getByTestId('title-input-error'))).toBe('Cannot be empty.');
  });
});
