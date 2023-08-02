
import { useParams } from "react-router-dom";
//import { useState } from "react";
//import { useEffect } from "react";
import useFetch from "../components/Hooks/useFetch";
import { Link } from "react-router-dom";

function ApiKey(){
const {id} = useParams()
    const [data] = useFetch(`https://rickandmortyapi.com/api/character/${id}`);
    if(data){
        return(
            <>
            <div className="grid grid-cols-1 lg:grid-cols-1 h-screen bg-gray-500 gap-12 py-8 justify-items-center">
                                    <div className="flex flex-col items-center">
                                        <img src={data.image} alt="" />

                                        <h2 className="text-white text-4x1 text-center my-4">{data.name}</h2>

                                        <p className="text-white">Status: <span className={data.status === "Alive" ? "text-green-400" : "text-red-400"}>
                                            {data.status}</span></p>

                                        <p className="text-white">Specie:  
                                            <span className={data.species === "Human" ? "text-amber-200" : "text-indigo-400"}> {data.species}</span></p>

                                        <p className="text-white">Type:  
                                            <span className="text-orange-400">{data.type === "" ? " None" :  ""} {data.type}</span></p>  

                                        <p className="text-white">Gender:  
                                            <span className={data.gender === "Male" ? "text-blue-400" : data.gender === "Female" ? "text-indigo-300" : "text-orange-300"}> {data.gender}</span></p>

                                        <p className="text-white">Place of origin:  
                                            <span className="text-purple-400"> {data.origin.name}</span></p>    

                                        <p className="text-white">Current location:  
                                            <span className="text-pink-400"> {data.location.name}</span></p>   
                                            <Link className="flex flex-col items-center text-teal-300  focus:text-teal-500 hover:underline " to="/">
                                                <p>Volver a la página principal</p>
                                            </Link>
                                        
                                    </div>
            </div>
            </>
        )
    }

}


export default ApiKey;