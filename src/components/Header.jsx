import React from 'react'
import { NavBar } from './NavBar'
import styles from "../css/Header.module.css"

export const Header = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.h1}>Recetas YA</h1>
        <NavBar/>
    </div>
  )
}
