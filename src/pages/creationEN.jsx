import { useState } from 'react' ; 
//Add Component
import FormCreation from '../components/creationEN';

export default function RegisterApp() {
  const [count, setCount] = useState(0)
  return (
    <section>
      <FormCreation/>
    </section>
  )
}