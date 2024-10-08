import { useRef, useState, useEffect } from 'react'
import searchIp from './api'
import SearchBar from './SearchBar'
import ShowDetails from './ShowDetails'
import Mapping from './Mapping'
import './App.css'

function App() {
  const [ip, setIp] = useState([])
  const [location, setLocation] = useState([])
  const [lat, setLat] = useState()
  const [lng, setLng] = useState()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  

  useEffect(() => {
    return () => {
      setLoading(false)
    }
  }, [lat, lng])

  const handleSubmit = async (term) => {
    setLoading(true)
    const result = await searchIp(term)
    const locationData = result.location;
    console.log(locationData)
    setIp(result)
    setLocation(locationData)
    await setLat(locationData.lat)
    await setLng(locationData.lng)

  }

  return (
    <div>
      <div className='main'>
          <h3>IP address Tracker</h3>
           <SearchBar  onSubmit={handleSubmit} /> 
          </div>
           {loading? (<div className='text-blue-700 font-extrabold'> Loading... </div>)
          : (<>
            <ShowDetails loading={loading} ip={ip} location={location} />
            {lat? (<Mapping ip={ip} lat={lat} lng={lng} />) : (null)}
            </>
            )}
    </div>
  )
}

export default App
