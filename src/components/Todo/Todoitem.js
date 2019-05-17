import React, { Component } from 'react';

class Todoitem extends Component {
    state = {
        isEdit: false
    }

    deleteHandler = () => {
        this.props.onDeleteHandler(this.props.name)
    }

    editHandler = () => {
        this.setState({ isEdit: true })
    }

    onEditHandler = (e) => {
        e.preventDefault();
        this.props.onEditSubmitHandler(this.nameInput.value, this.props.name)

        this.setState({ isEdit: false })
    }

    render() {
        const { name } = this.props;
        console.log('this.props :', this.props);
        return (
            <div>

                
                <div>
                {
                    this.state.isEdit ?
                        (
                                <form onSubmit={this.onEditHandler}>
                            <div className='row pl-4'>

                                    <input
                                        className='col-md-6 form-control p-0'
                                        defaultValue={name}
                                        placeholder='Edit item'
                                        ref={nameInput => this.nameInput = nameInput}
                                    />
                                
                                    <button className='col-md-2 btn btn-light m-1'>Save</button>
                                </div>
                                </form>
                        ) :
                        (
                            <div className='row p-4'>
                                <p className='col-md-4'>{name}</p>
                                <button className='btn btn-light m-1 col-md-2' onClick={this.editHandler}>Edit</button>
                                <button className='btn btn-light m-1 col-md-2' onClick={this.deleteHandler}>delete</button>
                            </div>
                        )
                }
                </div>
            </div>
        );
    }
}

export default Todoitem;