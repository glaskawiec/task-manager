import { TASKS_ADD, TASKS_REMOVE, TASKS_COMPLETE } from "../actionTypes/tasksActionTypes";

export const initialState = {
    tasks: [],
    nextId: 0
}

const tasksReducer = (state = initialState, action) => {

    switch (action && action.type) {
        case TASKS_ADD:
            const newTodo = {
                ...action.task,
                id: state.nextId
            }
            ++state.nextId;
            return {
                ...state,
                tasks: [...state.tasks, newTodo]
            }
        case TASKS_REMOVE:
            --state.nextId;

            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.id)
            }
            case TASKS_COMPLETE:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.id)
            }
        default: return state;
    }
}

export default tasksReducer;