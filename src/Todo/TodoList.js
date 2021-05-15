import React, { Component } from "react";
import TodoItem from "./TodoItem";
import Pagination from "../templates/Pagination"

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputValue: '',
      currentPage: 1,
      todoPerPage: 10,
    };
    this.onCheckedTodo = this.onCheckedTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.onPageChange = this.onPageChange.bind(this)
  }
  onCheckedTodo(id) {
    console.log("checked", id);
    let todos = this.state.todos.map((value) => {
      if (value.id === id) {
        value.complete = !value.complete;
      }
      return value;
    });
    this.setState({ todos });
    console.log("checked", id);
  }
  addTodo(event) {
    event.preventDefault();
    if(this.state.inputValue <= 0){
      alert('Заполнитель значение')
    }else{
    let todos = this.state.todos.concat([
      {
        title: this.state.inputValue,
        id: Math.floor(Math.random() * 1000),
        complete: false,
      },
    ]);
    this.setState({todos})
    }
  }
  deleteTodo(id){
    // console.log('delete ',id)

    let todos = this.state.todos.filter(val=>{
      return val.id !== id
    })
    this.setState({todos:todos})
  }
  onPageChange(current){
    this.setState({currentPage: current})
  }
  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(res=> this.setState({todos:res}))

    // console.log(res)
  }
  render() {
    const { todos } = this.state;
    const todoCount = todos.length;
    const pageCount = Math.ceil(todoCount / this.state.todoPerPage);
    const currentPage = this.state.currentPage;
    let indexLastTodo;
    let indexFirsTodo;
    if(this.state.currentPage * this.state.todoPerPage > todoCount - this.todoPerPage){
      indexLastTodo = todoCount;
      indexFirsTodo = indexLastTodo - indexLastTodo % this.todoPerPage;
    }
    else{
      indexLastTodo = this.state.currentPage * this.state.todoPerPage;
      indexFirsTodo = indexLastTodo - this.state.todoPerPage;
    }
    
    const currentTodos = todos.slice(indexFirsTodo,indexLastTodo)

    console.log(todoCount)
    console.log(todos)
    return (
      <ul className="list-group">
        <Pagination onPageChange={this.onPageChange} indexFirsTodo={indexFirsTodo} currentPage={currentPage} pageCount={pageCount}/>
        <form onSubmit={this.addTodo}>
          <input placeholder="type here" onChange={(event)=>{this.setState({inputValue: event.target.value})}}/>
          <button type="submit">Add </button>
        </form>
        {currentTodos.map((val) => {
          return (
            <TodoItem todo={val} key={val.id} checked={this.onCheckedTodo} deleteTodo={this.deleteTodo} />
          );
        })}
      </ul>
    );
  }
}
