/*
import React from 'react';
import Task from './Task'
import TasksSort from './TasksSort'
const TaskList = (props) => {

  const active = props.tasks.filter(task => task.active)
  const done = props.tasks.filter(task => !task.active)

  done.sort((a, b) => b.finishDate - a.finishDate)
  // active.sort((a, b) => {
  //   console.log(new Date(b.date).getTime())
  //   // const a_date = new Date(a.date).getTime()
  //   // const b_date = new Date(b.date).getTime()
  //   return new Date(a.date).getTime() - new Date(b.date).getTime()
  // })

  const activeTasks = active.map(task => (
    <Task key={task.id} task={task} done={props.done} delete={props.delete} />
  ))


  const doneTasks = done.map(task => (
    <Task key={task.id} task={task} done={props.done} delete={props.delete} />
  ))
  // console.log(activeTasks)
  return (

    <>
      <div className="taskList">
        <h2>Zadania do zrobienia ({activeTasks.length})</h2>
        <TasksSort active={active} />

        {activeTasks}
        <hr />
        <h3>Zadania zrobione({doneTasks.length})</h3>

        {doneTasks}
      </div>
    </>
  );
}

export default TaskList;

*/


import React, { Component } from 'react';
import Task from './Task'
import ActiveTasksSort from './ActiveTasksSort'
import './TaskList.css'
class TaskList extends Component {
  state = {
    value: "0"
  }


  handleSelect = (e) => {
    console.log(e.target.value)
    this.setState({
      value: e.target.value
    })
  }

  sortActiveTasks = (option) => {
    console.log("sort")
    const active = this.props.tasks.filter(task => task.active)


    if (option === "0") return active
    else if (option === "1") {
      active.sort((a, b) => {
        // console.log(new Date(b.date).getTime())
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      })
      return active
    } else if (option === "2") {
      const highPriority = active.filter(task => task.important)
      highPriority.sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      })
      const lowPriority = active.filter(task => !task.important)
      lowPriority.sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      })
      const sortedHighAndLowPriority = highPriority.concat(lowPriority)
      return sortedHighAndLowPriority
    }


  }

  render() {
    console.log(this.state.value)
    const active = this.sortActiveTasks(this.state.value)
    console.log(active)
    const done = this.props.tasks.filter(task => !task.active)
    done.sort((a, b) => b.finishDate - a.finishDate)
    const doneTasks = done.map(task => (
      <Task key={task.id} task={task} done={this.props.done} delete={this.props.delete} />
    ))
    const activeTasks = active.map(task => (
      <Task key={task.id} task={task} done={this.props.done} delete={this.props.delete} />
    ))
    return (
      <>
        <div className="taskList">
          <h2>Zadania do zrobienia ({activeTasks.length})</h2>
          {active.length === 0} <div className="activeTask">
            {active.length > 1 && <ActiveTasksSort
              select={this.handleSelect}
              value={this.state.value}
            />}
            {active.length === 0 ? <h3 className="noTasks">Nie masz żadnych zadań do zrobienia</h3> : activeTasks}
          </div>
          <hr />
          <h3>Zadania zrobione({doneTasks.length})</h3>
          <div className="doneTask">
            {doneTasks}
          </div>
        </div>
      </>
    );
  }
}

export default TaskList;