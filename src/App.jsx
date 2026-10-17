import { useState } from 'react'
import heropane from './components/heroPane/heroPane.jsx'
import navButtons from './components/navButtons/navButtons.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>

      <div>
        <navButtons />
      </div>
      <div>
        <heropane />
      </div>
      
    </div>
    </>
  )
}

export default App
