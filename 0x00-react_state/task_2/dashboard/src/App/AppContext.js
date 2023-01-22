import React from "react"


const user = {
  email: '',
  password: '',
  isLoggedIn: false
}

const logOut = () => {};

const userContext = React.createContext({
  user,
  logOut
})

export const useUserContext = () => React.useContext(userContext)

export default userContext;
