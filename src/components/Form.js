import React, { Component } from 'react'
import assign from 'object-assign'
import fetch from 'isomorphic-fetch'
import findIndex from 'lodash/findIndex'
import API from '../utils/api'
import {Row, Col, Form, Input, Button } from 'antd'
const FormItem = Form.Item

class FormBox extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      Api: undefined,
      formdata: {},
      disabled: false
    }
  }
  render () {
    return (
      <div className='form-wrapper'>
      <Form>
          {this.renderFormJSX(this.state.renderForm)}
        <Row>
          <Col>
            <div className='action-wrapper'>
              <p className='port-wrap'>
                  <Input placeholder='请输入请求接口地址' onChange={this.apiChange.bind(this)} />
              </p>
              <p className='button-wrap'>
                <Button type='primary' 
                  disabled={this.state.disabled}
                  onClick={this.handleSubmit.bind(this)}
                  >提交
                </Button>
              </p>
            </div>
          </Col>
        </Row>
        </Form>
      </div>
    )
  }
  apiChange (e) {   // 接口地址更改
    let value = e.target.value   //  获取接口地址
    let index  = findIndex(API, {key: value})
    let urlObj = {}
    if (index > -1) {
      urlObj = API[index]
    } else {
      return alert('暂无该接口对应jsonSchema文件')
    }
    let requestUrl =  urlObj.key
    let requestJson = urlObj.value.request
    this.setState({ 
      disabled: false, 
      Api: requestUrl
    })
    fetch(requestJson + '?data=' + encodeURIComponent(JSON.stringify({})))
      .then( (res) => {
        return res.json()
      })
      .then((result) => {
        this.setState({
         renderForm : result
        })
      })
    this.props.changeVerify()      
  }
  renderFormJSX (renderForm) {   // 渲染form
    return ( 
      <Row>
        {(renderForm || []).map((item,index) => (
          <Col span={6} key={item.argument}>
            <FormItem  labelCol={{span: 8}} wrapperCol={{span: 16}}  label={item.label}>
              <Input onChange={this.inputChange.bind(this, item.argument)} type={item.type} placeholder={`输入${item.label}`} />         
            </FormItem>
          </Col>
        ) )}
      </Row>
      ) 
  }

  inputChange (key, e) {  // 输入input的change
    let value = e.target.value
    let values = this.state.formdata   // 获取form的values
    this.setState({
      disabled: false,
      formdata: assign({}, values, {[key]: value})
    })
    this.props.changeVerify()
  }
  handleSubmit () {   // form提交
    let params = this.state.formdata
    let api = this.state.Api
    if (api) {
      this.setState({
        disabled: true
      })
      this.props.handleSubmit(api, params)
    } else {
      return alert('请先填写接口地址')
    }
  }

}

export default FormBox