import { useState } from 'react';
import { foods, filterItems } from './Data';

export default function FilterableList() {
   const [query, setQuery] = useState('');
   const results = filterItems(foods, query)

   function handleChange(e) {
      setQuery(e.target.value);
   }

   return (
      <>
         <SearchBar text={query} onChange={handleChange} />
         <hr />
         <List items={results} />
      </>
   );
}

function SearchBar({ text, onChange }) {
   return (
      <label>
         Search:{' '}
         <input
            value={text}
            onChange={onChange}
         />
      </label>
   );
}

function List({ items }) {
   return (
      <table>
         <tbody>
            {items.map(food => (
               <tr key={food.id}>
                  <td>{food.name}</td>
                  <td>{food.description}</td>
               </tr>
            ))}
         </tbody>
      </table>
   );
}
