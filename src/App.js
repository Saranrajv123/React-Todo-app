import React, {Component } from 'react';
import TodoApp from './components/Todo/TodoApp';

class App extends Component {

  render() {
    return(
      <div className='col-md-8 justify-content-center'>
      <TodoApp />
    </div>
    )
  }
} 
export default App;
