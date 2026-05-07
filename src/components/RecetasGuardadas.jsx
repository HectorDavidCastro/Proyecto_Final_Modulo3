import React from 'react'
import { useRecetasGuardadasStore } from "../stores/recetasGuardadasStore";
import styles from "../css/RecetasGuardadas.module.css";

export const RecetasGuardadas = () => {
  const recetasGuardadas= useRecetasGuardadasStore((state)=> state.recetas);
  const eliminarReceta= useRecetasGuardadasStore((state)=> state.eliminarReceta);
  const eliminarTodas= useRecetasGuardadasStore((state)=> state.eliminarTodas); 

  if(recetasGuardadas.length === 0){
    return(
      <div className={styles.container}>
        <h2 className={styles.h2}>Recetas Guardadas</h2>
        <p className={styles.text}>No hay recetas guardadas</p>
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Recetas Guardadas</h2>
      <ul className={styles.ul}>
        {recetasGuardadas.map((receta)=>(
          <li className={styles.recetaCard} key={receta.idMeal}>
            <h3 className={styles.recetaTitle}>{receta.strMeal}</h3>
            <button className={styles.button} onClick={()=> eliminarReceta(receta)}>Eliminar receta</button>
          </li>
        ))}
      </ul>
      <div>{recetasGuardadas.length > 1 ? <button className={styles.button} onClick={eliminarTodas}>Eliminar todas</button> : <div></div>}</div>
    </div>
  )
}
