export default function Letter({
   letter,
   selectToggle,
   isChecked,
}) {
   return (
      <li>
         <label>
            <input
               type="checkbox"
               checked={isChecked}
               onChange={
                  () => selectToggle(letter.id)
               } />
            {letter.subject}
         </label>
      </li>
   )
}
