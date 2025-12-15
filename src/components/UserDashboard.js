import {Component} from 'react'
import {getTasks, saveTasks} from '../utils/storage'

class UserDashboard extends Component {
  state = {tasks: []}

  componentDidMount() {
    this.loadTasks()
  }

  loadTasks = () => {
    const {user} = this.props
    const tasks = getTasks().filter(t => t.assigneeId === user.id)
    this.setState({tasks})
  }

  markCompleted = id => {
    const allTasks = getTasks().map(task =>
      task.id === id ? {...task, status: 'Completed'} : task,
    )

    saveTasks(allTasks)
    this.loadTasks()
  }

  render() {
    const {tasks} = this.state

    return (
      <div className="user-dashboard">
        <h1>Your Tasks</h1>
        {tasks.map(task => (
          <div key={task.id} className="task-item">
            <p>{task.title}</p>
            <p>{task.status}</p>
            {task.status !== 'Completed' && (
              <button onClick={() => this.markCompleted(task.id)}>
                Complete
              </button>
            )}
          </div>
        ))}
      </div>
    )
  }
}

export default UserDashboard
