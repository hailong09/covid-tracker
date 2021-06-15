import React from 'react'
import { Card } from 'react-bootstrap'


const CardItem = ({bg, header, title}) => {
    return (
      <div className="col-xl-6 col-lg-6 col-md-6 col">
         <Card
          bg={bg || "primary"}
          text={ 'light'}
          style={{ width: '15rem', height: '6rem' }}
          className="m-2"
        >
        <Card.Header>{header}</Card.Header>
        <Card.Body>
          <Card.Title className="fs-6">{title}</Card.Title>
        </Card.Body>
      </Card>

      </div>
       
    )
}

export default CardItem
