import React from 'react'
import s from "./SignUp.module.css"
import Navbar from '../Navbar/Navbar'


const SignUp = () => {
  return (
    <div className={s.container}>
      <div className={s.cont1}><Navbar/></div>
      <div className={s.cont2}>
        <form className={s.sub1}>
          {/* company name , highest package , average package , no of students */}
          <div className={`${s.title}`}>Signup</div>
          <div className={s.items}>
            <label htmlFor="fname">Your first name</label>
            <div><img src='./Assets/mail.svg' ></img>
              <input type="fname" id='fname' className={s.input} placeholder='Type your first name' name='firstname' />
            </div>
          </div>
          <div className={s.items}>
            <label htmlFor="lname">Your last name</label>
            <div><img src='./Assets/mail.svg' ></img>
              <input type="lname" id='lname' className={s.input} placeholder='Type your last name' name='lastname'/></div>
          </div>
          <div className={s.items}>
            <label htmlFor="email">Registered email address</label>
            <div><img src='./Assets/mail.svg' ></img>
              <input type="email" id='email' className={s.input} placeholder='Type your email' name='email'/></div>
          </div>
          <div className={s.items}>
            <label htmlFor="id">Student ID</label>
            <div><img src='./Assets/id.svg' ></img>
              <input type="text" id='id' className={s.input} placeholder='Type your ID' name='student_id'/></div>
          </div>
          <div className={s.items}>
            <label htmlFor="password">Password</label>
            <div><img src='./Assets/key.svg' ></img>
              <input type="text" id='password' className={s.input} placeholder='Type your password' name='password'/></div>
          </div>
          <div className={s.submit}>
            <button className='hover' type='submit'>Sign In</button>
          </div>
        </form>
        <div className={s.sub2}>
          <img src="./Assets/signup.png" />
        </div>
      </div>
    </div>
  )
}

export default SignUp