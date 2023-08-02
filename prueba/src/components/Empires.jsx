import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Empires = () => {
        const [equipo, setEquipo] = useState([null])

        useEffect(() => {
            obtenerDatos()
        }, [])

        const obtenerDatos = async () => {
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations`);
            const users = await data.json()
            setEquipo(users.civilizations);
        }

    return(
            <div>
                <h1>Hola, soy Goku</h1>
                <ul>
                    {
                        equipo.map(item => (
                            <li key={item.id}>
                                <Link>
                                    {item.name} - {item.expansion}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
    );
}


export default Empires;