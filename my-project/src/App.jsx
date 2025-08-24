import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import DaisyButton from './DaisyButton';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <DaisyButton />
    </>
  )
}

export default App
