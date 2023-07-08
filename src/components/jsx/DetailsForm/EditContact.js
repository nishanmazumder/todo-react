import { useState } from 'react';
import { Tab, Form, Button } from 'react-bootstrap';

export default function EditContact({ initialData, onSave }) {
   const [name, setName] = useState(initialData.name);
   const [email, setEmail] = useState(initialData.email);

   console.log(initialData);

   return (
      <Tab.Pane eventKey="#first">

         <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name}
               onChange={e => setName(e.target.value)}
               placeholder="Name" />
         </Form.Group>

         <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={email}
               onChange={e => setEmail(e.target.value)}
               placeholder="Mail" />
         </Form.Group>

         <Button variant="danger" onClick={() => {
            setName(initialData.name);
            setEmail(initialData.email);
         }}>Reset</Button>

         <Button variant="primary" onClick={() => {
            const updatedData = {
               id: initialData.id,
               name: name,
               email: email
            };
            onSave(updatedData);
         }}>Save</Button>

      </Tab.Pane>
   );
}
