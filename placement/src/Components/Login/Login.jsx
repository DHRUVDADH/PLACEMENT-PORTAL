// import React from 'react'
// import s from "./Login.module.css"
// import Navbar from '../Navbar/Navbar'


// const Login = () => {
//   return (
//     <div className={s.container}>
//       <div className={s.cont1}><Navbar/></div>
//       <div className={s.cont2}>
//         <form className={s.sub1}>
//           {/* company name , highest package , average package , no of students */}
//           <div className={s.title}>Login</div>
//           <div className={s.items}>
//             <label htmlFor="fname">Your ID</label>
//             <div><img src='./Assets/mail.svg' ></img>
//               <input type="fname" id='fname' className={s.input} placeholder='Type your first name' name='firstname' />
//             </div>
//           </div>
//           <div className={s.items}>
//             <label htmlFor="lname">Your Password</label>
//             <div><img src='./Assets/mail.svg' ></img>
//               <input type="lname" id='lname' className={s.input} placeholder='Type your last name' name='lastname'/></div>
//           </div>
//           <div className={s.submit}>
//             <button className='hover' type='submit'>Sign In</button>
//             <div className={s.wrap}>
//               <div className={s.first}>Forgot Password?</div>
//               <div className={s.second}>click here</div>
//             </div>
//           </div>
//         </form>
//         <div className={s.sub2}>
//           <img src="./Assets/login.png" />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login

import React, { useState } from 'react';
import s from "./Login.module.css";
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.token); // Store token in localStorage
      alert('Login successful!');
      navigate('/quiz'); // Redirect to dashboard or home after login
    } else {
      alert(data.message);
    }
  };

  return (
    <div className={s.container}>
      <div className={s.cont1}><Navbar /></div>
      <div className={s.cont2}>
        <form className={s.sub1} onSubmit={handleLogin}>
          <div className={s.title}>Login</div>
          <div className={s.items}>
            <label htmlFor="email">Your ID (Email)</label>
            <div>
              <img src='./Assets/mail.svg' alt="mail" />
              <input
                type="email"
                id="email"
                className={s.input}
                placeholder="Type your email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className={s.items}>
            <label htmlFor="password">Your Password</label>
            <div>
              <img src='./Assets/key.svg' alt="key" />
              <input
                type="password"
                id="password"
                className={s.input}
                placeholder="Type your password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className={s.submit}>
            <button className="hover" type="submit">Sign In</button>
            <div className={s.wrap}>
              <div className={s.first}>Forgot Password?</div>
              <div className={s.second}>click here</div>
            </div>
            <p>
              Don't have an account?{" "}
              <span onClick={() => navigate("/signup")}>Login</span>
            </p>
          </div>
        </form>
        <div className={s.sub2}>
          <img src="./Assets/login.png" alt="login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
