import React, { Component } from 'react';
import './AddTask.css'

class AddTask extends Component {

  minDate = (new Date().toISOString()).slice(0, 10)

  // date = new Date(this.minDate).getTime()
  state = {
    text: "",
    checked: false,
    date: this.minDate,
    message: "",
    err: {
      text: false,
      date: false
    }
  }

  messages = {
    incorrect_text: "text musi zawierać więcej niż dwa znaki",
    incorrect_date: "data z kalendarza nie została wybrana"
  }

  handleInputTextChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleInputCheckbox = (e) => {
    this.setState({
      checked: e.target.checked
    })
  }

  handleInputDateChange = (e) => {
    this.setState({
      date: e.target.value
    })
  }

  handleClick = () => {
    const { text, checked, date } = this.state
    console.log("działa w AddTask", text, checked, date)

    const validation = this.FormValidation()
    console.log(validation.correct)
    if (validation.correct) {
      this.props.add(text, checked, date)
      this.setState({
        text: "",
        checked: false,
        date: this.minDate,
        message: "Zadanie zostało dodane",
        err: {
          text: false,
          date: false
        }
      })
    } else {
      this.setState({
        err: {
          text: !validation.text,
          date: !validation.date
        }
      })
    }
  }

  FormValidation = () => {
    let text = false;
    let date = false;
    let correct = false
    if (this.state.text.length > 2) text = true
    if (this.state.date !== "") date = true
    if (text && date) correct = true
    return (
      {
        text,
        date,
        correct
      }
    )
  }

  componentDidUpdate() {
    if (this.state.message) {
      setTimeout(() => {
        this.setState({
          message: ""
        })
      }, 2000)
    }
  }

  render() {
    console.log(this.state.date)
    // console.log(this.minDate)
    // console.log(this.state.text)
    // console.log(this.state.err.text)


    return (
      <>
        <div className="form">
          <input
            onChange={this.handleInputTextChange}
            value={this.state.text}
            type="text"
            placeholder="wpisz zadanie"
          />
          {this.state.err.text && <span className="date">{this.messages.incorrect_text}</span>}
          <br />
          <input
            onChange={this.handleInputCheckbox}
            type="checkbox"
            checked={this.state.checked}
            id="important"
          />
          <label htmlFor="important">Priorytet</label>
          <br />
          <label className="date" htmlFor="date"> Do kiedy zrobić
            <input
              onChange={this.handleInputDateChange}
              value={this.state.date}
              type="date" min={this.minDate}
              id="date" />
          </label>
          {this.state.err.date && <span className="date">{this.messages.incorrect_date}</span>}
          <br />
          <button onClick={this.handleClick}>Dodaj</button>
          {this.state.message && <span className="send">{this.state.message}</span>}
        </div>
        <hr />
      </>
    );
  }
}

export default AddTask;