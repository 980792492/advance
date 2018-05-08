import React, { Component } from 'react';
import { Layout } from 'antd'
import Menu from './components/common/menu'
import Top from './components/common/Top/index'
import Style from './App.less'

// import AppRouter from './routes/App'

// import App2 from './App.2'
// import App3 from './App.3'
// import App4 from './App.4'

import Schems from './schema'
const { Header, Content } = Layout


class App extends Component {
  componentWillMount () {
    Style.use()
  }
  render() {
    return (
      <div className="App clearfix">
        <Menu />
        <Layout>
          <Header style={{background: '#fff'}} >
            <Top />
          </Header>
          <Content className='content-wrapper'>
            {/* <AppRouter /> */}
            {/* <App2 /> */}
            {/* <App3/> */}
            {/* <App4 /> */}
            <Schems />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
