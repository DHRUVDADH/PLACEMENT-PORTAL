import React from 'react'
import './App.css'
import { Route, Routes} from 'react-router-dom'
import AppProviders from './Context/AppReducers'
import HomePage  from './Pages/HomePage/HomePage'
import SignUp from './Components/SignUp/SignUp'
import Login from './Components/Login/Login'
import Quiz from './Pages/Quiz Page/Quiz'
import ProfilePage from './Pages/ProfilePage/ProfilePage'


const App = () => {
  return (
    <AppProviders>
      <div className="mainContainer">
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/quiz' element={<Quiz/>}></Route>
          <Route path='/profile' element={<ProfilePage/>}></Route>
        </Routes>
      </div>
    </AppProviders>

  )
}

export default App