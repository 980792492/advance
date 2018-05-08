import React, { Component } from 'react'
// import {withRouter} from 'react-router-dom'
import queryString from 'query-string'

class PlanTwo extends Component {
  constructor (props) {
    super (props)
    this.state = {

    }
  }
  componentWillMount () {
    console.log(queryString.parse(this.props.location.search))
  }
  render () {
    return (
      <div>城市策划2</div>
    )
  }
}

export default PlanTwo