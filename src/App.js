import React, {Component} from 'react';
// import ColorPicker from './ColorPicker';
import TodoList from './TodoList';

// const colorPickerOpt = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'text-1', completed: false },
      { id: 'id-2', text: 'text-2', completed: false },
      { id: 'id-3', text: 'text-3', completed: false },
      { id: 'id-4', text: 'text-4', completed: false },
    ],
  };

  
  render() {
    const { todos } = this.state;
    return (<div className="App">
      <TodoList todos={ todos}/>
      {/* <ColorPicker options={colorPickerOpt}/> */}
    </div>);
  
}
};



export default App;
