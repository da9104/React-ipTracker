import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';

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
        <>
          <form onSubmit={handleFormSubmit} >
            <Input 
            onChange={handleChange}
            placeholder="Search" 
            name="Search"
            id="Search"
            value={term}
            style={{ padding: '10px', marginRight: '5px', borderRadius: '5px' }}
            // startIcon={<SearchIcon />}
            />
            
           <button >Submit </button>
          </form>
        </>
    )
}