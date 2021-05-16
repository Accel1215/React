import React, { Component } from "react";
import TodoItem from "./TodoItem";
import Pagination from "../templates/Pagination"

const styles ={
  form: {
    marginLeft: 'auto',
    marginRight: 'auto',
  }
}

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
    let todos = this.state.todos.map((value) => {
      if (value.id === id) {
        value.complete = !value.complete;
      }
      return value;
    });

    this.setState({ todos });
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
    let todos = this.state.todos.filter(val=>{
      return val.id !== id
    })

    this.setState({todos:todos})
  }

  onPageChange(page){
    this.setState({currentPage: page})
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(res=> this.setState({todos:res}))
  }

  render() {
    const { todos } = this.state;
    const todoCount = todos.length;
    const pageCount = Math.ceil(todoCount / this.state.todoPerPage);
    const currentPage = this.state.currentPage;
    let indexLastTodo;
    let indexFirstTodo;

    if(this.state.currentPage * this.state.todoPerPage > todoCount - this.todoPerPage){
      indexLastTodo = todoCount;
      indexFirstTodo = indexLastTodo - indexLastTodo % this.todoPerPage;
    }
    else{
      indexLastTodo = this.state.currentPage * this.state.todoPerPage;
      indexFirstTodo = indexLastTodo - this.state.todoPerPage;
    }
    
    const currentTodos = todos.slice(indexFirstTodo,indexLastTodo)

    return (
      <ul className="list-group">
        <form onSubmit={this.addTodo} style={styles.form}>
          <input placeholder="type here" onChange={(event)=>{this.setState({inputValue: event.target.value})}}/>
          <button type="submit">Add </button>
        </form>
        {currentTodos.map((val) => {
          return (
            <TodoItem todo={val} key={val.id} checked={this.onCheckedTodo} deleteTodo={this.deleteTodo} />
          );
        })}
        <Pagination onPageChange={this.onPageChange} indexFirstTodo={indexFirstTodo} currentPage={currentPage} pageCount={pageCount}/>
      </ul>
    );
  }
}
