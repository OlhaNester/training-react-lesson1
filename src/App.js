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
    name: "",
    inputValue: "aaa",
    todos: [
      { id: 'id-1', text: 'text-1', completed: false },
      { id: 'id-2', text: 'text-2', completed: true },
      { id: 'id-3', text: 'text-3', completed: true },
      { id: 'id-4', text: 'text-4', completed: false },
    ],

  };
  deleteTodo = ( todoId ) => {
     
        this.setState(prevState => ({ todos: prevState.todos.filter(todo => todo.id !== todoId), }));
   };

  handleNameChange = (event) => {
    this.setState({name: event.currentTarget.value});
  }
  
  render() {
    const { todos } = this.state;
    const totalTodo = todos.length;
    const complitedTodo = todos.reduce((acc, todo) => ( todo.completed ? acc + 1 : acc ), 0);
    return (<div className="App">
      <form> <label> Имя<input type="text" value={this.state.name} onChange={ this.handleNameChange}/></label></form>
      {/* <div>
        <p>Общее кол-во { totalTodo}</p>
        <p> Кол-во выполненных { complitedTodo}</p>
      </div>
      <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      <ColorPicker options={colorPickerOpt}/> */}
    </div>);
  
}
};



export default App;
