const MenuComponent = ()=>{
    const HandleHomeClick = ()=>{
        alert("Im here..!")
    }
    return(
        <>
        <h1>Menu Links</h1>
        <ul>
            <li onClick={HandleHomeClick}>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </>
    )
}

export default MenuComponent