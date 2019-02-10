import React from 'react';
import DateTimePicker from 'react-widgets/lib/DateTimePicker'

export default function DateInput(props) {
  return (
    <DateTimePicker
      value={props.value}
      onChange={props.onChange}
    />
  )
}