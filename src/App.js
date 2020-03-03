import React from 'react';
import './App.css'; 
import {connect} from 'react-redux'
import {anotherName } from './actions/MyAction'
function App(props) { 
  return (
    <div className="App"> 
      <h1>Your name is {props.myName}</h1>
      <button onClick={()=>{props.nameChange()}} >Change Name</button>
    </div>
  );
}

const mapStateToProps = (state)=>{
  return {
    myName:state.name
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    nameChange:()=>{dispatch(anotherName())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
