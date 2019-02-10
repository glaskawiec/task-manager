import { DONE_TASKS_ADD, DONE_TASKS_REMOVE } from "../actionTypes/doneTasksActionTypes";

export const initialState = [];

const doneTasksReducer = (state = initialState, action) => {
    switch (action && action.type) {
        case DONE_TASKS_ADD:
            return [...state, action.task]
        case DONE_TASKS_REMOVE:
            return state.filter((task) => task.id !== action.id)
        default: return state;
    }
}

export default doneTasksReducer;