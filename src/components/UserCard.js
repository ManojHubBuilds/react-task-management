import {Component} from 'react'
import {useDrop} from 'react-dnd'
import {getTasks, saveTasks} from '../utils/storage'

// Functional wrapper for drop
const DroppableUser = props => {
  const {user, refreshTasks, children} = props

  const [, dropRef] = useDrop({
    accept: 'TASK',
    drop: item => {
      const tasks = getTasks()
      const updatedTasks = tasks.map(task =>
        task.id === item.id
          ? {...task, assigneeId: user.id}
          : task,
      )

      saveTasks(updatedTasks)
      refreshTasks()
    },
  })

  return (
    <div ref={dropRef}>
      {children}
    </div>
  )
}

// Class-based component
class UserCard extends Component {
  render() {
    const {user, refreshTasks} = this.props

    return (
      <DroppableUser user={user} refreshTasks={refreshTasks}>
        <div className="user-card">
  <h3>{user.username}</h3>
  <p className="drop-hint">Drop task here</p>
</div>

      </DroppableUser>
    )
  }
}

export default UserCard
