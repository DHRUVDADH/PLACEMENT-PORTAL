// import React from 'react'
// import './App.css'
// import { Route, Routes} from 'react-router-dom'
// import AppProviders from './Context/AppReducers'
// import HomePage  from './Pages/HomePage/HomePage'
// import SignUp from './Components/SignUp/SignUp'
// import Login from './Components/Login/Login'
// import Quiz from './Pages/Quiz Page/Quiz'
// import ProfilePage from './Pages/ProfilePage/ProfilePage'
// import ProtectedRoute from './Components/ProtectedRoute'


// const App = () => {
//   return (
//     <AppProviders>
//       <div className="mainContainer">
//         <Routes>
//           <Route path='/' element={<HomePage/>}></Route>
//           <Route path='/login' element={<Login/>}></Route>
//           <Route path='/signup' element={<SignUp/>}></Route>
//           <Route path='/quiz' element={<Quiz/>}></Route>
//           {/* <Route path='/profile' element={<ProfilePage/>}></Route> */}
//           {/* <Route
//           path="/profile"
//           element={<ProtectedRoute element={<ProfilePage />} />}></Route> */}
//           <Route path="/profile" element={<ProtectedRoute element={<ProfilePage/>} />} />
//         </Routes>
//       </div>
//     </AppProviders>

//   )
// }

// export default App



import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AppProviders from './Context/AppReducers';
import HomePage from './Pages/HomePage/HomePage';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import Quiz from './Pages/Quiz Page/Quiz';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import ProtectedRoute from './Context/ProtectedRoute';

const App = () => {
  return (
    <AppProviders>
      <div className="mainContainer">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/quiz' element={<Quiz />} />
          {/* Wrap ProfilePage with ProtectedRoute */}
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
        </Routes>
      </div>
    </AppProviders>
  );
}

export default App;
