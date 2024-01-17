import { Component } from "react";
import { toast } from 'react-toastify';

class HobbbiesFiddler extends Component {
    state = {
        hobbie: "",
        newHobbies: []
    }

    handleHobbie = (e) => {
        this.setState({
            hobbie: e.target.value
        })
        console.log("hobbie", this.state.hobbie);
    }

    handleAddhobies = () => {
        const { hobbie, newHobbies } = this.state;

        if (!hobbie) {
            toast("Please add hobbi..!");
            return;
        }
        if (newHobbies.includes(hobbie.toLocaleLowerCase())) {
            toast(`${hobbie} hobby is alreday present.!`);
            this.setState({
                hobbie: ""
            })
            return;
        }
        this.setState({
            newHobbies: [hobbie.toLocaleLowerCase(), ...newHobbies], hobbie: ""
        })
        console.log("newHobbies", newHobbies);
        toast(`${hobbie.toLocaleLowerCase()} hobby Added successfully..!`);
    }

    handleDelete = (id) => {
        console.log("Index to delete: ", id);
        const updatedHobby = this.state.newHobbies.filter((item, index) => index !== id);
        console.log("updatedHobby", updatedHobby)
        this.setState({
            newHobbies: updatedHobby
        })
        console.log("updatedHobby", updatedHobby);
        toast(`${this.state.newHobbies[id]} hobby deleted successfully..!`);
    }

    handleDelAllhobies = () => {
        this.setState({
            newHobbies: []
        })
        toast("All Hobbies deleted successfully..!");
    }
    render() {
        return (
            <div>
                <h2 style={{ textAlign: "center" }}>Hobbies Fiddler</h2>
                <div className="form-element" style={{ display: "flex", justifyContent: "center" }}>
                    <input
                        type="text"
                        id="hobbies-input"
                        value={this.state.hobbie}
                        onChange={this.handleHobbie}
                        className="form-control"
                        style={{ width: "50%" }}
                        placeholder="Enter your hobby"
                    />
                    <button type="button" style={{ marginLeft: "20px" }} className="btn btn-primary" onClick={this.handleAddhobies}>+</button>
                    <br /><br />
                </div>
                <button className="btn btn-primary" onClick={this.handleDelAllhobies}>Delete All</button>

                <br /><br />
                <ul>
                    {this.state.newHobbies.map((name, index) => (
                        <li style={{ marginBottom: "20px", textTransform: "capitalize" }} key={index}>{name}
                            <button
                                className="btn btn-primary"
                                onClick={() => this.handleDelete(index)}
                            >x</button></li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default HobbbiesFiddler;