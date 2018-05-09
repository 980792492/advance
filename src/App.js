import React, { Component } from 'react';
import { Layout } from 'antd'
import Menu from './components/common/menu'
import Top from './components/common/Top/index'
import Style from './App.less'

// import AppRouter from './routes/routes'

// import App1 from './App.1' 
// import App2 from './App.2' 
// import App3 from './App.3'   *
// import App4 from './App.4'   *
// import App5 from './App.5' 
// import App6 from './App.6' 
// import App7 from './App.7'
import App8 from './App.8'

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
            {/* <App1 /> */}
            {/* <App2 /> */}
            {/* <App3/> */}
            {/* <App4 /> */}
            {/* <App5 />*/}
            {/* <App6 /> */}
            {/* <App7 /> */}
            <App8 />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
