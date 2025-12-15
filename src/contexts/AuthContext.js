import React from 'react'
import {getUsers} from '../utils/storage'

const AuthContext = React.createContext()

class AuthProvider extends React.Component {
  state = {user: null}

  login = (username, password) => {
    const users = getUsers()
    const matchedUser = users.find(
      u => u.username === username && u.password === password,
    )

    if (matchedUser !== undefined) {
      this.setState({user: matchedUser})
      return true
    }
    return false
  }

  logout = () => {
    this.setState({user: null})
  }

  render() {
    const {children} = this.props
    const {user} = this.state

    return (
      <AuthContext.Provider
        value={{
          user,
          login: this.login,
          logout: this.logout,
        }}
      >
        {children}
      </AuthContext.Provider>
    )
  }
}

export {AuthContext, AuthProvider}
