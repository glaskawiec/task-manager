import React from 'react';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import TasksTable from "./TasksTable";

export default function TasksWrapper() {
    return (
        <>
            <AddTaskForm />
            <TasksTable />
        </>
    )
}