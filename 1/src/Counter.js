import React from "react";
import Button from "./Button";
class Counter extends React.Component{
    constructor(){
        super()
    }
    state={
       counter:0
    }
    increase=()=>{
        this.setState({counter:this.state.counter+1})
    }
    decrease=()=>{
      if(this.state.counter>0){
        this.setState({counter:this.state.counter-1})
      }
      
    }
    render(){
        return(
            <div className="counter">
                <h1 className="title" style={{margin:"1em"}}>{this.state.counter}</h1>
                <Button title="Increase" clickHandler={this.increase}/>
                <Button title="Decrease" clickHandler={this.decrease}/>
            </div>
        )
    }
} 
export default Counter