import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {getTasks, saveTasks} from '../utils/storage'

class TaskForm extends Component {
  state = {title: '', assigneeId: ''}

  onChangeTitle = e => {
    this.setState({title: e.target.value})
  }

  onChangeUser = e => {
    this.setState({assigneeId: e.target.value})
  }

  addTask = e => {
    e.preventDefault()
    const {title, assigneeId} = this.state
    const {refreshTasks} = this.props

    if (title !== '' && assigneeId !== '') {
      const tasks = getTasks()
      const newTask = {
        id: uuidv4(),
        title,
        assigneeId,
        status: 'Pending',
      }

      saveTasks([...tasks, newTask])
      this.setState({title: '', assigneeId: ''})
      refreshTasks()
    }
  }

  render() {
    const {users} = this.props
    const {title, assigneeId} = this.state

    return (
      <form className="task-form" onSubmit={this.addTask}>
        <h2>Create Task</h2>

        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={this.onChangeTitle}
        />

        <select value={assigneeId} onChange={this.onChangeUser}>
          <option value="">Assign To</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.username}
            </option>
          ))}
        </select>

        <button type="submit">Add Task</button>
      </form>
    )
  }
}

export default TaskForm
