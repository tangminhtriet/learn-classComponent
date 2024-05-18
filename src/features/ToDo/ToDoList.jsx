import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css'
class ToDoList extends Component {
    handleClick = (todo, e) => {
        if (this.props.onToDoClick) {
            this.props.onToDoClick(todo)
            todo.isDone ? e.target.classList.add("completed") : e.target.classList.remove("completed")
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {this.props.list.map(todo => (
                        <li className='todo' key={todo.id} onClick={(e) => {
                            this.handleClick(todo, e)
                        }
                        }>
                            {todo.title}
                        </li>
                    ))}
                </ul>

            </div>
        );
    }
}

ToDoList.propTypes = {

};

export default ToDoList;