import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './Pages/HomePage'
import { LogInPage } from './Pages/LogInPage'
import { RecetasPages } from './Pages/RecetasPages'
import { GuardadasPage } from './Pages/GuardadasPage'
import { Receta } from './components/Receta'
import styles from "./css/App.module.css"

function App() {


  return (
    <div className={styles.container}>
       <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/LogIn" element={<LogInPage/>}/>
          <Route path="/Recetas" element={<RecetasPages/>}/>
          <Route path="/Receta/:id" element={<Receta/>}/>
          <Route path="/RecetasGuardadas" element={<GuardadasPage/>}/>
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App
