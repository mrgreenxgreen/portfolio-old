import {useState,createContext,useContext} from 'react';
import { useNavigate,useLocation, Navigate } from 'react-router-dom';
import { useAuth} from './auth'





export default function Login(){
    const [user, setUser] = useState('');
    const auth = useAuth()
    const navigate = useNavigate()
    
    const handleLogin = ()=>{
        auth.login(user)
        navigate('/')

    }
    
    return(
        <>
      
        <div>
            
            <form >
                <label>username : </label>
                <input
                type="text"
                name="username"
                onChange={(e)=> setUser(e.target.value)}
                />
                <br/>
                <br/>
                <label>password : </label>
                <input
                type="password"
                name="password"
                />
                <br/>
                <br/>
              
                <button onClick={handleLogin} >sign in</button>
            </form>
        </div>
        </>
    )
}