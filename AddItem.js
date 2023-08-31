import React from 'react'
import {FaPlus} from "react-icons/fa"
import {useRef} from "react"

const AddItem = ({newItem,setNewItem,handleSubmit}) => {

  const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor='addItem'>ADD ITEM</label>
      <input
      autoFocus
      id='addItem'
      type='text'
      placeholder='ADD ITEM'
      required
      value={newItem}
      onChange={(e)=>setNewItem(e.target.value)}
      ref={inputRef}
      />
      <button type='submit' aria-label='Add Item'>
        <FaPlus onClick={()=>inputRef.current.focus()}/>
        

      </button>

    </form>
  )
}

export default AddItem