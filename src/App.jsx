import { useState } from 'react'
import OmdbContainer from "./components/OmdbContainer";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return <OmdbContainer />;
  
}

export default App
