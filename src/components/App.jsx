import React from 'react';
import TasksWrapper from './Routes/Tasks/TasksWrapper';
import reducers from '../flux/reducers';
import { Provider, createStoreWithReducers } from 'houx';
import Layout from './Layout/Layout';
import { BrowserRouter, Route } from 'react-router-dom'
import DoneTasksTable from './Routes/DoneTasks/DoneTasksTable';

export default function App() {
  const store = createStoreWithReducers(reducers);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Route exact path="/" component={TasksWrapper} />
          <Route path="/done" component={DoneTasksTable} />
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}
