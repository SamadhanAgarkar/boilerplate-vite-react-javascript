import { Component } from "react";


class StateInClassComponent extends Component{

state={
    uName: "Samadhan",
    lName:"Agarkar",
    cityName:"Pune",
    stateName:"Maharashtra"
}

    render(){
        return(
            <div>
                <input value={this.state.uName}/>
            Hello, {this.state.uName}, {this.state.lName},{this.state.cityName}, {this.state.stateName}
            </div>
        )
    }
}

export default StateInClassComponent;