import React, { useState } from 'react';
import { Card,Button } from 'react-bootstrap';
import { phonesData } from './product.data';

const Products = () => {
    const [items,setItems] = useState(phonesData)
    const decQty = (id) => {
        const newItem = items.map((item) => 
            item.id === id && item.qty > 1 ? {...item, qty: item.qty - 1 } : item
    );
    setItems(newItem)
    };
    const incQty = (id) => {
        const newItem = items.map((item) => 
            item.id === id ? {...item, qty: item.qty + 1 } : item
    );
    setItems(newItem)
    };
  return (
    <div>
        <h1 className='bg-info text-white'>Products</h1>
        {items.map((item) => (
        <div className='d-inline-flex'>
        <Card className="shadow p-3 m-2 bg-body rounded " style={{ width: '13rem' }}>
        <Card.Img className='p-2' style={{ height: '15rem' }} variant="top" src={require(`./Assets/${item.image}.jpeg`)} />
        <Card.Body>
            <Card.Title>{item.model}</Card.Title>
            <Card.Text>{item.desc}</Card.Text>
            <h5>Price:  ₹{item.price}</h5>
            <div>
                <p>
                    Qty: 
                    <Button onClick={()=>decQty(item.id)} className='m-1'>-</Button>{item.qty}
                    <Button onClick={()=>incQty(item.id)} className='m-1'>+</Button>
                </p>
            </div>
            <Button variant="primary">Add to Cart</Button>
        </Card.Body>
        </Card>
        </div>
        ))}
    </div>
  )
}

export default Products