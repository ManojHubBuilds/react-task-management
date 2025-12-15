import {Component} from 'react'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {getUsers, getTasks} from '../utils/storage'
import TaskForm from './TaskForm'
import TaskItem from './TaskItem'
import UserCard from './UserCard'
import '../App.css'

class AdminDashboard extends Component {
  state = {
    tasks: [],
  }

  componentDidMount() {
    this.refreshTasks()
  }

  refreshTasks = () => {
    this.setState({tasks: getTasks()})
  }

  render() {
    const {tasks} = this.state
    const users = getUsers().filter(user => user.role === 'user')

    return (
      <DndProvider backend={HTML5Backend}>
        <div className="admin-dashboard">
          <h1>Admin Dashboard</h1>

          <TaskForm users={users} refreshTasks={this.refreshTasks} />

          <div className="admin-board">
            <div className="tasks-column">
              <h2>Tasks (Drag)</h2>

              {tasks.length === 0 ? (
                <p>No tasks created</p>
              ) : (
                tasks.map(task => (
                  <TaskItem key={task.id} task={task} />
                ))
              )}
            </div>

            <div className="users-column">
              <h2>Users (Drop)</h2>

              {users.map(user => (
                <UserCard
                  key={user.id}
                  user={user}
                  refreshTasks={this.refreshTasks}
                />
              ))}
            </div>
          </div>
        </div>
      </DndProvider>
    )
  }
}

export default AdminDashboard
