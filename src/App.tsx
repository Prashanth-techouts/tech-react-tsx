import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import LifeCycleA from './components/LifeCycleA';
import UseStateForm from './components/UseStateForm';
import UseStateArrayObj from './components/UseStateArrayObj';
import StopWatch from './components/StopWatch';

function App() {
 {
  return (
    <div className="App">
      {/* <Greet name='gateway'><p>this is Gateway Site</p></Greet>
      <Greet name='Taj'><p>this is Taj Site</p></Greet>
      <Greet name='Vivanta'><p>this is Vivanta Site</p></Greet>
      <Welcome name='gateway'/>
      <Welcome name='Taj'/>
      <Welcome name='Vivanta'/> */}
      {/* <LifeCycleA/>
      <UseStateForm/>
     <UseStateArrayObj/> */}
     <StopWatch/>
          </div>
  );
}
}

export default App;
