import axios from 'axios'

const searchIp = async (term) => {
 const res = await axios.get(`https://geo.ipify.org/api/v1?apiKey=${import.meta.env.VITE_IP_API_KEY}&ipAddress=${term}`)
      .then(response => {
          return response.data
        })
        .catch(err => {
            console.log("error", err)
        })
     return res
}

export default searchIp;