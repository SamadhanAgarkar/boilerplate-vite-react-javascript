import { Component } from "react";

class Counter extends Component{
    state={
        counter: 1
    }
     handleIncrement= ()=>{
        this.setState({counter : this.state.counter+1})
    }
    render(){
        return(
            <div>   
                <p>{this.state.counter}</p>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={()=>{
                    this.setState({counter:this.state.counter - 1})
                }}>Decrement</button>
            </div>
        )
    }
}

export default Counter;