import React from 'react'
import { Link } from 'react-router-dom'


export const NavBar = () => {
  return (
    <div>
        <nav>
            <Link  to={"/"}>Home</Link>
            <Link  to={"/LogIn"}>LogIn</Link>
            <Link  to={"/Recetas"}>ListaDeRecetas</Link>
            <Link  to={"/RecetasGuardadas"}>RecetasGuardadas</Link>
        </nav>
    </div>
  )
}
