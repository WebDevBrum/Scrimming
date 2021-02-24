import React from 'react';

function Product(props) {
    return (
    <div style={{backgroundColor:"magenta", border:"3px solid black", marginBottom:"5px"}}>
        <h2>Item: {props.name}</h2>
        <p>Description: {props.description}</p>
        <p>Price: £{props.price}</p>
    </div>
    )
}

export default Product;