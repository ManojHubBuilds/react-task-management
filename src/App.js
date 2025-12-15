import {Component} from 'react'
import {AuthProvider, AuthContext} from './contexts/AuthContext'
import LoginForm from './components/LoginForm'
import AdminDashboard from './components/AdminDashboard'
import UserDashboard from './components/UserDashboard'
import {initData} from './utils/storage'
import './App.css'

class AppContent extends Component {
  static contextType = AuthContext

  render() {
    const {user} = this.context

    if (user === null) {
      return <LoginForm />
    }

    if (user.role === 'admin') {
      return <AdminDashboard />
    }

    return <UserDashboard user={user} />
  }
}

class App extends Component {
  componentDidMount() {
    initData()
  }

  render() {
    return (
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    )
  }
}

export default App
