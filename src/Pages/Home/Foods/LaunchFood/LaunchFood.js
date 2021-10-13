import React from 'react';
import { Card, Col } from 'react-bootstrap';

const LaunchFood = ({ food }) => {
     const { name, img, price, des } = food;
     return (
          <div>
               <Col>
                    <Card>
                         <Card.Img variant="top" className="w-50 mx-auto p-4" src={img} />
                         <Card.Body>
                              <Card.Title>{name}</Card.Title>
                              <Card.Text>
                                   {des}
                              </Card.Text>
                              <Card.Text>
                                   {price}
                              </Card.Text>
                         </Card.Body>
                    </Card>
               </Col>
          </div>
     );
};

export default LaunchFood;