import { useEffect } from "react";
import { useState } from "react";

function Covid(){
    const [data, setData] = useState(null)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f0285750b5msh44e72c9741bb33ap1f14fbjsna52c5cfd9c07',
            'X-RapidAPI-Host': 'covid-19-tracking.p.rapidapi.com'
        }
    };
    
    useEffect(
        () => {    fetch('https://covid-19-tracking.p.rapidapi.com/v1/World', options)
        .then(response => response.json())
        .then(response => setData(response))
        .catch(err => console.error(err));   
    },
    // eslint-disable-next-line
    []
    )
    if(data){
        console.log(data)
    }

    return(
        <>
                <p>{data ? data.Country_text : "Cargando"}</p>
        </>
    );
}

export default Covid;

/*realizar una pagina web que muestre información general sobre un tópico (blogs, una serie, personajes, etc)
Y que cuando se le de click a alguno de estos elementos */