
/*
// import React from 'react';
import React, { Component } from 'react';
class TasksSort extends Component {
  state = {
    value: 0
  }

  handleSelect = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    console.log(this.props.active)
    return (
      <label htmlFor="">Sposób wyświetlania
    <select name="" id="" value={this.state.value} onChange={this.handleSelect}>
          <option value="0">Po kolejności dodania zadania</option>
          <option value="1">Po dacie "do zrobienia"</option>
          <option value="2">Po Priorytecie</option>
        </select>
      </label>);
  }
}

export default TasksSort;

*/
import React from 'react';
import './ActiveTaskSort.css'
const ActiveTasksSort = (props) => {
  return (

    <label htmlFor=""><span>Sposób wyświetlania</span>
      <select name="" id="" value={props.value} onChange={props.select}>
        <option value="0">Po kolejności dodania zadania</option>
        <option value="1">Po dacie: "do zrobienia"</option>
        <option value="2">Po Priorytecie</option>
      </select>
    </label>

  );
}

export default ActiveTasksSort;