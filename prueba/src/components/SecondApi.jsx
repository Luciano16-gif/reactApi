import { Link } from "react-router-dom";
import useFetch from "./Hooks/useFetch";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { useParams } from "react-router-dom";

function SecondApi(){
    const [data] = useFetch('https://rickandmortyapi.com/api/character/')
    return(
        <>
        <div className="grid grid-cols-1 lg:grid-cols-3 bg-gray-500 gap-12 py-8 justify-items-center">
            {
                data && data.results.map(
                    (elemento, index) => {
                        return(
                            <>
                                <div className="flex flex-col items-center" key={index.id}>
                                    <img src={elemento.image} alt="" />
                                    <h2 className="text-white text-4x1 text-center my-4">{elemento.name}</h2>
                                    <p className="">Status: <span className={elemento.status === "Alive" ? "text-green-400" : "text-red-400"}>
                                    {elemento.status}</span></p> 
                                            <Link className="flex flex-col items-center text-teal-300  focus:text-teal-500 hover:underline " to={`/${elemento.id}`}>
                                                <p>Ver más...</p>
                                            </Link>
                                </div>
                            </>
                        )
                    }
                )
            }
        </div>
        </>
    )
}

export default SecondApi;