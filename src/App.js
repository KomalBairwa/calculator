import './App.css';
import {useState} from 'react';
function App() {
  
    const[result,setResult]=useState("");
    const clickHandler=(event)=>{
      setResult(result.concat(event.target.value))
    }

    const clearDisplay=()=>{
       setResult("");
    }

    const calculate=()=>{
         setResult(eval(result).toString());
    }

  return (
      <>
      <h1 className='heading'>BASIC CALCULATOR</h1>
      <div className='calc'>
        <input type="text" placeholder="0" id="answer" value={result}/>
        <input type="buttom" value="1" className='button' onClick={clickHandler}/>
        <input type="buttom" value="2" className='button' onClick={clickHandler}/>
        <input type="buttom" value="3" className='button' onClick={clickHandler}/>
        <input type="buttom" value="4" className='button' onClick={clickHandler}/>
        <input type="buttom" value="5" className='button' onClick={clickHandler}/>
        <input type="buttom" value="6" className='button' onClick={clickHandler}/>
        <input type="buttom" value="7" className='button' onClick={clickHandler}/>
        <input type="buttom" value="8" className='button' onClick={clickHandler}/>
        <input type="buttom" value="9" className='button' onClick={clickHandler}/>
        <input type="buttom" value="0" className='button' onClick={clickHandler}/>
        <input type="buttom" value="+" className='button' onClick={clickHandler}/>
        <input type="buttom" value="-" className='button' onClick={clickHandler}/>
        <input type="buttom" value="/" className='button' onClick={clickHandler}/>
        <input type="buttom" value="*" className='button' onClick={clickHandler}/>
        <input type="buttom" value="%" className='button' onClick={clickHandler}/>
        <input type="buttom" value="Clear" className='button button1' onClick={clearDisplay} />
        <input type="buttom" value="=" className='button button1' onClick={calculate}/>
      </div>
      </>
  );
}

export default App;

