import { useState } from 'react'

import './App.css'
//delete later
import Chat from './components/chat/chat.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div>
      <Chat/>
    </div>
    </>
  )
}

export default App
