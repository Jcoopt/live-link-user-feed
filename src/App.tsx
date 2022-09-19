import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Image from 'react-bootstrap/Image'
import logo from './Assets/img/livelink_logo_text.svg'
import data from './Assets/data/data.json'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import Collapse from 'react-bootstrap/Collapse';

function App() {
  const [openCardIndex,setOpenCardIndex] =useState<number>()
  const [openCard,setOpenCard] =useState<boolean>()
  var cards:any= data.cards
  // if (openCardIndex!==undefined){
  //   cards =[data.cards[openCardIndex]]
  // }

  return (
    <body className="App">
      <Image className='logoImg'  src={logo}></Image>

      <Container>
        <Row >
        <Col >
        {cards.map((element:any, index:number)=> {
          return (
          
          <Card 
          hidden ={openCardIndex===undefined?false:openCardIndex===index?false:true}
           onClick={ el=>openCardIndex===undefined?setOpenCardIndex(index):""} 
          style={{ 
            height: openCardIndex!==undefined ?'auto':"auto",
   transition:"height 1s",
   
    // top:"15vh"
  }}
          className='classRow'>
          
          <Card.Body>


            <Row >
              <Col xs={3}>
              <Image roundedCircle className='userImg' src={element.img}></Image>
              </Col>
              <Col  className ="textCol">
                <Row>
                  <b className='userName'>
                     {element.name}
                  </b>
               
                </Row>
                <Row>
                  <span> 

                    {element.title}
                  </span>
                
                </Row>
                <Collapse in={openCardIndex!==undefined}>
        <Row>
                  
                  <span className='details'> 

                    {element.details}
                  </span>
                
                </Row>
      </Collapse>
                
              </Col>
            </Row>
            
          </Card.Body>
          </Card>
         
        )
        })}
        </Col>
        </Row>
      </Container>
      {openCardIndex!==undefined &&
                  <Button onClick={back => setOpenCardIndex(undefined)} variant="success">Back</Button>}
                
               
    </body>
  );
}

export default App;
