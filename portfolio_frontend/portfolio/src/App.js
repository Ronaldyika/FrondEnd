import logo from './logo.svg';
import './App.css';
import { useState} from 'react';
import DayOne from './learning/DayOne';
import DayOneCounter from './learning/DayOneCounter';
import GetRequest from './learning/GetRequest';
import Calculator from './learning/Calculator';
// import React,{useState} from 'react';

function App() {
  // const [getData,setData] = useState()
  // const [isloading,setIsloading] = useState(false)

  // const clickhandler=async()=>{
  //   setIsloading(true)
  //   try{
  //     const resource = await fetch('http://127.0.0.1:8000/api/profile/')
  //     if(!resource.ok){
  //       console.log('failed to locate resource')
  //     }

  //     const jsonData = await resource.json()
  //     setData(jsonData);
  //     console.log(getData)
  //   }catch(error){
  //     console.log(error)
  //   }finally{
  //     setIsloading(false)
  //   }
  // }
return (
  // <div className="App">
  //   <header className="header">
  //     <input type="text" placeholder="Enter search term"  />
  //     <button onClick={() => clickhandler()}>Search</button>
  //   </header>
  //   <nav className="navBar">
  //     {isloading ? (
  //       <p>Loading...</p>
  //     ) : getData?.length > 0 ? (
  //       <ul>
  //         {getData.map((item) => (
  //           <ul key={item.id}>
  //             <li>{item.name} | {item.email}</li>
  //             <li>
  //             <img src={`url(${item.image})`} alt="{item.name} Image" onError={(event) => {
  //             }} />
  //             </li>
  //           </ul>
  //         ))}
  //       </ul>
  //     ) : (
  //       <p>No results found.</p>
  //     )}
  //   </nav>
  // </div>
  // <DayOne/>
  // <DayOneCounter/>
  // <GetRequest/>
  <Calculator/>
);

}

export default App;
