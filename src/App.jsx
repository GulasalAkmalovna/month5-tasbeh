import './App.css';
import { useState, useRef } from 'react';
import img from './image/islam.png'

function App() {

  const [count, setCount] = useState(0)
  const [counter, setCounter] = useState(0)

  const increment = () => {
    if (count < 33) {
      setCount(count + 1)
  
    }else if(count === 33){
      setCount(0 + 1)
      
      setCounter(counter + 1)
    }
  }


  const replaceAll = () => {
    setCount(0)
    setCounter(0)
  }

  return (
    <div className="App">
     <div className='wrapper'>
    <div className='content'>
    <h2>{count}/33</h2>
     <p>{counter}</p>
    </div>
    <div className="btn-wrap">
    <button onClick={increment}><img className='picture' src={img} alt="" /></button>
    <button className='btn' onClick={replaceAll}><img className='replace' src="https://static-00.iconduck.com/assets.00/asunder-icon-2048x2048-ne53e01w.png" alt="" /></button>
    </div>
     </div>
    </div>
  );
}

export default App;
