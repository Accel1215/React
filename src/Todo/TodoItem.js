import React, { Component } from "react";
import '../index.css';
const styles = {
  todo: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '1000px'
  },
  button: {
    position: 'sticky',
    left: "93%",
    width: '100px',
  },
  span: {
    position: 'relative',
    width: '800px',
    left: '35px',
    display: 'block',
    wordWrap: 'break-word',
  },
  div: {
    position: 'absolute',
    left: '40px',
    top: '50%',
    transform: 'translate(0, -50%)',
  },
  check: {
    position: 'absolute',
    top: '45%',
    transform: 'translate(0,-50%)',
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
        <div class="form-check">
          <input 
            class="form-check-input"
            style={styles.check}
            type="checkbox"
            name=""
            id=""
            onChange={() => {
              checked(todo.id);
            }}
          />
          <div style={styles.div}>
            <span className={classes} style={styles.span}>{todo.title}</span>
          </div>
          

          <button onClick={()=>{deleteTodo(todo.id)}} className="btn btn-primary" style={styles.button}>Delete</button>
        </div>
      </li>
    );
  }
}
