import {Navigate, Outlet} from "react-router-dom";
import { useAuth } from "./pages/auth";



const ProtectedRoutes = ()=>{
    const auth = useAuth()
    const isAuth = auth.user
    
   
    return isAuth ? <Outlet /> : <Navigate to="/login" />
    
}

export default ProtectedRoutes;