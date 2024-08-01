import { useState } from 'react'

export default function SearchBar({ onSubmit, loading }) {
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
            <input 
            onChange={handleChange}
            placeholder="Search" 
            name="Search"
            id="Search"
            value={term}
            style={{ padding: '10px', marginRight: '5px', borderRadius: '5px' }}
            />
          {loading? (<button style={{ backgroundColor: 'black'}} >Submit</button>) :  <button>Submit</button>}
         
          </form>
        </>
    )
}