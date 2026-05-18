import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../css/NavBar.module.css"


export const NavBar = () => {
  return (
    <div>
        <nav className={styles.container}>
            <Link className={styles.link} to={"/"}>Home</Link>
            <Link className={styles.link} to={"/LogIn"}>LogIn</Link>
            <Link className={styles.link} to={"/Recetas"}>ListaDeRecetas</Link>
            <Link className={styles.link} to={"/RecetasGuardadas"}>RecetasGuardadas</Link>
        </nav>
    </div>
  )
}
