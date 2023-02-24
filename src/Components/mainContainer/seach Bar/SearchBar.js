import React, { useState } from 'react'
import './SearchBar.css'

export default function SearchBar({ handleSearchText}) {
    
    
  return (
    <div className='searchBar'>
        <input onChange={(e)=> handleSearchText(e.target.value)} placeholder='search state here...' className='input' type="text"/>
        
    </div>
  )
}
