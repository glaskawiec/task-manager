import React from 'react';
import { Button } from 'react-bootstrap';
import { useHoux } from 'houx';
import { openAddModal } from '../flux/actions/tasksActions';

const AddTaskButton = () => {
  const { dispatch } = useHoux();

  const onAddTaskButtonClick = () => {
    dispatch(openAddModal());
  };

  return (
    <Button data-testid="add-task-button" onClick={onAddTaskButtonClick}>Add Task</Button>
  );
};

export default AddTaskButton;
