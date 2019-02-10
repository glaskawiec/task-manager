import React from 'react';
import moment from 'moment';
import { useHoux } from 'houx';
import RemoveButton from './RemoveButton';

export default function DoneTasksTable(props) {
    const [state] = useHoux();

    return (
        <table className="table table-dark m-4">
            <thead>
                <tr>
                    <th>#Id</th>
                    <th>Priority</th>
                    <th>Text</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {state.doneTasks.map((task) => (
                    <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.priority}</td>
                        <td>{task.name}</td>
                        <td>{moment(task.date).format('MMMM Do YYYY, h:mm a').toString()}</td>
                        <td><RemoveButton itemId={task.id} /></td>
                    </tr>
                ))}

            </tbody>
        </table>
    )
}