export default function ContactList({ contacts, selectedId, dispatch }) {
   return (
      <section className="contact-list">
         <ul>
            {/* 1838989408 - music planet */}
            {contacts.map((contact) => (
               <li key={contact.id}>
                  <button
                     onClick={() =>
                        {dispatch({
                           type: 'changed_selection',
                           contactId: contact.id
                        })}
                     }>
                     {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
                  </button>
               </li>
            ))}
         </ul>
      </section>
   );
}
