import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { HouxProvider } from 'houx';
import reducers from '../../flux/reducers';
import App from '../../App';
import tasksReducer from '../../flux/reducers/tasksReducer';

describe('App component unit tests', () => {
  const mockedState = {
    tasks: [
      {
        id: 0,
        title: 'Test task 1',
        description: 'Test description 1',
        colors: {
          text: 'pink',
          background: 'yellow',
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

  test('App should render properly', () => {
    const { container } = render(
      <HouxProvider reducers={reducers}>
        <App />
      </HouxProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  test('Clicking on add task button should show add task modal with empty inputs', () => {
    const { getByTestId } = render(
      <HouxProvider reducers={reducers}>
        <App />
      </HouxProvider>,
    );

    fireEvent.click(getByTestId('add-task-button'));

    expect(getByTestId('add-or-edit-task-modal')).toBeInTheDocument();

    expect(getByTestId('title-input').value).toBe('');
    expect(getByTestId('description-input').value).toBe('');
    expect(getByTestId('text-color-input').value).toBe('');
    expect(getByTestId('background-color-input').value).toBe('');
  });

  test('Clicking on edit task button should show edit modal with proper data', () => {
    const { getByTestId } = render(
      <HouxProvider reducers={mockedReducers}>
        <App />
      </HouxProvider>,
    );

    fireEvent.click(getByTestId('edit-task-0-button'));

    expect(getByTestId('add-or-edit-task-modal')).toBeInTheDocument();

    expect(getByTestId('title-input').value).toBe(mockedState.tasks[0].title);
    expect(getByTestId('description-input').value).toBe(mockedState.tasks[0].description);
    expect(getByTestId('text-color-input').value).toBe(mockedState.tasks[0].colors.text);
    expect(getByTestId('background-color-input').value).toBe(mockedState.tasks[0].colors.background);
  });
});
