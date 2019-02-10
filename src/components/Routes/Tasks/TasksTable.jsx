import React from 'react';
import moment from 'moment';
import { useHoux } from 'houx';
import RemoveButton from './RemoveButton';
import CompleteButton from './CompleteButton';

export default function TasksTable() {
  const [state] = useHoux();

  return (
    <table className="table table-dark">
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
        {state.tasks.tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.priority}</td>
            <td>{task.name}</td>
            <td>{moment(task.date).format('MMMM Do YYYY, h:mm a').toString()}</td>
            <td>
              <CompleteButton task={task} style={{ marginRight: '1em' }} />
              <RemoveButton itemId={task.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}