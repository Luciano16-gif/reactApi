import { useState } from "react"

function UseState(){
    const [color, setColor] = useState("red")
    return(
        <button className={"p-4 bg-" + color + "-400"} 
        onClick={() => { color === "red" ? setColor("green") : setColor("red") }}>
            El color es: {color}
        </button>

        
    );
}


export default UseState