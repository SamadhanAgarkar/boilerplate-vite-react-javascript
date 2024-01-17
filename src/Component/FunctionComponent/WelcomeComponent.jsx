import { useState } from "react"

function GreetingsFunction() {
    const [uName, setUname] = useState("")
    return (
        <>
            <input placeholder="Enter your name" type="text"
                onChange={() => setUname(event.target.value)} />
            <p>Welcome to team {uName}</p>
        </>
    )
}

export default GreetingsFunction;