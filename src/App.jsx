import { useState } from 'react'


import HeroPane from './components/heroPane/heroPane.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <div>

      <h1>Calendar</h1>
      <p>Calling ADHD Listeners! End Nuerotypicals Arrogant Regime</p>

      </div>

      <div>
        <HeroPane />
      </div>
      
    </div>
    </>
  )
}

export default App
