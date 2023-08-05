import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import Header from "./Components/Header";
import Task from "./Pages/Task";

function App() {
  return (
    <>
      <Task />
    </>
  );
}

export default App;
