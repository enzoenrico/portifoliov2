import { useState } from 'react'

import './App.css'
import Console from './components/Console/Console'
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'

function App() {
  return (
    <div className='main-app-wrapper'>
      <Header />
      <Homepage />

    </div>
  )
}

export default App
