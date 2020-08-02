import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { getNodeText } from '@testing-library/dom';
import { HouxProvider } from 'houx';
import TasksTable from '../TasksTable';
import reducers from '../../flux/reducers';
import tasksReducer from '../../flux/reducers/tasksReducer';

describe('TasksTable component unit tests', () => {
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
      {
        id: 1,
        title: 'Test task 2',
        description: '',
        colors: {
          text: 'purple',
        },
      },
    ],
    nextId: 2,
    currentEditTaskId: null,
    isEditModalOpen: false,
    isAddModalOpen: false,
  };

  const mockedReducers = {
    tasks: (state, action) => tasksReducer(mockedState, action),
  };

  test('Header should render properly', () => {
    const { container } = render(
      <HouxProvider reducers={mockedReducers}>
        <TasksTable />
      </HouxProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  test('Clicking on remove task button should remove row properly row from table', () => {
    const { queryByTestId } = render(
      <HouxProvider reducers={reducers}>
        <TasksTable />
      </HouxProvider>,
    );

    expect(queryByTestId('table-row-0')).toBeInTheDocument();

    fireEvent.click(queryByTestId('remove-task-0-button'));

    expect(queryByTestId('table-row-0')).not.toBeInTheDocument();
  });

  test('Should id be shown properly', () => {
    const { getByTestId } = render(
      <HouxProvider reducers={mockedReducers}>
        <TasksTable />
      </HouxProvider>,
    );

    expect(getNodeText(getByTestId('table-id-cell-0').firstChild)).toBe(mockedState.tasks[0].id.toString());
    expect(getNodeText(getByTestId('table-id-cell-1').firstChild)).toBe(mockedState.tasks[1].id.toString());
  });

  test('Should title be shown properly', () => {
    const { getByTestId } = render(
      <HouxProvider reducers={mockedReducers}>
        <TasksTable />
      </HouxProvider>,
    );

    expect(getNodeText(getByTestId('table-title-cell-0').firstChild)).toBe(mockedState.tasks[0].title.toString());
    expect(getNodeText(getByTestId('table-title-cell-1').firstChild)).toBe(mockedState.tasks[1].title.toString());
  });

  test('Should description cell be empty if there is no description', () => {
    const { getByTestId } = render(
      <HouxProvider reducers={mockedReducers}>
        <TasksTable />
      </HouxProvider>,
    );

    expect(getByTestId('table-description-cell-1').firstChild).toBe(null);
  });

  test('Should description be collapsed by default if there is description', () => {
    const { getByTestId } = render(
      <HouxProvider reducers={mockedReducers}>
        <TasksTable />
      </HouxProvider>,
    );

    expect(getNodeText(getByTestId('table-description-cell-0').firstChild)).toBe('➡');
  });

  test('Should description be shown after clicking on collapse button', () => {
    const { getByTestId } = render(
      <HouxProvider reducers={mockedReducers}>
        <TasksTable />
      </HouxProvider>,
    );

    expect(getNodeText(getByTestId('table-description-cell-0').firstChild)).toBe('➡');

    fireEvent.click(getByTestId('collapse-button-task-0'));

    expect(getNodeText(getByTestId('table-description-cell-0').firstChild)).toBe(mockedState.tasks[0].description);
  });

  test('Should task row have possibility to add custom background color', () => {
    const { getByTestId } = render(
      <HouxProvider reducers={mockedReducers}>
        <TasksTable />
      </HouxProvider>,
    );

    expect(getByTestId('table-row-0')).toHaveStyle(`background-color: ${mockedState.tasks[0].colors.background}`);
  });

  test('Should task row have possibility to add custom text color', () => {
    const { getByTestId } = render(
      <HouxProvider reducers={mockedReducers}>
        <TasksTable />
      </HouxProvider>,
    );

    expect(getByTestId('table-row-0')).toHaveStyle(`color: ${mockedState.tasks[0].colors.text}`);
  });

  test('User should be able to order task to 1 item down', () => {
    const { getByTestId } = render(
        <HouxProvider reducers={reducers}>
          <TasksTable />
        </HouxProvider>,
    );


    expect(getNodeText(getByTestId('table-title-cell-0').firstChild)).toBe('Example task');

    fireEvent.click(getByTestId('order-down-task-0-button'));

    expect(getNodeText(getByTestId('table-title-cell-1').firstChild)).toBe('Example task');
  });

  test('User should be able to order task to 1 item up', () => {
    const { getByTestId } = render(
        <HouxProvider reducers={reducers}>
          <TasksTable />
        </HouxProvider>,
    );


    expect(getNodeText(getByTestId('table-title-cell-2').firstChild)).toBe('Example task 2');

    fireEvent.click(getByTestId('order-up-task-2-button'));

    expect(getNodeText(getByTestId('table-title-cell-1').firstChild)).toBe('Example task 2');
  });
});
