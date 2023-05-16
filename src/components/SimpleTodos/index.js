import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Header from '../Header'

import TodoItem from '../TodoItem'

import './index.css'

// ]

const getCartListFromLocalStorage = () => {
  const stringifiedCartList = localStorage.getItem('todoData')
  const parsedCartList = JSON.parse(stringifiedCartList)
  if (parsedCartList === null) {
    return []
  }
  return parsedCartList
}

class SimpleTodos extends Component {
  state = {
    todosList: getCartListFromLocalStorage(),
    todoName: '',
    todoStatus: 'Pending',
  }

  deleteTodo = id => {
    const {todosList} = this.state
    const updatedTodosList = todosList.filter(eachTodo => eachTodo.id !== id)

    this.setState({
      todosList: updatedTodosList,
    })
  }

  changeTodoStatus = (id, statusTodo) => {
    const {todosList} = this.state
    const updatedTodosList = todosList.map(eachTodo => {
      if (eachTodo.id === id) {
        return {...eachTodo, status: statusTodo}
      }
      return {...eachTodo}
    })

    this.setState({
      todosList: updatedTodosList,
    })
  }

  onChangeInput = event => this.setState({todoName: event.target.value})

  onChangeStatus = event => this.setState({todoStatus: event.target.value})

  addTodo = () => {
    const {todoName, todoStatus} = this.state
    const newTodo = {
      id: uuidv4(),
      title: todoName,
      status: todoStatus,
    }
    this.setState(prevState => ({
      todosList: [...prevState.todosList, newTodo],
      todoName: '',
      todoStatus: 'Pending',
    }))
  }

  render() {
    const {todosList, todoName, todoStatus} = this.state

    localStorage.setItem('todoData', JSON.stringify(todosList))

    return (
      <div className="app-container">
        <div className="simple-todos-container">
          <Header />
          <h1 className="heading">Simple Todos</h1>
          <div className="cont">
            <input
              type="text"
              onChange={this.onChangeInput}
              placeholder="Enter Todo Name or New Task"
              value={todoName}
              className="input-cont"
            />
            <select
              value={todoStatus}
              onChange={this.onChangeStatus}
              className="status"
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Done">Done</option>
              <option value="In progress">In Progress</option>
            </select>
            <button
              type="button"
              className="add-todo-button"
              onClick={this.addTodo}
            >
              Add Todo
            </button>
          </div>
          <ul className="todos-list">
            {todosList.map(eachTodo => (
              <TodoItem
                key={eachTodo.id}
                todoDetails={eachTodo}
                deleteTodo={this.deleteTodo}
                changeStatus={this.changeTodoStatus}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
