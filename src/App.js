import React, { useEffect } from 'react'
import Main from './components/Main'
import { connect } from 'react-redux'
import { initializeSources } from './reducers/sourceReducer'
import { Container } from 'semantic-ui-react'

const App = (props) => {

  useEffect(() => {

    const getData = async () => {
      if (!props.removals) {
        await props.initializeSources()
      }
     
    }
   getData()
  }, [])

  return (
    <Container>
      <Main /> 
    </Container>
  )
}

const mapDispatchToProps = {
  initializeSources
}

const mapStateToProps = (state) => {
  return {
    sources: state.sources
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
