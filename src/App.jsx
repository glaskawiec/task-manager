import React from 'react';
import { useHoux } from 'houx';
import { Grid } from 'react-flexbox-grid';
import AddOrEditTaskModal from './components/AddOrEditTaskModal';
import Header from './components/Header';
import TasksTable from './components/TasksTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './GlobalStyle';
import AddTaskButton from './components/AddTaskButton';

const App = () => {
  const { state } = useHoux();

  return (
    <Grid fluid>
      <GlobalStyle />
      <Header />
      {state.tasks.isAddModalOpen ? <AddOrEditTaskModal /> : null}
      {state.tasks.isEditModalOpen
        ? <AddOrEditTaskModal editTaskId={state.tasks.currentEditTaskId} />
        : null}
      <TasksTable />
      <AddTaskButton />
    </Grid>
  );
};

export default App;
