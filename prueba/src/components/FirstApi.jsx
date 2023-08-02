import useFetch from "./Hooks/useFetch";

function FirstApi(){
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    if(data) {
        console.log(data);
    }
    return(
        <>
            {data && data.map((elemento) => {
                        return <p key={elemento.id}>{elemento.id}</p>
                        
                    })}
        
        </>
    );
}

export default FirstApi;