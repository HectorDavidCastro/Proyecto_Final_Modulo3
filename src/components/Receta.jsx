import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import styles from "../css/Receta.module.css"


export const Receta = () => {
  const { datos, error, cargando }= useFetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
  const {id}= useParams();

  if(cargando){
    return <div className={styles.container}><h2 className={styles.loader}>⏳ Cargando...</h2></div>
  }
  if(error){
    return <div className={styles.container}><h2 className={styles.error}>‼ {error}</h2></div>
  }
  const receta= datos.meals.find((receta)=> receta.idMeal === id);
  if(!receta){
    return(
      <div className={styles.container}>
        <h2 className={styles.title}>No se encontró la receta</h2>
        <Link className={styles.button} to={"/Recetas"}>Volver a la lista de recetas</Link>
      </div>
    ) 
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{receta.strMeal}</h2>
      <div>
        <img className={styles.img} src={receta.strMealThumb} alt={receta.strMeal} title={receta.strMeal}/>
      </div>
      <ul className={styles.ingredients}>
        <h3 className={styles.ingredientsTitle}>Ingredientes</h3>
        {Object.entries(receta).map(([key, value])=>{
          if(key.startsWith("strIngredient") && value){
            const numero= key.slice(13);
            return <li key={numero} className={styles.ingredientsItem}>{value}</li>;
          }
          return null;
        })}
      </ul>
      <h3 className={styles.instructionsTitle}>Instrucciones</h3>
      <p className={styles.instructions}>{receta.strInstructions}</p>
      <Link className={styles.button} to={"/Recetas"}>Volver a la lista de recetas</Link>
    </div>
  )
}
