import { Component } from "react";

class ToDoListComponent extends Component {
    state = {
        listItem: "",
        allListItems: ["suger", "salt"]
    }
    handleList = (e) => {
        this.setState({
            listItem: e.target.value
        })
        console.log("listItem", this.state.listItem)
    }
    handleAddItem = () => {
        const { listItem, allListItems } = this.state
        this.setState({
            allListItems: [listItem.toLocaleLowerCase(), ...allListItems], listItem: ""
        })
        // console.log("allListItems", allListItems)
    }
    render() {
        return (
            <>
                <div>
                    <h2 style={{ textAlign: "center" }}>To Do List</h2>
                    <div className="form-element" style={{ display: "flex", justifyContent: "center" }}>
                        <input
                            type="text"
                            className="form-control"
                            style={{ width: "50%" }}
                            placeholder="Enter your ToDoList.."
                            value={this.state.listItem}
                            onChange={this.handleList}
                        />
                        <button
                            type="button"
                            style={{ marginLeft: "20px" }}
                            className="btn btn-primary"
                            onClick={this.handleAddItem}
                        >Add Item In List</button>
                    </div>
                    <br />
                    <br />
                    <div style={{ listStyle: "none" }}>
                        {this.state.allListItems.map((items, index) => {
                            return (
                                <>
                                    <div style={{ paddingLeft: "10px", border: "1px solid gray", margin: "0 auto", width: "50%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <h5 key={index} style={{ textTransform: "capitalize" }}>{items}</h5>
                                        <button style={{}}>x</button>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    <br />
                    <br />
                </div>
            </>
        )
    }
}

export default ToDoListComponent;