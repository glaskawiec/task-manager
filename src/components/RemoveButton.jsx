import React from 'react';
import { useHoux } from 'houx';
import PropTypes from 'prop-types';
import { removeTask } from '../flux/actions/tasksActions';

const RemoveButton = ({ id }) => {
  const { dispatch } = useHoux();

  const onClick = () => {
    dispatch(removeTask(id));
  };

  return (
    <span
      data-testid={`remove-task-${id}-button`}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
      role="img"
      aria-label="Cross"
      aria-labelledby="Cross"
    >
      ❌
    </span>
  );
};

RemoveButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default RemoveButton;
