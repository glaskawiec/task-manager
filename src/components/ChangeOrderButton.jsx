import React from 'react';
import { useHoux } from 'houx';
import PropTypes from 'prop-types';
import {changeOrder} from '../flux/actions/tasksActions';

const ChangeOrderButton = ({ id, orderDown }) => {
    const { dispatch } = useHoux();

    const onClick = () => {
        dispatch(changeOrder(id, orderDown));
    };

    return (
        <span
            data-testid={ orderDown ? `order-down-task-${id}-button` : `order-up-task-${id}-button`}
            style={{ marginLeft: '0.5em', cursor: 'pointer' }}
            onClick={onClick}
            role="img"
            aria-label={orderDown ? 'arrow up' : 'arrow down'}
        >
            {orderDown ? '⬇' : '⬆'}️
    </span>
    );
};

ChangeOrderButton.propTypes = {
    id: PropTypes.number.isRequired,
};

export default ChangeOrderButton;
