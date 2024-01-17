import { useState } from "react";

const ToggleUI = () => {
    const [showData, setShowData] = useState("");
    return (
        <>
            <p>ToggleUI</p>
            <button onClick={() => setShowData(!showData)}>Toggle UI</button>
            {showData ? <p>Input type text</p> : <p>Input type password</p>}
            <input type={showData ? "text" : "password"} placeholder="Enter password" />
        </>
    )
}

export default ToggleUI;