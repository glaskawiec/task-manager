import {
  TASKS_ADD,
  TASKS_REMOVE,
  TASKS_COMPLETE,
  TASKS_EDIT,
  TASKS_OPEN_ADD_MODAL,
  TASKS_OPEN_EDIT_MODAL,
  TASKS_CLOSE_MODAL, TASKS_CHANGE_ORDER,
} from '../actionTypes/tasksActionTypes';

export const initialState = {
  tasks: [
    {
      id: 0,
      title: 'Example task',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      colors: {
        text: 'pink',
      },
    },
    {
      id: 1,
      title: 'Example task 2',
      description: '',
      colors: {
        text: 'purple',
      },
    },
    {
      id: 2,
      title: 'Example task 3',
      description: '',
      colors: {
        text: 'yellow',
      },
    },
  ],
  nextId: 3,
  isEditModalOpen: false,
  currentEditTaskId: null,
  isAddModalOpen: false,
};

const tasksReducer = (state = initialState, action) => {
  switch (action && action.type) {
    case TASKS_ADD: {
      const newTodo = {
        ...action.task,
        id: state.nextId,
      };

      return {
        ...state,
        nextId: state.nextId + 1,
        tasks: [...state.tasks, newTodo],
      };
    }
    case TASKS_REMOVE: {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    }
    case TASKS_COMPLETE:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    case TASKS_OPEN_ADD_MODAL:
      return {
        ...state,
        isAddModalOpen: true,

      };
    case TASKS_CLOSE_MODAL:
      return {
        ...state,
        isEditModalOpen: false,
        isAddModalOpen: false,
      };
    case TASKS_OPEN_EDIT_MODAL:
      return {
        ...state,
        isEditModalOpen: true,
        currentEditTaskId: action.id,
      };
    case TASKS_EDIT: {
      const { currentEditTaskId } = state;
      return {
        ...state,
        tasks: [
          ...state.tasks.filter((task) => task.id !== action.id),
          { ...action.editedTask, id: currentEditTaskId },
        ],
        currentEditTaskId: null,
      };
    }
    case TASKS_CHANGE_ORDER: {
      const {orderDown, id} = action;
      const tasksCopy = [...state.tasks];
      let tasksToOrderIndex = 0;

      for( ; tasksToOrderIndex < tasksCopy.length; ++tasksToOrderIndex){
        if(tasksCopy[tasksToOrderIndex].id === id){
          break;
        }
      }

      if(orderDown){
        const previousId = tasksCopy[tasksToOrderIndex+1].id;
        tasksCopy[tasksToOrderIndex].id = previousId;
        tasksCopy[tasksToOrderIndex+1].id = id;
      } else {
        const previousId = tasksCopy[tasksToOrderIndex-1].id;
        tasksCopy[tasksToOrderIndex].id = previousId;
        tasksCopy[tasksToOrderIndex-1].id = id;
      }

      return {
        ...state,
        tasks: tasksCopy
      };
    }
    default: return state;
  }
};

export default tasksReducer;
