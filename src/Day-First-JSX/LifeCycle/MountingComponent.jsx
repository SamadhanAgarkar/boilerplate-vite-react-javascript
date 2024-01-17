import { Component } from "react";

class LifeCycleComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 1
        }
        console.log("1. Constructor Loaded");
    }

    componentDidMount() {
        console.log("3. Mounting completed");
    }
    render() {
        console.log("2. Rendering Loaded");
        return (
            <>
                <p>Welcome to component</p>
            </>
        );
    }
}

export default LifeCycleComponent;