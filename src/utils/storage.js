export const initData = () => {
  if (localStorage.getItem('users') === null) {
    const users = [
      {id: '1', username: 'admin', password: 'admin123', role: 'admin'},
      {id: '2', username: 'user1', password: 'user123', role: 'user'},
      {id: '3', username: 'user2', password: 'user123', role: 'user'},
    ]
    localStorage.setItem('users', JSON.stringify(users))
  }

  if (localStorage.getItem('tasks') === null) {
    localStorage.setItem('tasks', JSON.stringify([]))
  }
}

export const getUsers = () =>
  JSON.parse(localStorage.getItem('users'))

export const getTasks = () =>
  JSON.parse(localStorage.getItem('tasks'))

export const saveTasks = tasks =>
  localStorage.setItem('tasks', JSON.stringify(tasks))
