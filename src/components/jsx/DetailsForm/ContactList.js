import { Card, Nav } from 'react-bootstrap';

export default function ContactList({
   contacts,
   selectedId,
   onSelect
}) {
   return (
      <Card.Header>
         <Nav variant="tabs">
            {contacts.map(contact =>
               <Nav.Item key={contact.id}>
                  <Nav.Link onClick={() => onSelect(contact.id)} eventKey="#first">
                     {contact.id === selectedId ?
                        <b>{contact.name}</b> :
                        contact.name
                     }
                  </Nav.Link>
               </Nav.Item>
            )}
         </Nav>
      </Card.Header>
   );
}
