import { useEffect, useState } from "react"

const UseEffectComponent = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(10);

    useEffect(() => {
        console.log("Component loaded successfully");
    }, [])

    useEffect(() => {
        console.log("Component loaded without depedency.");
    })

    useEffect(() => {
        console.log("1 >> counter1 updated.");
    }, [counter1])

    useEffect(() => {
        console.log(" 2 >> counter2 updated.");
    }, [counter2])

    useEffect(() => {
        console.log(" 1 & 2 >> counter 1 & 2 updated.");
    }, [counter2, counter1])

    return (
        <>
            <p>counter 1: {counter1}</p>
            <p>counter 2: {counter2}</p>
            <button onClick={() => setCounter1((prev) => prev + 1)}>Inc Counter 1</button>
            <button onClick={() => setCounter2((prev) => prev + 1)}>Inc Counter 2</button>
        </>
    )
}

export default UseEffectComponent;