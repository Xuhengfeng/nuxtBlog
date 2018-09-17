/*
 * @Author: 徐横峰 
 * @Date: 2018-04-30 23:32:56 
 * @Last Modified by: 564297479@qq.com
 * @Last Modified time: 2018-09-17 18:08:32
 */
//重新封装axios
import Vue from 'vue'
import axios from 'axios'
import {Message, MessageBox, Notification,
        Dialog,Button, Pagination, Checkbox,
        Steps, Step,Tooltip,Table,TableColumn,
        Form,FormItem,Input,Rate} from 'element-ui'//导入elementjs
import 'element-ui/lib/theme-chalk/index.css'
import {getCookie} from './utils'
import url from './url'


Vue.prototype.$alert = MessageBox.alert//弹出框
Vue.prototype.$confirm = MessageBox.confirm//确认框
Vue.prototype.$prompt = MessageBox.prompt//可编辑弹出框
Vue.prototype.$message = Message//消息提示
Vue.prototype.$notify = Notification //通知

Vue.component(Table.name, Table);//表格
Vue.component(TableColumn.name, TableColumn);//表格
Vue.component(Button.name, Button);//按钮
Vue.component(Dialog.name, Dialog);//对话框
Vue.component(Pagination.name, Pagination);//分页器
Vue.component(Checkbox.name, Checkbox);//单选框
Vue.component(Steps.name, Steps);//步骤条1
Vue.component(Step.name, Step);//步骤条2
Vue.component(Tooltip.name, Tooltip);//tip提示
Vue.component(Form.name, Form);//表单
Vue.component(FormItem.name, FormItem);//表单项
Vue.component(Input.name, Input);//输入框
Vue.component(Rate.name, Rate);//星星


let cancel ,promiseArr = {}
const CancelToken = axios.CancelToken;
let path_type = 'dev';
let options = {
  baseURL: path_type=='dev' ? 'http://112.74.181.229:7031/custAppApi/' : ''
}

options.headers = {
  'Content-Type': 'application/json'
}
axios.defaults.timeout = 10000;
let newAxios = axios.create(options)

//请求拦截器
newAxios.interceptors.request.use(
  config => {
    //针对客户端设置请求头信息
    if(!process.server){
      config.headers['scity'] = getCookie('scity');
    }
    return config; 
  },
  err => {
    return Promise.reject(err);
  }
);

// 我这些没有问题  我是直接拿我vue-cli 里 项目用的
// 你把这块调试一下应该就可以了 嗯  

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



global.$axios = newAxios;
global.$url = url;
