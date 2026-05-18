import React from 'react'
import {useFetch} from "../hooks/useFetch";
import { useRecetasGuardadasStore } from "../stores/recetasGuardadasStore";
import { Link } from "react-router-dom";
import styles from "../css/ListaRecetas.module.css"
 

export const ListaRecetas = () => {
  const { datos, error, cargando }=useFetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
  const agregarReceta= useRecetasGuardadasStore((state)=> state.agregarReceta);

  if(cargando){
    return <div className={styles.container}><h2 className={styles.loader}>⏳ Cargando...</h2></div>
  }
  if(error){
    return <div className={styles.container}><h2 className={styles.error}>‼ {error}</h2></div>
  }

  const recetas= datos.meals;
  return (
    <div className={styles.container}>
        <h2 className={styles.h2}>Nuestas recetas disponibles</h2>
        <h3 className={styles.h3}>Toca la receta para ver mas detalles</h3>
        <div>
          <ul>
            {recetas.map((receta)=>(
              <li className={styles.card} key={receta.idMeal}>
                <div><img className={styles.cardImg} src={receta.strMealThumb} alt={receta.strMeal}  /></div>
                <Link className={styles.cardText} to={`/Receta/${receta.idMeal}`}><p>{receta.strMeal}</p></Link>
                <button className={styles.cardButton}  onClick={()=>agregarReceta(receta)}>Guardar</button>
              </li>
            ))}
          </ul>
        </div>
    </div>
  )
}
