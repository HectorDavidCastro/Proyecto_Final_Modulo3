import React from 'react'
import {useFetch} from "../hooks/useFetch";
import { useRecetasGuardadasStore } from "../stores/recetasGuardadasStore";
import { Link } from "react-router-dom";
 

export const ListaRecetas = () => {
  const { datos, error, cargando }=useFetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
  const agregarReceta= useRecetasGuardadasStore((state)=> state.agregarReceta);

  if(cargando){
    return <div><h2>⏳ Cargando...</h2></div>
  }
  if(error){
    return <div><h2>‼ {error}</h2></div>
  }

  const recetas= datos.meals;
  return (
    <div >
        <h2>Nuestas recetas disponibles</h2>
        <h3>Toca la receta para ver mas detalles</h3>
        <div>
          <ul>
            {recetas.map((receta)=>(
              <li  key={receta.idMeal}>
                <div><img src={receta.strMealThumb} alt={receta.strMeal}  /></div>
                <Link  to={`/Receta/${receta.idMeal}`}><p>{receta.strMeal}</p></Link>
                <button  onClick={()=>agregarReceta(receta)}>Guardar</button>
              </li>
            ))}
          </ul>
        </div>
    </div>
  )
}
