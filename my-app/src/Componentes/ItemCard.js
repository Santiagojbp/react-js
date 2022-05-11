import React from 'react'
import { Link } from 'react-router-dom'
import {Button, Card} from 'react-bootstrap'
const ItemCard = (props) => {
  const {id,nombre,price,imagen} = props.item
    return (    
        <React.Fragment>   
            <Card className='col-lg-2 card' >
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    {price}
                </Card.Text>
                <Link to={`/Item/${id}`}>detalles</Link>
                </Card.Body>
            </Card>
        </React.Fragment> 
  )
}

export default ItemCard