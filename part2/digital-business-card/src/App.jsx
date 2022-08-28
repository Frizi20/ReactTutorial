import { useState } from 'react'
import reactLogo from './assets/react.svg'

import Info from './components/Info'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return(
    <div className="wrapper">
      <div className="card-container">
        <Info/>
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App
