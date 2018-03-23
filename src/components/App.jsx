import React from 'react'
import createReactClass from 'create-react-class'
import Index from './views/Index'
import About from './views/About'
import styled, { injectGlobal } from 'styled-components'
import { Route, Switch } from 'react-router-dom'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,900');
  
  body {
    margin: 0;
  }
`

const App = createReactClass({
  render () {
    return (
      <Switch>
        <Route exact path='/' render={props => <Index />} />
        <Route path='/about' component={About} />
      </Switch>
    )
  }
})

export default App
