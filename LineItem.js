import React from 'react'
import { FaTrash } from 'react-icons/fa';

const LineItem = ({p,handleChange,handleDelete}) => {
  return (
    <li className='item' >
    <input
    type='checkbox'
    onChange={()=>handleChange(p.id)}
    checked={p.checked}
    />
    <label onDoubleClick={()=>handleChange(p.id) }style={(p.checked)? {textDecoration:"line-through"}:null}>{p.item}</label>
    <FaTrash
    role='button'
    onClick={()=>handleDelete(p.id)}
    tabIndex="0"
    />
  </li>
  )
}

export default LineItem