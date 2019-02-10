import React from 'react';
import { useHoux } from 'houx';
import { removeTask } from '../../../flux/actions/tasksActions';

export default function RemoveButton(props) {
    const [state, dispatch] = useHoux();

    const onClick = () => {
        dispatch(removeTask(props.itemId));
    }

    return (
        <span
            className="cursor-pointer"
            style={{ marginLeft: '0.5em' }}
            onClick={onClick}
            role="img"
            aria-label="cross">❌</span>
    )
}