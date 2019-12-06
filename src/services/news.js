import axios from 'axios'
const baseUrl = 'https://newsapi.org/v2/top-headlines?sources='
const apiKey = process.env.REACT_APP_API_KEY

const getTopHeadlines = async newsAgency => {

    const response = await axios.get(`${baseUrl}${newsAgency}&apiKey=${apiKey}`)
    return response.data.articles
}

export default { getTopHeadlines }