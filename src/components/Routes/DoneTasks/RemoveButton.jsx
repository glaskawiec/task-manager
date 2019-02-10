import React from 'react';
import { useHoux } from 'houx';
import { removeDoneTask } from '../../../flux/actions/doneTasksActions';

export default function RemoveButton(props) {
    const [state, dispatch] = useHoux();

    const onClick = () => {
        dispatch(removeDoneTask(props.itemId));
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