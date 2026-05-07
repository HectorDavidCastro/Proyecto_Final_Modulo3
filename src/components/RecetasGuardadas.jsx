import React from 'react'
import { useRecetasGuardadasStore } from "../stores/recetasGuardadasStore";

export const RecetasGuardadas = () => {
  const recetasGuardadas= useRecetasGuardadasStore((state)=> state.recetas);
  const eliminarReceta= useRecetasGuardadasStore((state)=> state.eliminarReceta);
  const eliminarTodas= useRecetasGuardadasStore((state)=> state.eliminarTodas); 

  if(recetasGuardadas.length === 0){
    return(
      <div>
        <h2>Recetas Guardadas</h2>
        <p>No hay recetas guardadas</p>
      </div>
    )
  }
  return (
    <div>
      <h2>Recetas Guardadas</h2>
      <ul>
        {recetasGuardadas.map((receta)=>(
          <li key={receta.idMeal}>
            <h3>{receta.strMeal}</h3>
            <button onClick={()=> eliminarReceta(receta)}>Eliminar receta</button>
          </li>
        ))}
      </ul>
      <div>{recetasGuardadas.length > 1 ? <button onClick={eliminarTodas}>Eliminar todas</button> : <div></div>}</div>
    </div>
  )
}
