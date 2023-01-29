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


export default userContext;
