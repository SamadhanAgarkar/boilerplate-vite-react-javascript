import { useState } from "react";

const HobbiesFunc = () => {
    const [hobbie, setHobbie] = useState([
        { id: 1, name: "Music" },
        { id: 2, name: "Travel" },
        { id: 3, name: "Food" },
        { id: 5, name: "Reels watching" },
    ]);

    const handleRemove = (id) => {
        setHobbie((preState) => {
            return preState.filter((hobbi) => hobbi.id !== id);
        });
    };

    return (
        <>
            <p>Hobbies</p>
            <ul>
                {hobbie.map((hobbi) => {
                    return (
                        <li key={hobbi.id}>
                            <p>{hobbi.name}</p>
                            <button onClick={() => handleRemove(hobbi.id)}>x</button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default HobbiesFunc;