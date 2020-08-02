import React, { useState } from 'react';
import { useHoux } from 'houx';
import { Table } from 'react-bootstrap';
import styled from 'styled-components';
import RemoveButton from './RemoveButton';
import EditButton from './EditButton';

const CollapseButton = styled.span`
  display: inline-block;
  padding: 0.2rem;
  background-color: transparent;
  color: white;
  cursor: pointer;
  border: 0;
`;

const Text = styled.p`
  display: inline-block;
`;

const DescriptionCell = styled.td`
  max-width: 10rem;
`;

const Row = styled.tr`
 background-color: ${(props) => props.backgroundColor};
 color: ${(props) => props.color};
`;

const TasksTable = () => {
  const { state } = useHoux();
  const [isCollapsed, setIsCollapsed] = useState({});

  const onCollapseClick = (task) => setIsCollapsed({ ...isCollapsed, [task.id]: !isCollapsed[task.id] });

  const headers = ['Id', 'Title', 'Description', 'Actions'];

  return (
    <Table bordered variant="dark" responsive>
      <thead>
        <tr>
          {headers.map((header) => <th key={header}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {state.tasks.tasks
          .sort((a, b) => a.id - b.id)
          .map((task) => (
            <Row
              color={task.colors.text}
              backgroundColor={task.colors.background}
              data-testid={`table-row-${task.id}`}
              key={task.id}
            >
              <td data-testid={`table-id-cell-${task.id}`}>
                <Text>
                  {task.id}
                </Text>
              </td>
              <td data-testid={`table-title-cell-${task.id}`}>
                <Text>
                  {task.title}
                </Text>
              </td>
              <DescriptionCell data-testid={`table-description-cell-${task.id}`}>
                {!isCollapsed[task.id] ? <></> : (
                  <Text>
                    {task.description}
                  </Text>
                )}
                {task.description && task.description.length > 0
                  ? (
                    <CollapseButton
                      data-testid={`collapse-button-task-${task.id}`}
                      onClick={() => onCollapseClick(task)}
                    >
                      {isCollapsed[task.id] ? '️⬅️' : '➡'}
                    </CollapseButton>
                  ) : null}
              </DescriptionCell>
              <td>
                <RemoveButton id={task.id} />
                <EditButton id={task.id} />
              </td>
            </Row>
          ))}
      </tbody>
    </Table>
  );
};

export default TasksTable;
