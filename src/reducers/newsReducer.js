import newsService from '../services/news'

const newsReducer = (state = [], action) => {
    switch (action.type) {
    case 'SET_NEWS':
      return action.data
    default:
      return state
    }
}

export const getNews = newsAgency => {
    return async dispatch => {
        const news = await newsService.getTopHeadlines(newsAgency)
        dispatch({
          type: 'SET_NEWS',
          data: news
        })
    }
}

export default newsReducer