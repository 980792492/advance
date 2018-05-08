import React, { Component } from 'react'
import FormBox from './components/Form'
import Result from './components/result'
import fetch from 'isomorphic-fetch'
import Style from './schems.less'
import findIndex from 'lodash/findIndex'
import API from './utils/api'
import tv4 from 'tv4'

class SchemaComponent extends Component {
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
      <div className='schems-content-wrapper'>      
        <FormBox
          submit={this.handleSubmit.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
          changeVerify={() => {this.setState({valid: undefined})} }          
        />
        <Result 
          valid={this.state.valid}
        />
      </div>
    )
  }
  handleSubmit (api, params) {
    let url = api
    fetch(url + '?data=' + encodeURIComponent(JSON.stringify(params || {})), {headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }, credentials: 'include'})
      .then((res) => {
        return res.json()
      })
      .then(result => {
        this.verifyResponse(url, result)
      })

    // let url = '/leo/1.0/shopManage/list'  公海列表接口
  }
  verifyResponse (url, result) {
    let index  = findIndex(API, {key: url})
    let urlObj = {}
    if (index > -1) {
      urlObj = API[index]
    }
    let responseJson = urlObj.value.response    
    fetch(responseJson + '?data=' + encodeURIComponent(JSON.stringify({})))
    .then( (res) => {
      if (res.ok) {
        return res.json()
      }
    })
    .then((resultJson) => {
      //  此处校验接口返回结果是否匹配jsonchema文件
      // console.log(resultJson)  //  json文件数据
      // console.log(result)      接口数据
      let valid = tv4.validate(result, resultJson)
      if(!valid) {
        console.log(tv4.error)
      }
      this.setState({
        valid: valid
      })
      
    })
  }

  componentWillUnmount () {
    Style.unuse()
  }
}

export default SchemaComponent