import { useState } from 'react';

export default function useDateTimeInput(initial) {
    const [value, setValue] = useState(initial);

    const onChange = (value) => {
        setValue(value);
    }

    return {
        value,
        onChange
    }
}