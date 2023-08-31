import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (
    <form className='searchFrom' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='search'>Search</label>
        <input
        id='search'
        type='text'
        role='search-box'
        placeholder='search-box'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />

    </form>
  )
}

export default SearchItem