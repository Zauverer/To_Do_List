import React from 'react';

import './Todo.css';
export default class Todo extends React.Component{

  constructor(){
  super();
  this.state = {
    tasks : [],
    task : "",
     };
  this.handleChange = this.handleChange.bind(this);
}

handleChange(e) {
  e.preventDefault();
  this.setState({task: e.target.value});
  console.log(e.target.value);
}

// preventDefault se utiliza con OnChange, OnSubmit y anchor

onSubmit(e){
  e.preventDefault();
  this.setState(
    {
    tasks: this.state.tasks.concat(this.state.task),
    task:"",
  }
  )
}

onClick(index){
  let arr = this.state.tasks
  arr.splice(index,1)
  this.setState(
    {
    tasks: arr
  }
  )
}

render(){
  return(
<div className="container-fluid">
  <div className="row">
    <div className="col col-sm-1"></div>
    <div className="col text-center col-sm-12">
        <h2>I don´t give a damn  <br/> To do List</h2>
    </div>
    <div className="col col-sm-1"></div>
  </div>  
  
  <div className="row align-self-center">
    <div className="col text-center"></div>
    <div className="col text-center mb-3">
      <form onSubmit={(e)=>this.onSubmit(e)}>
        <input type="text" className="form-control" id="TaskIn" value={this.state.task} onChange={this.handleChange}/>
      </form>
    </div>
    <div className="col"></div>
  </div>
  
  <div className="row align-self-center">
      <div className="col"></div>
      <div className="col"> 
        <ul className="list-group">
        {this.state.tasks.map((item, index)=>{
       return <li className="list-group-item" key={index}>{item}<button type="button" className="close" onClick={()=>this.onClick(index)}>&times;</button></li>
})}
        </ul>
      </div>
      <div className="col"></div>
  </div>  
</div>
    );
  }
}