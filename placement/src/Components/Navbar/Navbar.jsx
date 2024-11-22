// import React, { useContext, useState } from 'react'
// import s from "./Navbar.module.css"
// import { LoginInfo } from '../../Context/LoginInfo';

// const Navbar = () => {
//   const { login } = useContext(LoginInfo);
//   console.log(login);

//   const [openItem, setOpenItem] = useState(false);

//   const handleList = () => {
//     setOpenItem((prevState) => !prevState); // Toggle between true and false
//   };
//   return (
//     <div className={s.container}>
//       <div className={s.item1}>
//         <div className={s.sub1}>
//           <img src="/Assets/Depstar-Logo.png" />
//         </div>
//         <div className={s.sub2}>
//           <div className={s.upperText}>DEPSTAR INFORMATION TECHNOLOGY</div>
//           <div className={s.lowerText}>Placement Portal</div>
//         </div>
//       </div>
//       <div className={s.item2}>
//         <img src="/Assets/Charusat-logo.png" />
//         <div className={s.profile}>
//           <div className={s.name}>{login[0].fname} {login[0].lname}</div>
//           <button onClick={() => { handleList(true) }} className={s.image}><img src="./Assets/profilelogo.png" />
//             {openItem && <div className={s.list}>
//               <div className={s.items}>
//                 <img src="./Assets/setting.svg" />
//                 <span>Settings</span>
//               </div>
//               <div className={s.items}>
//                 <img src="./Assets/profile.svg" />
//                 <span>Profile</span>
//               </div>
//               <div className={s.items}>
//                 <img src="./Assets/signout.svg" />
//                 <span>Sign Out</span>
//               </div>
//             </div>}
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar

// import React, { useContext, useState } from 'react';
// import s from './Navbar.module.css';
// import { LoginInfo } from '../../Context/LoginInfo';

// const Navbar = () => {
//   const { login } = useContext(LoginInfo); // Assuming login contains user info after login
//   const [openItem, setOpenItem] = useState(false);

//   const handleList = () => {
//     setOpenItem((prevState) => !prevState); // Toggle between true and false
//   };

//   return (
//     <div className={s.container}>
//       <div className={s.item1}>
//         <div className={s.sub1}>
//           <img src="/Assets/Depstar-Logo.png" alt="Depstar Logo" />
//         </div>
//         <div className={s.sub2}>
//           <div className={s.upperText}>DEPSTAR INFORMATION TECHNOLOGY</div>
//           <div className={s.lowerText}>Placement Portal</div>
//         </div>
//       </div>
//       <div className={s.item2}>
//         <img src="/Assets/Charusat-logo.png" alt="Charusat Logo" />
//         <div className={s.profile}>
//           <div className={s.name}>
//             {/* Dynamically display user info */}
//             {login && login.length > 0 ? `${login[0].fname} ${login[0].lname}` : 'Guest'}
//           </div>
//           <button onClick={handleList} className={s.image}>
//             <img src="./Assets/profilelogo.png" alt="Profile Logo" />
//             {openItem && (
//               <div className={s.list}>
//                 <div className={s.items}>
//                   <img src="./Assets/setting.svg" alt="Settings" />
//                   <span>Settings</span>
//                 </div>
//                 <div className={s.items}>
//                   <img src="./Assets/profile.svg" alt="Profile" />
//                   <span>Profile</span>
//                 </div>
//                 <div className={s.items}>
//                   <img src="./Assets/signout.svg" alt="Sign Out" />
//                   <span>Sign Out</span>
//                 </div>
//               </div>
//             )}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;





import React, { useContext, useState } from 'react';
import s from './Navbar.module.css';
import { LoginInfo } from '../../Context/LoginInfo';

const Navbar = () => {
  const { login } = useContext(LoginInfo); // Access user info from the context
  const [openItem, setOpenItem] = useState(false);

  const handleList = () => {
    setOpenItem((prevState) => !prevState); // Toggle between true and false
  };

  return (
    <div className={s.container}>
      <div className={s.item1}>
        <div className={s.sub1}>
          <img src="/Assets/Depstar-Logo.png" alt="Depstar Logo" />
        </div>
        <div className={s.sub2}>
          <div className={s.upperText}>DEPSTAR INFORMATION TECHNOLOGY</div>
          <div className={s.lowerText}>Placement Portal</div>
        </div>
      </div>
      <div className={s.item2}>
        <img src="/Assets/Charusat-logo.png" alt="Charusat Logo" />
        <div className={s.profile}>
          <div className={s.name}>
            {/* Dynamically display user info */}
            {login && login.length > 0 ? `${login[0].fname} ${login[0].lname}` : 'Guest'}
          </div>
          <button onClick={handleList} className={s.image}>
            <img src="./Assets/profilelogo.png" alt="Profile Logo" />
            {openItem && (
              <div className={s.list}>
                <div className={s.items}>
                  <img src="./Assets/setting.svg" alt="Settings" />
                  <span>Settings</span>
                </div>
                <div className={s.items}>
                  <img src="./Assets/profile.svg" alt="Profile" />
                  <span>Profile</span>
                </div>
                <div className={s.items}>
                  <img src="./Assets/signout.svg" alt="Sign Out" />
                  <span>Sign Out</span>
                </div>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
