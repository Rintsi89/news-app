import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import sourceReducer from './reducers/sourceReducer'
import newsReducer from './reducers/newsReducer'

const reducer = combineReducers({
  sources: sourceReducer,
  news: newsReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store