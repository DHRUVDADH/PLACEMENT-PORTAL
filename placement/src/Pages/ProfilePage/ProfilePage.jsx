import React, { useContext } from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import s from "./ProfilePage.module.css";
import { UserInfoContext } from "../../Context/UserInfoContext";

const ProfilePage = () => {
  const { userinfo } = useContext(UserInfoContext);  // Extract user info from context
  console.log(userinfo);

  return (
    <div className={s.container}>
      <div className={s.cont1}>
        <Navbar />
      </div>
      <div className={s.cont2}>
        <div className={s.left}>
          {/* Skill Section */}
          <div className={s.sub1}>
            <div className={s.title}>Skills</div>
            <div className={s.desc}>
              {userinfo.skills.map((skill) => (
                <p key={skill.id}>{skill.name}: {skill.percent}%</p>
              ))}
            </div>
            <div className={s.chart}></div>
          </div>

          {/* Languages Section */}
          <div className={s.sub2}>
            <div className={s.title}>Languages</div>
            <div className={s.desc}>
              {userinfo.languages?.length > 0
                ? userinfo.languages.map((lang, index) => (
                  <p key={index}>{lang.name}: {lang.percent}%</p>
                ))
                : 'No languages specified'}
            </div>
            <div className={s.chart}></div>
          </div>
        </div>
        <div className={s.middle}>
          {/* CGPA Section */}
          <div className={s.sub1}>
            <div className={s.title}>CGPA</div>
            <div className={s.desc}>{userinfo.cgpa || 'N/A'}</div>
            <div className={s.chart}></div>
          </div>

          {/* PDF Upload Section */}
          <div className={s.sub2}>
            <div className={s.title}>Upload Resume</div>
            <input type="file" accept="application/pdf" />
          </div>
        </div>
        {/* User Info Section */}
        <div className={s.right}>
          <div className={s.title}>User Information</div>
          <div className={s.userInfo}>
            <p>Name: {userinfo.name || 'N/A'}</p>
            <p>Email: {userinfo.email || 'N/A'}</p>
            <p>Date of Birth: {userinfo.dob || 'N/A'}</p>
            <p>Address: {userinfo.address || 'N/A'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;