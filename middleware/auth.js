import  axios from 'axios'
import {getCookieInServer, getCookieInClient} from '~/plugins/tools.js'


export default function({store, error, req, redirect}) {
    const loggedToken = process.server ? getCookieInServer(req, 'token') : getCookieInClient('token');
    const loggedUser = process.server ? getCookieInServer(req, 'user') : getCookieInClient('user');
    console.log("redirect:", redirect);
    
    if(!store.state.user) {
        return redirect('/login')
    }
    // console.log("store:", store);
    // console.log("error:", error);
    // console.log("req:", req);
    // console.log("loggedToken:", loggedToken);
    // console.log("loggedUser:", typeof loggedUser);
    // console.log("loggedUser:", JSON.parse(loggedUser));
}
