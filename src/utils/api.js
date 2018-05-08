const API = [
  {
    key: '/leo/1.0/shopManage/list',
    value: {
      request: '/schema/shopmanage/store/public/request.json',
      response: '/schema/shopmanage/store/public/response.json'
    }
  },
  {
    key: '',
    value: {
      request: '',
      response: ''
    }
  }
]

export default API

// import Utils from './index'
// require('es6-promise').polyfill()
// require('isomorphic-fetch')


// function FetchError (msg, code) {
//   return {
//     message: msg,
//     code: code
//   }
// }

// function json (response) {
//   if (response.status >= 400) {
//     throw FetchError(response.statusText, response.status)
//   }
//   return response.json()
// }

// function success (scheme, data) {
//   return function (json) {
//     if (!json) {
//       throw FetchError('未知错误', -1)
//     }
//     if (!json.success) {
//       throw FetchError(json.msg, json.code)
//     }

//     scheme.success && scheme.success(json.data)
//     scheme.dispatch({
//       type: scheme.types[1],
//       payload: json.data,
//       requestData: data,
//       raw: json
//     })
//   }
// }

// function error (scheme, data) {
//   return function (error) {
//     // if (error.code && error.code === API_CODE_NEED_LOGIN) {
//     //         // 重定向到登录页
//     //   return
//     // }
//     scheme.dispatch({
//       type: scheme.types[2],
//       error: error,
//       requestData: data
//     })
//   }
// }

// function get (api, data) {
//   return fetch(Utils.url(api) + ('&data=' + encodeURIComponent(JSON.stringify(data || {}))), {
//     credentials: 'same-origin'
//   }).then(json)
// }

// export default {
//   get: function (scheme, api, data) {
//     if (typeof scheme === 'string') {
//       return get(scheme, api)
//     }

//     scheme.dispatch({
//       type: scheme.types[0]
//     })

//     return get(api, data)
//             .then(success(scheme, data))
//             .catch(error(scheme, data))
//   },
// }
