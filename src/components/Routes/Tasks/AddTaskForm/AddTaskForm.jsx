import React from 'react';
import useInput from '../../../../hooks/useInput';
import Input from '../../../Common/Input';
import PrioritySelect from './PrioritySelect';
import DateTimeInput from '../../../Common/DateTimeInput';
import AddButton from './AddButton';
import Label from '../../../Common/Label';
import { useHoux } from 'houx';
import useDateTimeInput from '../../../../hooks/useDateTimeInput';
import { addTask } from '../../../../flux/actions/tasksActions';

export default function AddTaskDoForm(props) {
    const text = useInput('Sample task');
    const priority = useInput('✌');
    const date = useDateTimeInput(new Date());
    const [state, dispatch] = useHoux();

    const task = {
        priority: priority.value,
        name: text.value,
        date: date.value,
    }

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(addTask(task));
    }

    return (
        <div className="row justify-content-center m-4">
            <form>
                <div className="group  m-1">
                    <Label>Priority</Label>
                    <PrioritySelect
                        value={priority.value}
                        onChange={priority.onChange}
                    />
                </div>
                <div className="group  m-1">
                    <Label>Text</Label>
                    <Input
                        value={text.value}
                        onChange={text.onChange}
                    />
                </div>
                <div className="group  m-1">
                    <Label>Date</Label>
                    <DateTimeInput
                        value={date.value}
                        onChange={date.onChange}
                    />
                </div>
                <div className="group  m-1">
                    <AddButton onClick={onSubmit} />
                </div>
            </form>
        </div>
    )
}