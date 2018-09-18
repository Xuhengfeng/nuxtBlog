import Vue from 'vue'
import {Message, MessageBox, Notification,
        Dialog,Button, Pagination, Checkbox,
        Steps, Step,Tooltip,Table,TableColumn,
        Form,FormItem,Input,Rate} from 'element-ui'//导入elementjs
import 'element-ui/lib/theme-chalk/index.css'

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
