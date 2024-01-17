import { Component } from "react";

class UpdatingComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 1
        }
        console.log("1. Constructor Loaded");
    }
    handleIncCounter = () => {
        this.setState({ counter: this.state.counter + 1 });
        // this.forceUpdate();
        console.log("4. Updating the counter Value+1");
    }

    componentDidMount() {
        console.log("3. Mounting completed");
    }
    render() {
        console.log("2. Rendering Loaded");
        return (
            <>
                <p>Welcome to component: {this.state.counter}</p>
                <button onClick={this.handleIncCounter}>Inc Counter</button>
            </>
        );
    }
}

export default UpdatingComponent;