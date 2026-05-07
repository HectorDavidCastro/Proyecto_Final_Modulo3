import { useState, useEffect } from "react"

export const useFetch= (url)=>{
    const [datos, setDatos]= useState(null);
    const [error, setError]= useState(null);
    const [cargando, setCargando]= useState(true);

    useEffect(()=>{
         const obtenerDatos= async ()=>{
            try {
                const response= await fetch(url);
                const data= await response.json();
                setDatos(data);
            } catch (error) {
                console.error(error);
                setError("Error al cargar los datos");
            }
            finally{
                setCargando(false)
            }
        }
        obtenerDatos();
    },[url]);

    return {datos, error, cargando}
}