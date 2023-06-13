import {useState} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [inputTitle, setInputTitle] = useState("");
  const [inputTodo, setInputTodo] = useState("");
  
  const onTitleChangeHandler = (event) => {
    setInputTitle(event.target.value)
  }

  const onTodoChangeHandler = (event) => {
    setInputTodo(event.target.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    setInputTitle("")
    setInputTodo("")
  }

  return (
    <div className="html-style">
      <h1 className="body-title">My Todo List</h1>
      <form className="write-form" onSubmit={onSubmitHandler}>
        제목 <input className="write-input" type="text" value={inputTitle} onChange={onTitleChangeHandler}/>
        내용 <input className="write-input" type="text"value={inputTodo} onChange={onTodoChangeHandler}/>
        <button type="submit">추가하기</button>
      </form>
      <main>
        <div>

        </div>
        <label>Working</label>
        <label>Done</label>
      </main>
    </div>
  );
}

export default App;
