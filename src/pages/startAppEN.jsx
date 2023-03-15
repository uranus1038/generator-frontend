import { useState } from 'react' ; 
//Add Component
import NavbarMain from '../components/navbarMainEN' ;
export default function StartApp() {
  const [count, setCount] = useState(0)
  return (
    <section>
     <NavbarMain />
     {/* test */}
    </section>
  )
}