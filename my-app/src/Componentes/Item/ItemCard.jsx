import React from 'react'
import { Link } from 'react-router-dom'
import {Card} from 'react-bootstrap'


const ItemCard = (props) => {
  const {id,title,price,imagen} = props.item
    
  return (    
        <React.Fragment>   
            <Card className='col-lg-4 card' >
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                   precio: {price}
                </Card.Text>
                    <div>
                        <div>
                            <Link to={`/Item/${id}`}>detalles</Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </React.Fragment> 
  )
}

export default ItemCard