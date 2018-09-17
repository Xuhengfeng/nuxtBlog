import  axios from 'axios'
//针对服务端借助中间件的req里的cookie传值 设置请求头
export default function({req,res}) {
    console.log(req.headers)
    function getCookie(key){
        let cookieArr = req.headers.cookie.replace(/\s+/g,"").split(';');
        let arr = [];
        cookieArr.forEach(item=>{
            let obj = item.split('=');
            arr[obj[0]]=obj[1];
        })
        return arr[key]
    }
    axios.defaults.headers['scity'] = getCookie('scity');
}