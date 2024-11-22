// import React from 'react'
// import s from "./SignUp.module.css"
// import Navbar from '../Navbar/Navbar'


// const SignUp = () => {
//   return (
//     <div className={s.container}>
//       <div className={s.cont1}><Navbar/></div>
//       <div className={s.cont2}>
//         <form className={s.sub1}>
//           {/* company name , highest package , average package , no of students */}
//           <div className={`${s.title}`}>Signup</div>
//           <div className={s.items}>
//             <label htmlFor="fname">Your first name</label>
//             <div><img src='./Assets/mail.svg' ></img>
//               <input type="fname" id='fname' className={s.input} placeholder='Type your first name' name='firstname' />
//             </div>
//           </div>
//           <div className={s.items}>
//             <label htmlFor="lname">Your last name</label>
//             <div><img src='./Assets/mail.svg' ></img>
//               <input type="lname" id='lname' className={s.input} placeholder='Type your last name' name='lastname'/></div>
//           </div>
//           <div className={s.items}>
//             <label htmlFor="email">Registered email address</label>
//             <div><img src='./Assets/mail.svg' ></img>
//               <input type="email" id='email' className={s.input} placeholder='Type your email' name='email'/></div>
//           </div>
//           <div className={s.items}>
//             <label htmlFor="id">Student ID</label>
//             <div><img src='./Assets/id.svg' ></img>
//               <input type="text" id='id' className={s.input} placeholder='Type your ID' name='student_id'/></div>
//           </div>
//           <div className={s.items}>
//             <label htmlFor="password">Password</label>
//             <div><img src='./Assets/key.svg' ></img>
//               <input type="text" id='password' className={s.input} placeholder='Type your password' name='password'/></div>
//           </div>
//           <div className={s.submit}>
//             <button className='hover' type='submit'>Sign In</button>
//           <p>
//             Already have an account?{" "}
//             <span onClick={() => navigate("/C:\Users\BHARGAV DUNGRANI\placement portal\PLACEMENT-PORTAL\placement\src\Components\Login\Login.jsx")}>Login</span>
//           </p>
//           </div>
//         </form>
//         <div className={s.sub2}>
//           <img src="./Assets/signup.png" />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SignUp

import React, { useState } from 'react';
import s from "./SignUp.module.css";
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom'; // You need this to navigate

const SignUp = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [student_id, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        student_id,
        password,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      alert('Signup successful!');
      navigate('/login'); // Navigate to the login page after successful signup
    } else {
      alert(data.message);
    }
  };

  return (
    <div className={s.container}>
      <div className={s.cont1}><Navbar /></div>
      <div className={s.cont2}>
        <form className={s.sub1} onSubmit={handleSignUp}>
          <div className={`${s.title}`}>Signup</div>
          <div className={s.items}>
            <label htmlFor="fname">Your first name</label>
            <div>
              <img src='./Assets/mail.svg' alt="mail" />
              <input
                type="text"
                id='fname'
                className={s.input}
                placeholder='Type your first name'
                name='firstname'
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
          </div>
          <div className={s.items}>
            <label htmlFor="lname">Your last name</label>
            <div>
              <img src='./Assets/mail.svg' alt="mail" />
              <input
                type="text"
                id='lname'
                className={s.input}
                placeholder='Type your last name'
                name='lastname'
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </div>
          <div className={s.items}>
            <label htmlFor="email">Registered email address</label>
            <div>
              <img src='./Assets/mail.svg' alt="mail" />
              <input
                type="email"
                id='email'
                className={s.input}
                placeholder='Type your email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className={s.items}>
            <label htmlFor="id">Student ID</label>
            <div>
              <img src='./Assets/id.svg' alt="id" />
              <input
                type="text"
                id='id'
                className={s.input}
                placeholder='Type your ID'
                name='student_id'
                value={student_id}
                onChange={(e) => setStudentId(e.target.value)}
              />
            </div>
          </div>
          <div className={s.items}>
            <label htmlFor="password">Password</label>
            <div>
              <img src='./Assets/key.svg' alt="key" />
              <input
                type="password"
                id='password'
                className={s.input}
                placeholder='Type your password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className={s.submit}>
            <button className='hover' type='submit'>Sign Up</button>
            <p>
              Already have an account?{" "}
              <span onClick={() => navigate("/login")}>Login</span>
            </p>
          </div>
        </form>
        <div className={s.sub2}>
          <img src="./Assets/signup.png" alt="signup" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
