import React from 'react'
import s from "./Login.module.css"
import Navbar from '../Navbar/Navbar'


const Login = () => {
  return (
    <div className={s.container}>
      <div className={s.cont1}><Navbar/></div>
      <div className={s.cont2}>
        <form className={s.sub1}>
          {/* company name , highest package , average package , no of students */}
          <div className={s.title}>Login</div>
          <div className={s.items}>
            <label htmlFor="fname">Your ID</label>
            <div><img src='./Assets/mail.svg' ></img>
              <input type="fname" id='fname' className={s.input} placeholder='Type your id' name='firstname' />
            </div>
          </div>
          <div className={s.items}>
            <label htmlFor="lname">Your Password</label>
            <div><img src='./Assets/mail.svg' ></img>
              <input type="lname" id='lname' className={s.input} placeholder='Type your password' name='lastname'/></div>
          </div>
          <div className={s.submit}>
            <button className='hover' type='submit'>Sign In</button>
            <div className={s.wrap}>
              <div className={s.first}>Forgot Password?</div>
              <div className={s.second}>click here</div>
            </div>
          </div>
        </form>
        <div className={s.sub2}>
          <img src="./Assets/login.png" />
        </div>
      </div>
    </div>
  )
}

export default Login