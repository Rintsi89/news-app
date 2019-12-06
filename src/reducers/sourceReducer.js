import sourceService from '../services/sources'

const sourceReducer = (state = [], action) => {
    switch (action.type) {
    case 'INIT_SOURCES':
      return action.data
    default:
      return state
    }
}

export const initializeSources = () => {
    return async dispatch => {
        const sources = await sourceService.getSources()
        dispatch({
          type: 'INIT_SOURCES',
          data: sources
        })
    }
}

export default sourceReducer