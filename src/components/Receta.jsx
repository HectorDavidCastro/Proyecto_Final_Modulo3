import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";


export const Receta = () => {
  const { datos, error, cargando }= useFetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
  const {id}= useParams();

  if(cargando){
    return <div ><h2>⏳ Cargando...</h2></div>
  }
  if(error){
    return <div><h2>‼ {error}</h2></div>
  }
  const receta= datos.meals.find((receta)=> receta.idMeal === id);
  if(!receta){
    return(
      <div>
        <h2>No se encontró la receta</h2>
        <Link  to={"/Recetas"}>Volver a la lista de recetas</Link>
      </div>
    ) 
  }
  return (
    <div>
      <h2>{receta.strMeal}</h2>
      <div>
        <img src={receta.strMealThumb} alt={receta.strMeal} title={receta.strMeal}/>
      </div>
      <ul>
        <h3>Ingredientes</h3>
        {Object.entries(receta).map(([key, value])=>{
          if(key.startsWith("strIngredient") && value){
            const numero= key.slice(13);
            return <li key={numero}>{value}</li>;
          }
          return null;
        })}
      </ul>
      <h3>Instrucciones</h3>
      <p >{receta.strInstructions}</p>
      <Link  to={"/Recetas"}>Volver a la lista de recetas</Link>
    </div>
  )
}
