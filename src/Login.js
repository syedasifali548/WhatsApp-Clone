import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

const Login = () => { 
    const[{user} ,dispatch] =useStateValue();
    const signIn = () =>{
     auth
     .signInWithPopup(provider)
     .then((result) =>{
         dispatch({
             type:actionTypes.SET_USER,
             user:result.user,
         });
     })
     .catch((error)=>console.log(error.message))
    }
    return (
        <div className="login">
           <div className="login_container">
               <img src="https://avatars1.githubusercontent.com/u/5508982?s=280&v=4"/>
               <div className="login_text">
                   <h1>Sign in to WhatsApp</h1>
               </div>
               <Button type="submit" onClick={signIn} >Sign In with Google</Button>
           </div>
            
        </div>
    )
}

export default Login
