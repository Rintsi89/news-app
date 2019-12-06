import React, { useState } from 'react'
import Select from 'react-select'
import News from './News'
import { connect } from 'react-redux'
import { getNews } from '../reducers/newsReducer'
import { Button, Icon } from 'semantic-ui-react'

const Main = (props) => {

const style = {
    display: 'flex',
    margin: '100px auto 0px auto',
    flexDirection: 'column',
    alignItems: 'center',
    width: '600px'
}

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '60%'
}

const buttonStyle = {
    margin: '10px auto',
    width: '40%'
}

const [newsAgency, setNewsAgency] = useState({ })

const options = () => {
    const optionsArray = []
    props.sources.forEach(source => {      
        const sourceToMap = {'value': source.id, 'label': source.name }   
        optionsArray.push(sourceToMap)
    })
   
    return optionsArray
}

const submit = async (e) => {
    e.preventDefault()

    await props.getNews(newsAgency.id)
  }

  return (
    <div style={style}>
    <span>
        <Icon name='globe' size='huge' />
        <Icon name='newspaper' size='huge' />
    </span>
      <h1>News from around the World</h1>
      <form onSubmit={submit} style={formStyle} >
            <Select options={options()} onChange={(e) => setNewsAgency({ id: e.value, name: e.label }) }/>
            <Button style={buttonStyle} content='Find news' primary />
      </form>
      <p>Choose news agency to search for top headlines</p>
      {props.news.length > 0 ? 
        <h2>Showing {props.news.length} top headlines from {newsAgency.name}</h2>
        : null
      }
      {props.news.map(news => <News news={news} key={news.title} />)}
      <p>Powered by <a href="https://newsapi.org/">News API</a></p>
    </div>
  )
}

const mapDispatchToProps = {
    getNews
  }

const mapStateToProps = (state) => {
  return {
    sources: state.sources,
    news: state.news
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main)