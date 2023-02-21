//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import './App.css'

import { Header } from "./components/Header/Header.jsx"
import { Navigation } from "./components/Navigation/Navigation.jsx"
import { Catalog } from "./components/Catalog/Catalog.jsx"

export const App = () => {
  
  return (
    <>
      <Header />
      <main>
        <Navigation />
        <Catalog />
      </main>
      <footer></footer>
    </>
  )
}


