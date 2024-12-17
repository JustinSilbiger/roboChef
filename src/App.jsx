import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Chef from './Chef'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <div className="app-content">
        <Header />
        <Chef />
      </div>
    </div>
  ) 
}

export default App
