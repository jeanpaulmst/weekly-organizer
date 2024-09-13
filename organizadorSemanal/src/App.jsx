import { useState } from 'react'
import logo from './images/UTN_logo.png'
import Grid from './components/Grid.jsx'
import GridStudent from './components/GridStudent.jsx'
import Data from './components/DataEntries.jsx'
import './App.css'

function App() {
  
  

  return (
    <>
      <div className='App'>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <header className="Title"> Organizador de cursada </header>
      </header>
      </div>
      <body>
        <Data/>
        <Grid />
        <GridStudent />
      </body>
      
    </>
  )
}

export default App
