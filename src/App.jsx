import { useState } from 'react'
import {BrowserRouter as Router , Navigate, Route , Routes } from "react-router-dom";
//Components
import RegisterApp from './pages/creationEN';
import StartApp from './pages/startAppEN';
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/en" element={ <StartApp />}/>
          <Route path="en/creation" element={ <RegisterApp />}/>
          <Route path="*" element={<Navigate to="/en" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
