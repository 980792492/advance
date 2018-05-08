import React, { Component } from 'react';
import { Menu, Layout } from 'antd'
import MENU_CONF from '../../constants/menu'
import Style from './menu.less'
import history from '../../utils/history'

const { Sider } = Layout
const SubMenu = Menu.SubMenu

class Container extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  componentWillMount () {
    Style.use()
  }
  render () {
    // let userRole =  user.role.env
    let menuOptions = MENU_CONF['cityPlanerManager']
    return (
      <Sider>
        <div className='icon-wrap'>
          <span className='text'>七夜logo</span>
        </div>
        <Menu
          mode="inline"
          theme="dark"
          // openKeys={this.state.openKeys}
          onClick={this.handleCilck.bind(this)}
          >
           {menuOptions.map((item, index) => (
             item.child
             ? <SubMenu key={index} title={item.name}>{this.renderChildJSX(item.child)}</SubMenu>
             : <Menu.Item key={item.route}>{item.name}</Menu.Item>
           ) )}
          </Menu>
        </Sider>
    )
  }
  renderChildJSX (childItem) {
    return childItem.map((item, index) => (
      <Menu.Item key={item.route}>{item.name}</Menu.Item>
    ))
  }
  handleCilck (e) {
    let mextRouteto = e.key
    history.push(mextRouteto)
  }
}
export default Container