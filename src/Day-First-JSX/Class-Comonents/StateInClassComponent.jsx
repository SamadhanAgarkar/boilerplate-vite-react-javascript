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
                <input value={this.state.uName}/><br/>
            Hello,<b> {this.state.uName} {this.state.lName},</b> {this.state.cityName}, {this.state.stateName}
            </div>
        )
    }
}

export default StateInClassComponent;