import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './login'
import Signup from './signup'
import Home from './Home'
function App() {


  return (
   <BrowserRouter> 
   <Routes> 
    <Route path='/register' element={<Signup/>}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/home' element={<Home/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
