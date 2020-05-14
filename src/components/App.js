import React, {
  Component
} from 'react';
import AddTask from './AddTask'
import TaskList from './TaskList';
import './App.css';

class App extends Component {

  state = {
    tasks: [{
      id: 10,
      text: 'zagrać wreszcie w Wiedźmina',
      date: '2020-09-15',
      important: true,
      active: true,
      finishDate: null
    },
    {
      id: 20,
      text: "zrobić dobry uczynek",
      date: '2020-11-12',
      important: false,
      active: true,
      finishDate: null
    },
    {
      id: 30,
      text: "pomalować mieszkanie",
      date: '2020-05-11',
      important: false,
      active: true,
      finishDate: null
    },
    {
      id: 40,
      text: "wrócic do formy z przed 5 lat",
      date: '2021-10-20',
      important: true,
      active: true,
      finishDate: null
    },
    {
      id: 50,
      text: "remont kuchni",
      date: '2022-11-12',
      important: false,
      active: true,
      finishDate: null
    },
    {
      id: 60,
      text: "posadzic drzewo",
      date: '2020-09-11',
      important: false,
      active: true,
      finishDate: null
    },
    {
      id: 70,
      text: "fryzjer!!!",
      date: '2020-05-20',
      important: true,
      active: true,
      finishDate: null
    },
    {
      id: 80,
      text: "nie odbierać poleconego od komornika",
      date: '2020-11-12',
      important: false,
      active: true,
      finishDate: null
    },
    {
      id: 90,
      text: "kupić 2 butelki litrowe",
      date: '2020-09-11',
      important: false,
      active: true,
      finishDate: null
    },

    ]
  }

  counter = this.state.tasks.length * 10

  handleDoneTask = (id) => {
    // console.log(id)
    const tasks = [...this.state.tasks]
    tasks.forEach(task => {
      if (id === task.id) {
        task.active = false
        task.finishDate = new Date().getTime()
      }
    })
    this.setState(prevState => ({
      tasks
    }))
  }

  handleDeleteTask = (id) => {
    // console.log(id)
    const tasks = Array.from(this.state.tasks)
    const index = tasks.findIndex(task => task.id === id)
    console.log(index)
    tasks.splice(index, 1)
    // console.log(tasks)
    this.setState(prevState => ({
      tasks: tasks
    }))
  }

  handleAddTask = (text, checked, date) => {
    console.log("działa w App.js", text, checked, date)
    this.counter += 10
    const task = {
      id: this.counter,
      text,
      date,
      important: checked,
      active: true,
      finishDate: null
    }
    this.setState(prevState => ({
      tasks: [...this.state.tasks, task]
    }))
  }

  render() {
    // console.log(new Date(this.state.tasks[0].date).getTime())
    // console.log(this.counter)
    return (<div className="App" >
      <h1 > TODO APP </h1>
      <AddTask add={this.handleAddTask}
      />
      <TaskList tasks={this.state.tasks}
        done={this.handleDoneTask}
        delete={this.handleDeleteTask}
      />
    </div >
    );
  }
}

export default App;