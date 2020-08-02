import React, { useState } from 'react';
import { useHoux } from 'houx';
import { Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { addTask, closeModal, editTask } from '../flux/actions/tasksActions';

const AddButton = styled(Button)`
  margin-right: 1rem;
`;

const TitleFormControl = styled(Form.Control)`
border-color: ${(props) => (props.error === 'true' ? 'red' : '#ced4da')};
`;

const TitleFormErrorText = styled(Form.Text)`
color: red;
`;

const AddTaskDoForm = ({ editTaskId }) => {
  const [isError, setIsError] = useState(false);
  const { state, dispatch } = useHoux();

  const isEditForm = editTaskId !== null;
  const currentTask = state.tasks.tasks.filter((t) => t.id === editTaskId)[0];

  const title = useInput(currentTask ? currentTask.title : '');
  const description = useInput(currentTask ? currentTask.description : '');
  const backgroundColor = useInput(currentTask ? currentTask.colors.background : '');
  const textColor = useInput(currentTask ? currentTask.colors.text : '');

  const task = {
    title: title.value,
    description: description.value,
    colors: {
      background: backgroundColor.value,
      text: textColor.value,
    },
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (title.value === '') {
      setIsError(true);
      return;
    }

    if (isEditForm) {
      dispatch(editTask(editTaskId, task));
    } else {
      dispatch(addTask(task));
    }
    dispatch(closeModal());
  };

  const onClose = (event) => {
    event.preventDefault();
    dispatch(closeModal());
  };

  return (
    <Form>
      <Form.Group controlId="title">
        <TitleFormControl
          data-testid="title-input"
          placeholder="Title"
          value={title.value}
          onChange={title.onChange}
          error={isError.toString()}
        />
        {isError ? <TitleFormErrorText data-testid="title-input-error">Cannot be empty.</TitleFormErrorText> : <></>}
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Control
          data-testid="description-input"
          placeholder="Description"
          value={description.value}
          onChange={description.onChange}
        />
      </Form.Group>
      <Form.Group controlId="background-color">
        <Form.Control
          data-testid="background-color-input"
          placeholder="Background Color"
          value={backgroundColor.value}
          onChange={backgroundColor.onChange}
        />
      </Form.Group>
      <Form.Group controlId="text-color">
        <Form.Control
          data-testid="text-color-input"
          placeholder="Text Color"
          value={textColor.value}
          onChange={textColor.onChange}
        />
      </Form.Group>
      <AddButton data-testid="submit-button" type="submit" onClick={onSubmit}>{isEditForm ? 'Edit' : 'Add'}</AddButton>
      <Button data-testid="close-button" onClick={onClose}>Close</Button>
    </Form>
  );
};

AddTaskDoForm.propTypes = {
  editTaskId: PropTypes.number,
};

AddTaskDoForm.defaultProps = {
  editTaskId: null,
};

export default AddTaskDoForm;
