// // ProtectedRoute.jsx
// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';

// // ProtectedRoute component to wrap around protected routes
// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const isAuthenticated = localStorage.getItem('token');  // Check if JWT token exists

//   return (
//     <Route
//       {...rest}
//       render={props =>
//         isAuthenticated ? (
//           <Component {...props} />  // Render the component if user is authenticated
//         ) : (
//           <Redirect to="/login" />  // Redirect to login page if not authenticated
//         )
//       }
//     />
//   );
// };

// export default ProtectedRoute;



// // ProtectedRoute.jsx
// import React from 'react';
// import { Navigate } from 'react-router-dom';

// // ProtectedRoute component to wrap around protected routes
// const ProtectedRoute = ({ element: Element, ...rest }) => {
//   const isAuthenticated = localStorage.getItem('token');  // Check if JWT token exists

//   return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />;
// };

// export default ProtectedRoute;




// import React from 'react';
// import { Navigate } from 'react-router-dom';

// // ProtectedRoute component to wrap around protected routes
// const ProtectedRoute = ({ element: Element, ...rest }) => {
//   const isAuthenticated = localStorage.getItem('token');  // Check if JWT token exists

//   if (!isAuthenticated) {
//     // If the user is not authenticated, show an alert and redirect to the login page
//     alert("You are not authenticated! Please log in.");
//     return <Navigate to="/login" />;
//   }

//   return <Element {...rest} />;  // If authenticated, render the requested component
// };

// export default ProtectedRoute;


import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token');  // Check if JWT token exists

  if (!isAuthenticated) {
    alert("You need to be logged in to access this page");
    return <Navigate to="/login" />;  // Redirect to login page if not authenticated
  }

  return children;  // If authenticated, render the child component (ProfilePage)
};

export default ProtectedRoute;
