import React from 'react';
import './Task.css'
const Task = (props) => {
  const { active, important, text, date, id, finishDate } = props.task
  const style = { color: "red" }

  if (active) {
    return (
      <div className="task">
        <p ><strong style={important && active ? style : null}>{text}</strong> - do {date}
          <button className="done" onClick={() => props.done(id)}>Zostało zrobione</button>
          <button className="delete" onClick={() => props.delete(id)}>Usuń</button>
          {/* {new Date(date).getTime()} */}
        </p>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString()
    return (
      <div className="task">
        <p><strong>{text}</strong> <em>zrobić do ({date})</em>
          <br />
          -potwierdzenie wykonania <span>{finish}</span>
          <button className="finish" onClick={() => props.delete(id)}>Usuń</button>
        </p>
      </div>
    )
  }

}




export default Task;