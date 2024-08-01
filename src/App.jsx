import { useRef, useState, useEffect } from 'react'
import searchIp from './api'
import SearchBar from './SearchBar'
import ShowDetails from './ShowDetails'
import Mapping from './Mapping'
import './App.css'

function App() {
  const [loading, setLoading] = useState(false)
  const [ip, setIp] = useState([])
  const [location, setLocation] = useState([])
  const [lat, setLat] = useState()
  const [lng, setLng] = useState()


  useEffect(() => {
    return () => {
      setLoading(false)
    }
  }, [lat, lng])

  // const getLocation = async (term) => {
  //   try {
  //     const result = await searchIp(term)
  //     // const locationData = result.location;
  //     // setIp(result)
  //     // setLocation(locationData)
  //     // setLat(locationData.lat)
  //     // setLng(locationData.lng)
  //   } catch(err) {
  //     console.log(err)
  //   }
  // }

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
    <>
    <h3>IP address Tracker</h3>
    {loading? (<div className='text-blue-700 font-extrabold'> Loading... </div>)
     : (<>
      <SearchBar onSubmit={handleSubmit}/>
      <ShowDetails ip={ip} location={location}/>
      {lat? (<Mapping lat={lat} lng={lng} />) : (null)}
      </>
      )}
    </>
  )
}

export default App
