import React from 'react'
import s from './HomePage.module.css'
import {Link} from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'

const HomePage = () => {
  return (
    <div className={s.container}>
      <div className={s.navbarComp}>
        <Navbar />
      </div>
      <div className={s.comp1}>
        <div className={s.sub1}>
          <div className={s.item1}>Placement Aptitude Portal</div>
          <div className={s.item2}>Charotar University of Science and Technology</div>
        </div>
        <Link to={"/login"} className={s.sub2}>Login</Link>
      </div>
    </div>
  )
}

export default HomePage
