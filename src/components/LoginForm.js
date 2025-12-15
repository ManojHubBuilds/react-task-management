import {Component} from 'react'
import {AuthContext} from '../contexts/AuthContext'

class LoginForm extends Component {
  static contextType = AuthContext

  state = {username: '', password: '', error: ''}

  onChangeUsername = e => {
    this.setState({username: e.target.value})
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  submitForm = e => {
    e.preventDefault()
    const {username, password} = this.state
    const success = this.context.login(username, password)

    if (!success) {
      this.setState({error: 'Invalid Credentials'})
    }
  }

  render() {
    const {username, password, error} = this.state

    return (
      <div className="login-container">
        <form className="login-form" onSubmit={this.submitForm}>
          <h1>Task Manager Login</h1>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={this.onChangeUsername}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={this.onChangePassword}
          />

          <button type="submit">Login</button>
          {error !== '' && <p className="error">{error}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
