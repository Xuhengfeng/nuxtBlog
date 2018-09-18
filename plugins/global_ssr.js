/*
 * @Author: 徐横峰 
 * @Date: 2018-04-30 23:32:56 
 * @Last Modified by: 564297479@qq.com
 * @Last Modified time: 2018-09-18 15:51:17
 */
//重新封装axios
import Vue from 'vue'
import axios from 'axios'
import {MessageBox} from 'element-ui'//导入elementjs
import 'element-ui/lib/theme-chalk/index.css'
import {getCookieInServer, getCookieInClient} from '~/plugins/tools.js'
import url from '~/plugins/url.js'

axios.defaults.timeout = 10000;
axios.defaults.baseURL = 'http://112.74.181.229:7031/custAppApi/'
axios.defaults.headers = {'Content-Type': 'application/json'}
global.$url = url;
global.$axios = {
  fetch(url,data,req){
    setHeader(req);
    return new Promise((resolve,reject)=>{
      axios.post(url, data)
        .then(res=>{
            resolve(res);
        },err=>{
            reject(err);
        })
        .catch(err=>{
            reject(err)
        })     
    })
  },
  get(url,data,req){
    setHeader(req);
    return new Promise((resolve,reject)=>{
      axios.get(url, data)
        .then(res=>{
            resolve(res);
        },err=>{
            reject(err);
        })
        .catch(err=>{
            reject(err)
        })     
    })
  },
  post(url,data,req){
    setHeader(req);
    return new Promise((resolve,reject)=>{
      axios.post(url,data)
        .then(res=>{
            resolve(res);
        },err=>{
            reject(err);
        })
        .catch(err=>{
            reject(err)
        })     
    })
  }
}

//设置请求头
function setHeader(req) {
  if(req){
    //针对服务端渲染设置
    if(getCookieInServer(req)){
      axios.defaults.headers['token'] = getCookieInServer('token');
    }
  }else{
    //针对浏览器渲染设置
    if(getCookieInClient('token')){
      axios.defaults.headers['token'] = getCookieInClient('token');
    }
  }
}

//请求出错
function requestError(err) {
  switch (err.status) {
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
}
