import useFetch from "./Hooks/useFetch";

function ThreeApi(){
    const [data] = useFetch("https://adventuretimeapi.herokuapp.com/people")
    return(
        <>
        <div className="grid grid-cols-1 lg:grid-cols-3 bg-gray-500 gap-12 py-8 justify-items-center">
            {
                data && data.map(
                    (si, index) => {
                        return(
                            <>
                                <div className="flex flex-col items-center" key={index}>
                                    <h2 className="text-white text-4x1 text-center my-4">{si.fullname}</h2>
                                    <p className="">Gender: <span className={si.gender === "Male" ? "text-green-400" : "text-red-400"}>
                                        {si.gender}</span>
                                    </p>
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

export default ThreeApi;