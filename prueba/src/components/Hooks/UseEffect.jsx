import { useEffect, useState} from "react";

function UseEffect(){
    const [contador, setContador] = useState(0);
    useEffect(
        () => {
            setTimeout(() =>  {
                setContador(
                    (contador) => contador+1
                )    
            }, 1000)
        }, [contador]
     );
    return(
        <h1>Veces que un adolescente afirma haber tenido relaciones sexuales con mi progenitora: {contador}</h1>
        

    );
}

export default UseEffect; 