import React from 'react';
import { useHoux } from 'houx';
import { completeTask } from '../../../flux/actions/tasksActions';
import { addDoneTask } from '../../../flux/actions/doneTasksActions';

export default function CompleteButton(props) {
    const [state, dispatch] = useHoux();

    const onClick = () => {
        dispatch(completeTask(props.task.id));
        dispatch(addDoneTask(props.task));
    }

    return (
        <span
            className="cursor-pointer"
            onClick={onClick}
            role="img"
            aria-label="tick">✔</span>
    )
}