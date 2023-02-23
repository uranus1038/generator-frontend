import { useState } from 'react' ; 
//Add Component
import NavbarMain from '../components/navbarMainENG' ;
export default function StartApp() {
  const [count, setCount] = useState(0)
  return (
    <body>
     <NavbarMain />
    </body>
  )
}