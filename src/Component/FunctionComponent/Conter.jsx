import { useState } from "react";

const ConterFC = () => {
    const [counter, setCounter] = useState(0)
    return (
        <>
            Im Counter Component using Function component
            <p>{counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Inc</button>
            <button onClick={() => setCounter(counter - 1)}>Dec</button >
        </>
    )
}

export default ConterFC;