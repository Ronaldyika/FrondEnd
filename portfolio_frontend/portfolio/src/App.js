import logo from './logo.svg';
import './App.css';
import { useState} from 'react';
// import React,{useState} from 'react';

function App() {
  const [getData,setData] = useState()
  const [isloading,setIsloading] = useState(false)

  const clickhandler=async()=>{
    setIsloading(true)
    try{
      const resource = await fetch('http://127.0.0.1:8000/api/profile/')
      if(!resource.ok){
        console.log('failed to locate resource')
      }

      const jsonData = await resource.json()
      setData(jsonData);
      console.log(getData)
    }catch(error){
      console.log(error)
    }finally{
      setIsloading(false)
    }
  }
  return (
    <div className="App">
      
      <header className="header">
      </header>
      <nav className='navBar'>
        <button  onClick={clickhandler}>click me</button>
      </nav>
    </div>
  );
}

export default App;
