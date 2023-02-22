//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import './App.css'
import { Provider } from 'react-redux'
import { Catalog } from "./components/Catalog/Catalog.jsx"
import { Header } from "./components/Header/Header.jsx"
import { Navigation } from "./components/Navigation/Navigation.jsx"
import { store } from './store/index.js'

export const App = () => {
  
  return (
    <Provider store={store}>
      <Header />
      <main>
        <Navigation />
        <Catalog />
      </main>
      <footer></footer>
    </Provider>
  )
}


