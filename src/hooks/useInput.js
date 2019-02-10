import { useState } from 'react';

export default function useInput(initial) {
    const [value, setValue] = useState(initial);

    const onChange = (event) => {
        setValue(event.target.value);
    }

    return {
        value,
        onChange
    }
}