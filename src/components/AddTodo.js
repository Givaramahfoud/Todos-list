import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class AddTodo extends Component {
    state = {
        title: ''
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.title) {
            this.props.addTodo(this.state.title)
        }
        this.setState({ title: '' })
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input
                    type="text"
                    name='title'
                    placeholder='Add Todo ...'
                    style={{ flex: '10px', padding: '5px' }}
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value='Submit'
                    className='btn'
                    style={{ flex: '0.25' }}
                />
            </form >
        )
    }
}

AddTodo.Prototype = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}