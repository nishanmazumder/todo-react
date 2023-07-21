import { useContext } from 'react'
import { LevelContext } from './Context'

export default function Section({ children }) {
   const level = useContext(LevelContext);

   return (
      <section>
         <LevelContext.Provider value={level + 1}>
            {children}
         </LevelContext.Provider>
      </section>
   )
}
