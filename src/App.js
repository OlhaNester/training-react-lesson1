import React, { Component } from "react";
import ColorPicker from './ColorPicker';
import TodoList from "./TodoList";
import Form from "./Form";
import TodoEditor from "./TodoEditor";
import shortid from "shortid";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";


const colorPickerOpt = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    name: "",
    tag: "",
    inputValue: "aaa",
    todos: [
      { id: "id-1", text: "text-1", completed: false },
      { id: "id-2", text: "text-2", completed: true },
      { id: "id-3", text: "text-3", completed: true },
      { id: "id-4", text: "text-4", completed: false },
    ],

  };

  addTodo = (text) => {
    
    const todo = {
      id: shortid.generate(),
      text: text,
      completed: false,
    }
    this.setState(prevState => ({
  todos: [todo, ...prevState.todos]
}))

  };

  deleteTodo = (todoId) => {
     
    this.setState(prevState =>
      ({ todos: prevState.todos.filter(todo => todo.id !== todoId), }));
  };

  toggleCompleted = todoId => {
    console.log(todoId);
  
  this.setState(prevState => ({                                     // можно переписать в виде тернарника:
    todos: prevState.todos.map(todo => {                            // this.setState(prevState =>
      if (todo.id === todoId) {                                     // todos: prevState.todos.map(todo => {
        return {                                                    // todo.id === todoId ?
          ...todo, completed: !todo.completed,                      // {  ...todo, completed: !todo.completed,} : todo
        };
      }
      return todo;  //если id не равен, мы возвращаем старый todo
    }),
  }));
};
  handleChange = (event) => {
    const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
  };

  
  // handleNameChange = (event) => {
  //   this.setState({ name: event.currentTarget.value });
  // }

  // handleTagChange = (event) => {
  //   this.setState({ tag: event.currentTarget.value });
  // }
  
  render() {
    const { todos } = this.state;
    const totalTodo = todos.length;
    const complitedTodo = todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
    return (
      <div className="App">
        <Form />
        <form>
           <label> Имя
      <input type="text" name="name" value={this.state.name} onChange={this.handleChange} id={this.nameImputId} />
    </label>
    <label> Ник   <input type="text" name="tag" value={this.state.tag} onChange={this.handleChange} id={this.nameImputId} />
    </label>
  </form>
      
        

        <div>
          <p>Общее кол-во {totalTodo}</p>
          <p> Кол-во выполненных {complitedTodo}</p>
        </div>
        <TodoEditor onSubmit={ this.addTodo}/>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} onToggleCompleted={this.toggleCompleted} />
        <ColorPicker options={colorPickerOpt} />
      </div>
    )
  
};
}

export default App;
