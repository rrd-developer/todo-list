import React from 'react'


import ItemLists from './ItemLists';










const Content = ({items,handleChange,handleDelete}) => {
   
   
  return (
    <main>
      {(items.length)?(
        <ItemLists

        items={items}
        handleChange={handleChange}
        handleDelete={handleDelete}
        />

      ):(
        <p>YOUR LIST IS EMPTY</p>
      )
}
     

      
        
    </main>


  )
}

export default Content