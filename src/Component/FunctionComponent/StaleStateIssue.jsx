import { useState } from "react"

const StaleCounter = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        // setCounter(counter + 1);  // 0 + 1 -> 0 + 1
        // setCounter(counter + 1);  // 0 + 1 -> 0 + 1
        // setCounter(counter + 1);  // 0 + 1 -> 0 + 1
        // setCounter(counter + 1);  // 0 + 1 -> 0 + 1

        setCounter((pichlaData) => pichlaData + 1);  // 0 + 1 -> 0 + 1
        setCounter((pichlaData) => pichlaData + 1);  // 1 + 1 
        setCounter((pichlaData) => pichlaData + 1);  // 2 + 1

        console.log("Before Re-Render:", counter);
    }
    console.log("After Re-Render:", counter);
    return (
        <>
            <p>Counter: {counter}</p>
            <button onClick={handleClick}>Incement Counter</button>
        </>
    )
}
export default StaleCounter;