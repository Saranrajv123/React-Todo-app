import React, { Component } from 'react';

class AddItem extends Component {
    state = {
        name: ''
    }

    onChangeHandler = (e) => {
        const name = e.target.value;
        this.setState({ name })
    }
    formSubmitHandler = (e) => {
        e.preventDefault();
        // this.props.addItemHandler(this.nameInput.value);
        this.props.addItemHandler(this.state.name);

        // this.nameInput.value = ''
        this.setState({ name:'' })
    }
    render() {
        return (
            
            <form className='col-8' onSubmit={this.formSubmitHandler}>
                
                <div className='row'>
                    <div className='col-md-10'>
                        <input 
                        className='col-md-12 form-control'
                        placeholder='Add item'
                        // ref={nameInput => this.nameInput = nameInput}
                        onChange={this.onChangeHandler}
                        
                        />
                    </div>

                    <div className='col-md-2'>
                    <button className='col-md-12 btn btn-light'>Add</button>

                    </div>
                     
                </div>
               
            </form>
        );
    }
}

export default AddItem;