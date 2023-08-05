import React from "react";
import Header from "../Components/Header";
import clarity from "../assets/clarity.png";
import bin from "../assets/bin.png";
import "../styles/task.css";
const Task = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="newtask">
        <div>
          <h1>MY TASKS</h1>
        </div>
        <div>
          <h2>+ Add New Task</h2>
        </div>
      </div>
      <div className="sec-3">
        <div className="urgent">
          <div>
            <h1>Urgent</h1>
          </div>

          <div className="maballa">
            <button>
              <img src={clarity} alt="" /> Edit
            </button>
            <button className="bin">
              <img src={bin} alt="" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
