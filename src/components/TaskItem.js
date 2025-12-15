import {Component} from 'react'
import {useDrag} from 'react-dnd'
import '../App.css'

// Functional wrapper ONLY for drag logic
const DraggableTask = props => {
  const {task, children} = props

  const [{isDragging}, dragRef] = useDrag({
    type: 'TASK',
    item: {id: task.id},
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  return (
    <div ref={dragRef} style={{opacity: isDragging ? 0.5 : 1}}>
      {children}
    </div>
  )
}

// Class-based component (your style)
class TaskItem extends Component {
  render() {
    const {task} = this.props

    return (
      <DraggableTask task={task}>
        <div className="task-item">
          <p className="task-title">{task.title}</p>

          <span
            className={
              task.status === 'Completed'
                ? 'status completed'
                : 'status pending'
            }
          >
            {task.status}
          </span>
        </div>
      </DraggableTask>
    )
  }
}

export default TaskItem
