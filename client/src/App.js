import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Table from './pages/Table'
import ProtectedRoutes from './ProtectedRoutes'
import Login from './pages/Login'
import { AuthProvider } from './pages/auth'

function App() {
  return (

    <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Table" element={<Table/>}/>
    
      <Route path="/Login" element={<Login/>}/>
    </Routes>
   
  );
}

export default App;
