import  axios from 'axios'
import {getCookieInServer, getCookieInClient} from '~/plugins/tools.js'


export default function({store, error, req, redirect}) {
    // console.log("store:", store);
    // console.log("error:", error);
    // console.log("req:", req);
    console.log("redirect:", redirect);
    // const loggedToken = process.server ? getCookieInServer(req, 'token') : getCookieInClient('token');
    // const loggedUser = process.server ? getCookieInServer(req, 'user') : getCookieInClient('user');
    // console.log("loggedToken:", loggedToken);
    // console.log("loggedUser:", typeof loggedUser);
    // console.log("loggedUser:", JSON.parse(loggedUser));
}
