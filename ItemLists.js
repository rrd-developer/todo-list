import React from 'react'

import LineItem from './LineItem';

const ItemLists = ({items,handleChange,handleDelete}) => {
  return (
    <ul>
        {items.map((p)=>(
          <LineItem
          key={p.id}
          p={p}
          handleChange={handleChange}
          handleDelete={handleDelete}
          />
        ))}
        <li>

        </li>
      </ul>
  )
}

export default ItemLists