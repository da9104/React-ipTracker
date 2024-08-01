import { useState } from 'react'

export default function SearchBar({ onSubmit }) {
   const [term, setTerm] = useState('')
  
    const handleChange = (e) => {
        e.preventDefault()
        setTerm(e.target.value)
    }

    const handleFormSubmit = (e) => {
         e.preventDefault()
         onSubmit(term)
    }

    return (
        <div>
          <form onSubmit={handleFormSubmit}>
          {/* Confrim your search: {term} <br/> */}
          <input 
          onChange={handleChange}
          placeholder="Search" 
          name="Search"
          id="Search"
          value={term}
          />
          <button >Submit</button>
          </form>
        </div>
    )
}