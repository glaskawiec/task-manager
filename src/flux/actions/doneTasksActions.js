import { DONE_TASKS_ADD, DONE_TASKS_REMOVE } from "../actionTypes/doneTasksActionTypes";

export const addDoneTask = (task) => ({ type: DONE_TASKS_ADD, task })
export const removeDoneTask = (id) => ({ type: DONE_TASKS_REMOVE, id })
