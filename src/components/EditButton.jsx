import React from 'react';
import { useHoux } from 'houx';
import PropTypes from 'prop-types';
import { openEditModal } from '../flux/actions/tasksActions';

const EditButton = ({ id }) => {
  const { dispatch } = useHoux();

  const onClick = () => {
    dispatch(openEditModal(id));
  };

  return (
    <span
      data-testid={`edit-task-${id}-button`}
      style={{ marginLeft: '0.5em', cursor: 'pointer' }}
      onClick={onClick}
      role="img"
      aria-label="Cross"
    >
      ✏
    </span>
  );
};

EditButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default EditButton;
