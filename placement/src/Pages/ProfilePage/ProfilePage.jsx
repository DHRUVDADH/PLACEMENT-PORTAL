// import React, { useContext } from 'react';
// import Navbar from "../../Components/Navbar/Navbar";
// import s from "./ProfilePage.module.css";
// import { UserInfoContext } from "../../Context/UserInfoContext";

// const ProfilePage = () => {
//   const { userinfo } = useContext(UserInfoContext);

//   if (!userinfo) {
//     return <div>Loading user information...</div>;
//   }
//   console.log(userinfo);

//   return (
//     <div className={s.container}>
//       <div className={s.cont1}>
//         <Navbar />
//       </div>
//       <div className={s.cont2}>
//         <div className={s.left}>
//           {/* Skill Section */}
//           <div className={s.sub1}>
//             <div className={s.title}>Skills</div>
//             <div className={s.desc}>
//               {userinfo.skills.map((skill) => (
//                 <p key={skill.id}>{skill.name}: {skill.percent}%</p>
//               ))}
//             </div>
//             <div className={s.chart}></div>
//           </div>

//           {/* Languages Section */}
//           <div className={s.sub2}>
//             <div className={s.title}>Languages</div>
//             <div className={s.desc}>
//               {userinfo.languages?.length > 0
//                 ? userinfo.languages.map((lang, index) => (
//                   <p key={index}>{lang.name}: {lang.percent}%</p>
//                 ))
//                 : 'No languages specified'}
//             </div>
//             <div className={s.chart}></div>
//           </div>
//         </div>
//         <div className={s.middle}>
//           {/* CGPA Section */}
//           <div className={s.sub1}>
//             <div className={s.title}>CGPA</div>
//             <div className={s.desc}>{userinfo.cgpa || 'N/A'}</div>
//             <div className={s.chart}></div>
//           </div>

//           {/* PDF Upload Section */}
//           <div className={s.sub2}>
//             <div className={s.title}>Upload Resume</div>
//             <input type="file" accept="application/pdf" />
//           </div>
//         </div>
//         {/* User Info Section */}
//         <div className={s.right}>
//           <div className={s.title}>User Information</div>
//           <div className={s.userInfo}>
//             <p>Name: {userinfo.name || 'N/A'}</p>
//             <p>Email: {userinfo.email || 'N/A'}</p>
//             <p>Date of Birth: {userinfo.dob || 'N/A'}</p>
//             <p>Address: {userinfo.address || 'N/A'}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

// import React, { useContext } from "react";
// import Navbar from "../../Components/Navbar/Navbar";
// import s from "./ProfilePage.module.css";
// import { UserInfoContext } from "../../Context/UserInfoContext";

// const ProfilePage = () => {
//   const { userinfo } = useContext(UserInfoContext);

//   if (!userinfo) {
//     return <div>Loading user information...</div>;
//   }
//   console.log(userinfo);

//   return (
//     <div className={s.container}>
//       <div className={s.cont1}>
//         <Navbar />
//       </div>
//       <div className={s.cont2}>
//         <div className={s.left}>
//           {/* Skills Section */}
//           <div className={s.sub1}>
//             <div className={s.title}>Skills</div>
//             <div className={s.desc}>
//               {userinfo.skills?.length > 0 ? (
//                 userinfo.skills.map((skill) => (
//                   <p key={skill.id}>
//                     {skill.name}: {skill.percent}%
//                   </p>
//                 ))
//               ) : (
//                 <p>No skills added</p>
//               )}
//             </div>
//           </div>

//           {/* Languages Section */}
//           <div className={s.sub2}>
//             <div className={s.title}>Languages</div>
//             <div className={s.desc}>
//               {userinfo.languages?.length > 0 ? (
//                 userinfo.languages.map((lang, index) => (
//                   <p key={index}>
//                     {lang.name}: {lang.percent}%
//                   </p>
//                 ))
//               ) : (
//                 <p>No languages specified</p>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Middle Section */}
//         <div className={s.middle}>
//           <div className={s.sub1}>
//             <div className={s.title}>CGPA</div>
//             <div className={s.desc}>{userinfo.cgpa || "N/A"}</div>
//           </div>
//           <div className={s.sub2}>
//             <div className={s.title}>Upload Resume</div>
//             <input type="file" accept="application/pdf" />
//           </div>
//         </div>

//         {/* User Info Section */}
//         <div className={s.right}>
//           <div className={s.title}>User Information</div>
//           <div className={s.userInfo}>
//             <p>Name: {userinfo.name || "N/A"}</p>
//             <p>Email: {userinfo.email || "N/A"}</p>
//             <p>Date of Birth: {userinfo.dob || "N/A"}</p>
//             <p>Address: {userinfo.address || "N/A"}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;



// import React, { useContext } from "react";
// import Navbar from "../../Components/Navbar/Navbar";
// import s from "./ProfilePage.module.css";
// import { UserInfoContext } from "../../Context/UserInfoContext";

// const ProfilePage = () => {
//   const { userinfo } = useContext(UserInfoContext);

//   // Check if userinfo is still loading or unavailable
//   if (!userinfo) {
//     return <div className={s.loading}>Loading user information...</div>;
//   }

//   return (
//     <div className={s.container}>
//       {/* Navbar Section */}
//       <div className={s.cont1}>
//         <Navbar />
//       </div>

//       {/* Main Profile Section */}
//       <div className={s.cont2}>
//         {/* Left Column: Skills and Languages */}
//         <div className={s.left}>
//           {/* Skills Section */}
//           <div className={s.sub1}>
//             <div className={s.title}>Skills</div>
//             <div className={s.desc}>
//               {userinfo.skills?.length > 0 ? (
//                 userinfo.skills.map((skill) => (
//                   <p key={skill.id}>
//                     <strong>{skill.name}</strong>: {skill.percent}%
//                   </p>
//                 ))
//               ) : (
//                 <p>No skills added</p>
//               )}
//             </div>
//           </div>

//           {/* Languages Section */}
//           <div className={s.sub2}>
//             <div className={s.title}>Languages</div>
//             <div className={s.desc}>
//               {userinfo.languages?.length > 0 ? (
//                 userinfo.languages.map((lang, index) => (
//                   <p key={index}>
//                     <strong>{lang.name}</strong>: {lang.percent}%
//                   </p>
//                 ))
//               ) : (
//                 <p>No languages specified</p>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Middle Column: CGPA and Resume Upload */}
//         <div className={s.middle}>
//           <div className={s.sub1}>
//             <div className={s.title}>CGPA</div>
//             <div className={s.desc}>
//               {userinfo.cgpa ? `${userinfo.cgpa}/10` : "N/A"}
//             </div>
//           </div>
//           <div className={s.sub2}>
//             <div className={s.title}>Upload Resume</div>
//             <input type="file" accept="application/pdf" className={s.fileInput} />
//           </div>
//         </div>

//         {/* Right Column: User Information */}
//         <div className={s.right}>
//           <div className={s.title}>User Information</div>
//           <div className={s.userInfo}>
//             <p>
//               <strong>Name:</strong> {userinfo.name || "N/A"}
//             </p>
//             <p>
//               <strong>Email:</strong> {userinfo.email || "N/A"}
//             </p>
//             <p>
//               <strong>Date of Birth:</strong> {userinfo.dob || "N/A"}
//             </p>
//             <p>
//               <strong>Address:</strong> {userinfo.address || "N/A"}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;


import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import s from "./ProfilePage.module.css";

const ProfilePage = () => {
  const [userinfo, setUserinfo] = useState({
    name: "",
    email: "",
    dob: "",
    address: "",
    skills: [],
    languages: [],
  });

  const [newSkill, setNewSkill] = useState({ name: "", percent: "" });
  const [newLanguage, setNewLanguage] = useState({ name: "", percent: "" });
  const [showSkillInput, setShowSkillInput] = useState(false);
  const [showLanguageInput, setShowLanguageInput] = useState(false);
  const [mode, setMode] = useState("edit"); // Mode for toggle between 'edit' and 'view'

  const handleSaveInfo = (field, value) => {
    setUserinfo({ ...userinfo, [field]: value });
  };

  const handleAddSkill = () => {
    if (newSkill.name && newSkill.percent) {
      const updatedSkills = [
        ...userinfo.skills,
        { id: Date.now(), name: newSkill.name, percent: newSkill.percent },
      ];
      setUserinfo({ ...userinfo, skills: updatedSkills });
      setNewSkill({ name: "", percent: "" });
      setShowSkillInput(false);
    }
  };

  const handleAddLanguage = () => {
    if (newLanguage.name && newLanguage.percent) {
      const updatedLanguages = [
        ...userinfo.languages,
        { id: Date.now(), name: newLanguage.name, percent: newLanguage.percent },
      ];
      setUserinfo({ ...userinfo, languages: updatedLanguages });
      setNewLanguage({ name: "", percent: "" });
      setShowLanguageInput(false);
    }
  };

  const handleToggleMode = () => {
    setMode(mode === "edit" ? "view" : "edit"); // Toggle between 'edit' and 'view'
  };

  return (
    <div className={s.container}>
      <div className={s.cont1}>
        <Navbar />
      </div>

      <div className={s.cont2}>
        {/* Left Column: Skills and CGPA */}
        <div className={s.left}>
          {/* Skills Section */}
          <div className={s.sub1}>
            <div className={s.title}>
              Skills
              <button
                className={s.addButton}
                onClick={() => setShowSkillInput(!showSkillInput)}
              >
                +
              </button>
            </div>
            <div className={s.desc}>
              {userinfo.skills?.length > 0 ? (
                userinfo.skills.map((skill) => (
                  <div key={skill.id} className={s.skillItem}>
                    {mode === "edit" ? (
                      <>
                        <input
                          type="text"
                          value={skill.name}
                          onChange={(e) =>
                            setUserinfo({
                              ...userinfo,
                              skills: userinfo.skills.map((s) =>
                                s.id === skill.id
                                  ? { ...s, name: e.target.value }
                                  : s
                              ),
                            })
                          }
                          className={s.input}
                        />
                        <input
                          type="number"
                          value={skill.percent}
                          onChange={(e) =>
                            setUserinfo({
                              ...userinfo,
                              skills: userinfo.skills.map((s) =>
                                s.id === skill.id
                                  ? { ...s, percent: e.target.value }
                                  : s
                              ),
                            })
                          }
                          className={s.input}
                          min="0"
                          max="100"
                        />
                      </>
                    ) : (
                      <>
                        <strong>{skill.name}</strong>: {skill.percent}%
                      </>
                    )}
                    {mode === "edit" && (
                      <button
                        className={s.deleteButton}
                        onClick={() =>
                          setUserinfo({
                            ...userinfo,
                            skills: userinfo.skills.filter(
                              (skill) => skill.id !== skill.id
                            ),
                          })
                        }
                      >
                        Delete
                      </button>
                    )}
                  </div>
                ))
              ) : (
                <p>No skills added</p>
              )}
            </div>
            {showSkillInput && mode === "edit" && (
              <div className={s.newSkillInput}>
                <input
                  type="text"
                  placeholder="Skill Name"
                  value={newSkill.name}
                  onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                  className={s.input}
                />
                <input
                  type="number"
                  placeholder="Percentage"
                  value={newSkill.percent}
                  onChange={(e) => setNewSkill({ ...newSkill, percent: e.target.value })}
                  className={s.input}
                  min="0"
                  max="100"
                />
                <button onClick={handleAddSkill} className={s.saveButton}>
                  Add Skill
                </button>
              </div>
            )}
          </div>

          {/* CGPA Section */}
          <div className={s.sub1}>
            <div className={s.title}>CGPA</div>
            <div className={s.cccc}>
              {mode === "edit" ? (
                <div>
                  <input
                    type="number"
                    value={userinfo.cgpa || ""}
                    onChange={(e) => setUserinfo({ ...userinfo, cgpa: e.target.value })}
                    placeholder="Enter CGPA"
                    className={s.input}
                    min="0"
                    max="10"
                  />
                  <button className={s.saveButtoncgpa}>
                    Save
                  </button>
                </div>
              ) : (
                <div className={s.cgpaDiv}>
                  {userinfo.cgpa ? `${userinfo.cgpa}/10` : "N/A"}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Middle Column: Language and Resume Upload */}
        <div className={s.middle}>
          {/* Resume Upload */}
          <div className={s.sub1}>
            <div className={s.title}>Upload Resume</div>
            {mode === "edit" ? (
              <input type="file" accept="application/pdf" className={s.fileInput} />
            ) : (
              <p>Resume uploaded</p>
            )}
          </div>

          {/* Languages Section */}
          <div className={s.sub1}>
            <div className={s.title}>
              Languages
              <button
                className={s.addButton}
                onClick={() => setShowLanguageInput(!showLanguageInput)}
              >
                +
              </button>
            </div>
            <div className={s.desc}>
              {userinfo.languages?.length > 0 ? (
                userinfo.languages.map((lang) => (
                  <div key={lang.id} className={s.languageItem}>
                    {mode === "edit" ? (
                      <>
                        <input
                          type="text"
                          value={lang.name}
                          onChange={(e) =>
                            setUserinfo({
                              ...userinfo,
                              languages: userinfo.languages.map((l) =>
                                l.id === lang.id
                                  ? { ...l, name: e.target.value }
                                  : l
                              ),
                            })
                          }
                          className={s.input}
                        />
                        <input
                          type="number"
                          value={lang.percent}
                          onChange={(e) =>
                            setUserinfo({
                              ...userinfo,
                              languages: userinfo.languages.map((l) =>
                                l.id === lang.id
                                  ? { ...l, percent: e.target.value }
                                  : l
                              ),
                            })
                          }
                          className={s.input}
                          min="0"
                          max="100"
                        />
                      </>
                    ) : (
                      <>
                        <strong>{lang.name}</strong>: {lang.percent}%
                      </>
                    )}
                    {mode === "edit" && (
                      <button
                        className={s.deleteButton}
                        onClick={() =>
                          setUserinfo({
                            ...userinfo,
                            languages: userinfo.languages.filter(
                              (lang) => lang.id !== lang.id
                            ),
                          })
                        }
                      >
                        Delete
                      </button>
                    )}
                  </div>
                ))
              ) : (
                <p>No languages specified</p>
              )}
            </div>
            {showLanguageInput && mode === "edit" && (
              <div className={s.newSkillInput}>
                <input
                  type="text"
                  placeholder="Language Name"
                  value={newLanguage.name}
                  onChange={(e) => setNewLanguage({ ...newLanguage, name: e.target.value })}
                  className={s.input}
                />
                <input
                  type="number"
                  placeholder="Percentage"
                  value={newLanguage.percent}
                  onChange={(e) => setNewLanguage({ ...newLanguage, percent: e.target.value })}
                  className={s.input}
                  min="0"
                  max="100"
                />
                <button onClick={handleAddLanguage} className={s.saveButton}>
                  Add Language
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: User Information */}
        <div className={s.right}>
          <div className={s.title}>User Information</div>
          <div className={s.userInfo}>
            {/* Name Input */}
            <div>
              <strong>Name:</strong>
              {mode === "edit" ? (
                <input
                  type="text"
                  value={userinfo.name}
                  onChange={(e) => handleSaveInfo("name", e.target.value)}
                  className={s.input}
                />
              ) : (
                <p>{userinfo.name}</p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <strong>Email:</strong>
              {mode === "edit" ? (
                <input
                  type="email"
                  value={userinfo.email}
                  onChange={(e) => handleSaveInfo("email", e.target.value)}
                  className={s.input}
                />
              ) : (
                <p>{userinfo.email}</p>
              )}
            </div>

            {/* DOB Input */}
            <div>
              <strong>Date of Birth:</strong>
              {mode === "edit" ? (
                <input
                  type="date"
                  value={userinfo.dob}
                  onChange={(e) => handleSaveInfo("dob", e.target.value)}
                  className={s.input}
                />
              ) : (
                <p>{userinfo.dob}</p>
              )}
            </div>

            {/* Address Input */}
            <div>
              <strong>Address:</strong>
              {mode === "edit" ? (
                <input
                  type="text"
                  value={userinfo.address}
                  onChange={(e) => handleSaveInfo("address", e.target.value)}
                  className={s.input}
                />
              ) : (
                <p>{userinfo.address}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button to toggle Edit/View Mode */}
      <div className={s.submitButtonContainer}>
        <button onClick={handleToggleMode} className={s.submitButton}>
          {mode === "edit" ? "Submit" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
