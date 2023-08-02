import { useState, useEffect } from "react";
//import { useParams } from "react-router-dom";
import { useParams } from "react-router-dom";

const useFetch2 = (url) => {
    const {id} = useParams();
        const [data, setData] = useState(null);
    
        useEffect(() => {
            fetch(url)
              .then((res) => res.json())
              .then((data) => setData(data));
          }, [id]);

          return [data];
};

export default useFetch2;