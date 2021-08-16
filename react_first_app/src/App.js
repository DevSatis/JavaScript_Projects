import React,{useState} from 'react';
import './App.css';
import User from './User';

function App() {
  const [name, setName] = useState("Vanshika");
    return (
    <div className="App">
      <h1>Hello world !! welcome me in the world of React. Here we will learn Props.</h1>
      <User name={name} />
      <button onClick={()=>{setName("Satish")}}>Update Me</button>      
    </div>
  );
}

export default App;
