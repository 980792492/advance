import React, { Component } from 'react'
import { Avatar } from 'antd'
import history from '../../../utils/history'
import Style from './index.less'
class Top extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  } 
  componentWillMount () {
    Style.use()
  }
  render () {
    return (
      <div className='header-top'>
        <a className='back-icon' onClick={this.goback.bind(this)} >{'< < 返回'}</a>
        <a className='user-icon-wrapper'>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <span className='text'>七夜(测试角色)</span>
        </a>
      </div>
    )
  }
  goback () {
    history.goBack()
  }
}
export default Top