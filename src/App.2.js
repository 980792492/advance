// url参数

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const ParamsExample = () => (
  <Router>
    <div>
      <h2>账号</h2>
      <ul>
        <li><Link to="/qiye/react-router">React Router</Link></li>
        <li><Link to="/qiye/leoashin">LeoAshin</Link></li>
        <li><Link to="/qiye/justjavac">justjavac</Link></li>
        <li><Link to="/qiye/reacttraining">React Training</Link></li>
      </ul>
      <Route exact path="/" component={Home}/>
      <Route path="/qiye/:id" component={Child}/>
    </div>
  </Router>
)

const Home = () => (
  <div>Home</div>
)

const Child = ({ match }) => {
  console.log({match})
  return (
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>
  )
}

// const Child = ({ match }) => (
//   <div>
//     <h3>ID: {match.params.id}</h3>
//   </div>
// )

export default ParamsExample