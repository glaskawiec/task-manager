/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

export default function PrioritySelect(props) {
  return (
    <select
      name="priority"
      className="form-control priority-select" {...props}>
      <option value="✌">✌</option>
      <option value="⭐">⭐</option>
      <option value="❗">❗</option>
    </select>
  )
}