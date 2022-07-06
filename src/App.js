import React from "react";
import Header from './component/Header'
import "./style.css";

export default function App() {
  return (
    <>
      <Header text= 'Hello World'> </Header>
      <div className="container">
        <h1> My App </h1>
      </div>
    </>
  )
}

export default App