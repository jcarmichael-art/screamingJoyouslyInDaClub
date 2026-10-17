import { useState } from 'react'
import heropane from './components/heroPane/heroPane.jsx'
import NavButtons from './components/NavButtons/NavButtons.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>

      <div>
        <NavButtons />
      </div>
      
    </div>
    </>
  )
}

export default App
