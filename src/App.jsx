import { useState } from 'react'

import NavButtons from './components/navButton/navButton.jsx'

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
