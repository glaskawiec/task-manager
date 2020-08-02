import {
  TASKS_ADD,
  TASKS_CLOSE_MODAL,
  TASKS_EDIT,
  TASKS_OPEN_ADD_MODAL,
  TASKS_OPEN_EDIT_MODAL,
  TASKS_REMOVE,
} from '../actionTypes/tasksActionTypes';

export const addTask = (task) => ({ type: TASKS_ADD, task });
export const removeTask = (id) => ({ type: TASKS_REMOVE, id });
export const openEditModal = (id) => ({ type: TASKS_OPEN_EDIT_MODAL, id });
export const openAddModal = () => ({ type: TASKS_OPEN_ADD_MODAL });
export const closeModal = () => ({ type: TASKS_CLOSE_MODAL });
export const editTask = (id, editedTask) => ({ type: TASKS_EDIT, editedTask, id });
