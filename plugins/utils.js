export function getCookie(key) {
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