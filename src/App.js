import React from "react";
import "./style.css";

export default function App() {
  const title = 'Blog Post';
  const body = 'This is my blog post';
  const comments = [
    {id:1, text: 'comment one'},
    {id:2, text: 'comment two'},
    {id:3, text: 'comment three'},
    {id:4, text: 'comment four'}
  ]
  return (
    <div className='container'>
      <h1> {title.toUpperCase()} </h1>
      <p> {body} </p>

      <div className="comments">
        <h2>Comments ({comments.length})</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}> {comment.text} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App
