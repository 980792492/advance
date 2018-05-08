import React, { Component } from 'react'
import { Button } from 'antd'
import history from '../../utils/history'

class City extends Component {
  constructor (props) {
    super (props)
    this.state = {
    }
  }
  render () {
    return (
      <div>
        城市策划
        <Button onClick={this.routerGoto.bind(this)} type='primary' >跳转</Button>
      </div>
    )
  }
  routerGoto () {
    // return console.log(this.props)
    history.push('/city/set/two?action=qiye')
  }
}

// export default withRouter(City)
export default City
