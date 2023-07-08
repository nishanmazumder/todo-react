import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Tab, Card } from 'react-bootstrap';
import ContactList from './ContactList.js';
import EditContact from './EditContact.js';

const AllContacts = [
   { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
   { id: 1, name: 'Alice', email: 'alice@mail.com' },
   { id: 2, name: 'Bob', email: 'bob@mail.com' }
];


export default function ContactManager() {
   const [contacts, setContacts] = useState(AllContacts);
   const [selectedId, setSelectedId] = useState(0);
   const selectedContact = contacts.find(c =>
      c.id === selectedId
   );

   function handleSave(updatedData) {
      const nextContacts = contacts.map(c => {
         if (c.id === updatedData.id) {
            return updatedData;
         } else {
            return c;
         }
      });
      setContacts(nextContacts);
   }

   return (
      <Container>
         <Row className="justify-content-md-center">
            <Col xs lg="6">
               <Tab.Container defaultActiveKey="#first">
                  <Card>
                     <ContactList
                        contacts={contacts}
                        selectedId={selectedId}
                        onSelect={id => setSelectedId(id)}
                     />
                     <Card.Body>
                        <Tab.Content>
                           <EditContact
                              key={selectedId}
                              initialData={selectedContact}
                              onSave={handleSave}
                           />
                        </Tab.Content>
                     </Card.Body>
                  </Card>
               </Tab.Container>
            </Col>
         </Row>
      </Container>


   )
}
