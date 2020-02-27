import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '5px',
            borderBottom: '1px dotted #ccc',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    render() {
        const { id, title } = this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}
TodoItem.Prototype = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: 'black',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50px',
    cursor: 'pointer',
    float: 'right'
}