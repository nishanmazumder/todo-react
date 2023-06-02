import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { sculptureList } from './data'

export default function UserData() {

   const [index, setIndex] = useState(0);
   const [showMore, setshowMore] = useState(false)


   const prvUserData = () => {
      if (index === 0) return
      setIndex(index - 1)
   }

   const nextUserData = () => {
      setIndex(index + 1)
   }

   const showMoreData = () => {
      setshowMore(!showMore)
   }


   let userData = sculptureList[index]

   return (
      <>
         <Container fluid>
            <Row>
               <Col><Button variant="outline-secondary" onClick={prvUserData}>Previous</Button></Col>
               <Col><Button variant="outline-secondary" onClick={nextUserData}>Next</Button></Col>
            </Row>
            <Row>
               <Card style={{ width: '50%' }}>
                  <Card.Img style={{width: '50%'}} variant="top" src={userData.url} alt={userData.alt} />
                  <Card.Body>
                     <Card.Title>{userData.name}</Card.Title>
                     <Card.Subtitle>{userData.artist}</Card.Subtitle>
                     {showMore && <Card.Text>{userData.description}</Card.Text>}
                     <Button variant="primary" onClick={showMoreData}>{showMore ? 'Hide' : 'Show'} More</Button>
                  </Card.Body>
               </Card>
            </Row>
         </Container>
      </>
   )
}
