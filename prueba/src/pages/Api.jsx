import { useState, useEffect } from "react";

function Api() {
  /*
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((informacion) => setData(informacion));
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 gap-4 p-4">
        {data &&
          data.results.map((elemento) => {
            return (
              <div className="flex flex-col items-center">
                <img src={elemento.image} alt="" width="50%" />
                <p>{elemento.name}</p>
                <p className={elemento.status == "Alive" ? "text-green-400" : "text-red-400"}>
                    {elemento.status}
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
  */
  const [data, setData] = useState(null);
  const options = {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({nombre:"peluche",precio:30,tipo_producto:"fisicos"}),
  }


  useEffect(() => {
    fetch("http://localhost:3001/products/",options)
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  if(data){
    console.log(data);
  }

  return(
    <></>
  )
}

export default Api;

/*
    Construir un sitio web informativo que funcione como un blog con la API de Fornite
    donde se muestren articulos con titulo e imagen, el link es el siguiente:
    https://fortnite-api.com/v2/news/br
*/