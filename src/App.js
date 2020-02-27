import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import uuid from 'uuid';
import axios from 'axios';
import About from './components/pages/About'
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
export default class App extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => this.setState({ todos: res.data }))
  }

  // toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) })
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo} />
              </React.Fragment>
            )}>
            </Route>
            <Route path='/about' component={About}></Route>

          </div>
        </div>
      </Router>
    )
  }
}

