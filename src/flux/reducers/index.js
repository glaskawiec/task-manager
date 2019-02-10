import tasksReducer from './tasksReducer'
import doneTasksReducer from './doneTasksReducer';

export const reducers = {
    tasks: tasksReducer,
    doneTasks: doneTasksReducer
}

export default reducers;