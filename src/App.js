import React, { useEffect } from 'react'
import Main from './components/Main'
import { connect } from 'react-redux'
import { initializeSources } from './reducers/sourceReducer'
import { Container } from 'semantic-ui-react'

const App = (props) => {

  useEffect(() => {
    props.initializeSources()
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

export default connect(null, mapDispatchToProps)(App)
