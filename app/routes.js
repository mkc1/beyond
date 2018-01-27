import React from 'react'
import {Route, Switch} from 'react-router-dom'

import LandingPage from './components/LandingPage'

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={LandingPage} />
      </Switch>
    </div>
  )
}

export default Routes
