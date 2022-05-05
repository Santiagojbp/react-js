import React from 'react'
import { Link } from 'react-router-dom'
import {Card} from 'react-bootstrap'
const ItemCard = (props) => {
  const {id,nombre,price,imagen} = props.item
    return (
        <Card className='col-lg-4' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>
                {price}
            </Card.Text>
            <Link to={`/Item/${id}`}>detalles</Link>
            </Card.Body>
        </Card>
  )
}

export default ItemCard