import { Component } from "react";

class MicroPhoneComponent extends Component{
    state={
        isMicOn: true
    }
    handleClick=()=>{
        this.setState({
            isMicOn: !this.state.isMicOn
        })
           
    } 

    onMicrophoneToggle = () => {
        this.setState({ isMicrophoneActive: !this.state.isMicrophoneActive });
      };

    render(){
        return(
            <div>
                <button style={{
                    height: "100px",
                    width:"100px",   
                    backgroundColor: this.state.isMicOn ? "Tomato" : "Gray",
                    border: "#000",
                    color: "#fff",
                    borderRadius: "50%",
                    textAlign:"center"
                }}
                onClick={this.handleClick}> Mic</button>
            </div>
        )
    }
}

export default MicroPhoneComponent;