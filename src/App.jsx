import { useState } from 'react'
import {BrowserRouter as Router , Navigate, Route , Routes } from "react-router-dom";
import StartApp from './pages/startApp';
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={ <StartApp />}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
