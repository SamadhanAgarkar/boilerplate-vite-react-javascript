import { Component } from "react";

class UserDetail extends Component {
    render() {
        const { fName, email, password, female, male, cricket, football } = this.props;
        return (
            <>
                <div style={{textAlign: 'left' }}>
                    <h2>User Details</h2>
                    <p>
                        <strong>First Name:</strong> {fName}
                    </p>
                    <p>
                        <strong>Email:</strong> {email}
                    </p>
                    <p>
                        <strong>Password:</strong> {password}
                    </p>
                    <p>
                        <strong>Gender:</strong> 
                        {female === "on" ? "female":"Male"} 
                    </p>
                    <p>
                        
                    </p>
                    <p>
                        <strong>cricket:</strong> {cricket}
                    </p>
                    <p>
                        <strong>football:</strong> {football}
                    </p>
                </div>
            </>
        )
    }
}

export default UserDetail;