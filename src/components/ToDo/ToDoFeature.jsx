import React, { Component } from 'react';
import ToDoList from './ToDoList';
import './style.css'

class ToDoFeature extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listToDo: [
                {
                    id: 1,
                    title: 'code',
                    isDone: false
                },
                {
                    id: 2,
                    title: 'sleep',
                    isDone: false
                },
                {
                    id: 3,
                    title: 'eat',
                    isDone: false
                },
            ],
            todo: ''
        }
    }
    handleInputChange = (e) => {
        this.setState({
            todo: e.target.value,
        })
    }
    handleSubmitFormToDo = (e) => {
        e.preventDefault();
        const newList = [...this.state.listToDo]
        newList.push({
            id: this.state.listToDo.length + 1,
            isDone: false,
            title: this.state.todo
        })
        this.setState({
            ...this.state,
            todo: '',
            listToDo: newList
        })
    }
    handleToggleToDo = (todo) => {
        // console.log(todo.id);
        const indexToggle = this.state.listToDo.findIndex(x => x === todo)
        const newList = [...this.state.listToDo]
        // newList[indexToggle].classList.add("completed")
        newList[indexToggle].isDone = !newList[indexToggle].isDone
        this.setState({
            ...this.state,
            listToDo: newList
        })
    }
    handleShowAll = () => {
    }
    render() {
        return (
            <div>
                <h2>To Do List</h2>
                <form onSubmit={this.handleSubmitFormToDo}>
                    <input type='text' value={this.state.todo} id='input' onChange={(e) => this.handleInputChange(e)} />
                </form>
                <ToDoList list={this.state.listToDo} onToDoClick={this.handleToggleToDo} />
            </div>
        );
    }
}

export default ToDoFeature;
