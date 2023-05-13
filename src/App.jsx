import { useState } from 'react'
import './App.css'
import Digicard from './components/digikala card/DigiKalaCard'
import LoginPage from './pages/login page/LoginPage'

function App() {
  const [propDrill, setpropDrill] = useState("5")
  return (
    <Digicard propDrill={propDrill} setpropDrill={setpropDrill} />
  )
}

export default App
