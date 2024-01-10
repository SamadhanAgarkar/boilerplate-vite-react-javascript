import { Component } from "react";
import UserDetail from "./UserDeatils";

class Registration extends Component {
    state = {
        fName: '',
        email: '',
        password: '',
        female: '',
        male: '',
        football: '',
        cricket: ''
    }

    handleSubmit = (e) => {
        e.preventDefault(); // Prevents the form from submitting and refreshing the page
        console.log("First Name:", this.state.fName);
        console.log("Email:", this.state.email);
        console.log("PAssword:", this.state.password);
        console.log("male:", this.state.male);
        console.log("female:", this.state.female);
        console.log("cricket:", this.state.cricket);
        console.log("football:", this.state.football);
    }

    handleFName = (e) => {
        console.log(e.target.value);
        this.setState({ fName: e.target.value })
    }
    handleEmail = (e) => {
        console.log(e.target.value);
        this.setState({
            email: e.target.value
        })
    }
    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handleFeMaleBox = (e) => {
        this.setState({
            female: e.target.value
        })
    }
    handleMaleBox = (e) => {
        this.setState({
            male: e.target.value
        })
    }
    handlecricketBox = (e) => {
        this.setState({
            cricket: e.target.value
        })
    }
    handlefootballBox = (e) => {
        this.setState({
            football: e.target.value
        })
    }
    render() {
        const { fName, email, password, female, male, cricket, football } = this.state
        return (
            <>
                <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
                    <div style={{textAlign: 'left' }}>
                        <div>
                            <h2>Registration Here</h2>
                        </div>
                        <form>
                            <div>
                                <label>First Name: </label>
                                <input type="text" id="fName" name="fName" onChange={this.handleFName} />
                            </div>
                            <br/>
                            <div>
                                <label>Email: </label>
                                <input type="email" id="email" name="email" onChange={this.handleEmail} />
                            </div>
                            <br/>
                            <div>
                                <label>Password: </label>
                                <input type="password" id="password" name="password" onChange={this.handlePassword} />
                            </div>
                            <br/>
                            <div>
                                <label>Gender: </label>
                                <input type="checkbox" id="male" name="male" onChange={this.handleMaleBox} /> Male
                                <input type="checkbox" id="female" name="female" onChange={this.handleFeMaleBox} /> Female
                            </div>
                            <br/>
                            <div>
                                <label>Hobies: </label>
                                <input type="radio" id="football" name="football" onChange={this.handlefootballBox} /> football
                                <input type="radio" id="cricket" name="cricket" onChange={this.handlecricketBox} /> cricket
                            </div>
                            <br/>
                            <div>
                                <button onClick={this.handleSubmit}>submit</button>
                            </div>
                        </form>
                    </div>
                    <UserDetail fName={fName} email={email} password={password} female={female} male={male} cricket={cricket} football={football} />
                </div>
            </>
        )
    }
}

export default Registration;

