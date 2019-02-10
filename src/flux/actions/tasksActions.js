import { TASKS_ADD, TASKS_REMOVE, TASKS_COMPLETE } from "../actionTypes/tasksActionTypes";

export const addTask = (task) => ({ type: TASKS_ADD, task })
export const removeTask = (id) => ({ type: TASKS_REMOVE, id })
export const completeTask = (id) => ({ type: TASKS_COMPLETE, id })
