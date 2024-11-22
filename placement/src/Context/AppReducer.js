// export default (state, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

const AppReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_LOGIN":
      return {
        ...state,
        login: [action.payload], // Replace the login state with the new user info
      };
    default:
      return state;
  }
};

export default AppReducer;