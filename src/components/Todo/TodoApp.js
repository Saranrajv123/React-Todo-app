import React, { Component } from 'react';
import Todoitem from './Todoitem';
import AddItem from './AddItem';

const todoItem = [
    {
        name: 'Pay Bills'
    },
    {
        name: 'Go Shopping'
    }
]

localStorage.setItem('todoItem', JSON.stringify(todoItem))
class TodoApp extends Component {

    state = {
        todoItem: JSON.parse(localStorage.getItem('todoItem'))
    }

    componentDidMount() {
        const todoItem = this.state.todoItem;
        this.setState({ todoItem })
    }

    // getTodoItem = () => {
    //     return this.state.todoItem;
    // }


    addItemHandler = (name) => {
        const todoItem = this.state.todoItem;
        todoItem.push({name});
        this.setState({ todoItem })
    }

    onEditSubmitHandler = (name, originalName) => {
        let todoItem = this.state.todoItem;

        todoItem.map(item => {
            if(item.name === originalName) {
                item.name = name;
            }

            return todoItem;
        });
        this.setState({ todoItem })
    }


    onDeletehandler = (name) => {
        const todoItem = this.state.todoItem;

        const filteredItem = todoItem.filter(item => {
            return item.name !== name
        });
        this.setState({ todoItem: filteredItem })
    }
    render() {
        return (
            <div>
                <div className='col-8 text-center'>
                <h6 className='text-left border-bottom border-dark py-2'>Add Item</h6>
                </div>

                <AddItem 
                    addItemHandler={this.addItemHandler}
                />
                <div className='col-8 text-center'>
                    <h6 className='text-left border-bottom border-dark py-2'>Todo</h6>
                </div>
                {
                    this.state.todoItem.map(item => {
                        return (
                           <Todoitem 
                               key={item.name}
                               {...item}
                               onEditSubmitHandler={this.onEditSubmitHandler}
                               onDeleteHandler={this.onDeletehandler}
                           />
                        )
                    })
                }
            </div>
        );
    }
}

export default TodoApp;