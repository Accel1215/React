import React, { Component } from "react";
import '../index.css';
const styles = {
  todo: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '1000px'
  },
  button: {
    position: 'absolute',
    left: "93%",
    top: "1px",
    height: '36px'
  }
};

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { checked, todo,deleteTodo } = this.props;

    const classes = []

    if(todo.complete){
        // console.log('complete')
        classes.push('done')
    }
    return (
      <li className="list-group-item" style={styles.todo}>
        <div>
          <input
            type="checkbox"
            name=""
            id=""
            onChange={() => {
              checked(todo.id);
            }}
          />
          <span className={classes}>{todo.title}</span>

          <button onClick={()=>{deleteTodo(todo.id)}} className="btn btn-primary" style={styles.button}>Delete</button>
        </div>
      </li>
    );
  }
}
