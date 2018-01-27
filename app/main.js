'use strict'

import React from 'react'
import {Router} from 'react-router'
import {render} from 'react-dom'
import history from './history'
import Routes from './routes'

render(
  <Router history={history}>
    <Routes />
  </Router>
  ,
  document.getElementById('main')
)
