/*
 * @Author: 徐横峰 
 * @Date: 2018-04-30 23:32:56 
 * @Last Modified by: Xuhengfeng
 * @Last Modified time: 2018-09-16 19:39:02
 */
//重新封装axios
import Vue from 'vue'
import axios from 'axios'
import {MessageBox} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
console.log(MessageBox.alert(5555555555))
let cancel ,promiseArr = {}
const CancelToken = axios.CancelToken;
//请求拦截器
axios.interceptors.request.use(
  config => {
    //发起请求时，取消掉当前正在进行的相同请求
    if (promiseArr[config.url]) {
      promiseArr[config.url]('操作取消')
      promiseArr[config.url] = cancel
    } else {
      promiseArr[config.url] = cancel
    }
    config.headers = {
      'unique-code': sessionStorage.token,
      'scity': JSON.parse(localStorage.selectCity).value
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
//响应拦截器即异常处理
axios.interceptors.response.use(response => {
    return response
}, err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:MessageBox.alert('错误请求');break;
        case 401:MessageBox.alert('未授权，请重新登录');break;
        case 403:MessageBox.alert('拒绝访问');break;
        case 404:MessageBox.alert('请求错误,未找到该资源');break;
        case 405:MessageBox.alert('请求方法未允许');break;
        case 408:MessageBox.alert('请求超时');break;
        case 500:MessageBox.alert('服务器端出错');break;
        case 501:MessageBox.alert('网络未实现');break;
        case 502:MessageBox.alert('网络错误');break;
        case 503:MessageBox.alert('服务不可用');break;
        case 504:MessageBox.alert('网络超时');break;
        case 505:MessageBox.alert('http版本不支持该请求');break;
        default:MessageBox.alert(`连接错误${err.response.status}`);
      }
    }else{
    //  MessageBox.alert('连接到服务器失败')
    }
    // message.error(err.message)
    return Promise.resolve(err.response)
})

axios.defaults.baseURL = '/api'
//设置默认请求头
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest'
}
axios.defaults.timeout = 10000
Vue.prototype.$http = axios;