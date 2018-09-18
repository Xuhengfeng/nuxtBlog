//客户端中获取cookie
export function getCookieInClient(key) {
    if(!process.server){
        let cookieArr = document.cookie.replace(/\s+/g,"").split(';');
        let arr = [];
        cookieArr.forEach(item=>{
            let obj = item.split('=');
            arr[obj[0]]=obj[1];
        })
        return arr[key]
    }
}

//中间件中获取cookie
export function getCookieInServer(req, key) {
    let cookieArr = req.headers.cookie.replace(/\s+/g,"").split(';');
    let arr = [];
    cookieArr.forEach(item=>{
        let obj = item.split('=');
        arr[obj[0]]=obj[1];
    })
    console.log(typeof arr[key])
    return arr[key]
}


