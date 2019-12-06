import axios from 'axios'
const apiKey = process.env.REACT_APP_API_KEY
const baseUrl = `https://newsapi.org/v2/sources?apiKey=${apiKey}`

const getSources = async () => {
    const response = await axios.get(baseUrl)
    return response.data.sources
}

export default { getSources }