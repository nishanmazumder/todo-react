import { useContext } from 'react'
import { LevelContext } from './Context'

export default function Heading({ level, children }) {

   const context = useContext(LevelContext);

   console.log(context);

   switch (context) {
      case 1:
         return <h1>{children}</h1>
      case 2:
         return <h2>{children}</h2>
      case 3:
         return <h3>{children}</h3>
      default:
         throw Error('Error: ' + level);
   }
}
