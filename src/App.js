import {Route, Switch} from 'react-router-dom'

import './App.css'

import TeamMatches from './components/TeamMatches'

import Home from './components/Home'

import NotFound from './components/NotFound'

const App = () => (
  <div className="container1">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/team-matches/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
