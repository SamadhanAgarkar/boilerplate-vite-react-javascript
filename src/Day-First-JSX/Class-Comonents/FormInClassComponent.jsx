import { Component } from "react";

class FormInClassComponent extends Component{
    state={
        fName: "",
        lname: "",
        email: ""
    }
    render(){
        return(
            <div>
                <form>
                    <div>
                        <label for="fname">First Name:</label>
                        <input type="text" id="fname" name="fname" />
                    </div>
                    <br/>
                    <div>
                        <label for="lname">Last Name:</label>
                        <input type="text" id="lname" name="lname"/>
                    </div>
                    <br/>
                    <div>
                        <label for="email">Email ID:</label>
                        <input type="email" id="email" name="email"/>
                    </div>
                    <br/>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormInClassComponent;