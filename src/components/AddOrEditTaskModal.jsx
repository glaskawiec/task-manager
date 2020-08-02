import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AddTaskForm from './AddOrEditForm';
import device from '../device';

const AddTaskModalWrapper = styled.div`
  position:fixed;
  background: white;
  width: 80%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  border-radius: 0.5rem;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  padding: 2rem;
   
  @media ${device.tablet} { 
    width: auto;
  }
`;

const ModalTitle = styled.h3`
  text-align: center;
`;

const AddOrEditTaskModal = ({ editTaskId }) => {
  console.log(editTaskId);
  const isEditForm = editTaskId !== null;
  return (
    <AddTaskModalWrapper data-testid="add-or-edit-task-modal">
      <ModalTitle>{isEditForm ? 'Edit task' : 'Add new task'}</ModalTitle>
      <AddTaskForm editTaskId={editTaskId} />
    </AddTaskModalWrapper>
  );
};

AddOrEditTaskModal.propTypes = {
  editTaskId: PropTypes.number,
};

AddOrEditTaskModal.defaultProps = {
  editTaskId: null,
};

export default AddOrEditTaskModal;
