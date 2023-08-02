import { useRef } from "react";


function UseRef(){
    const inputElement = useRef();
    
    const focusInput = () => {
        inputElement.current.focus();
        inputElement.current.value = "Hola"
        inputElement.current.style = "background-color:red;"
    };
    
    return(
        <>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>
        </>

    );
}


export default UseRef;