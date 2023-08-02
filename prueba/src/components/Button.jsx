function Button({texto="esto es un boton", color="red-400"}){
    return(
        <button className={"bg-" + color + " mx-4"}>{texto}</button>
    )
}

export default Button;