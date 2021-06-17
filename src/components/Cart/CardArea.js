import { Button } from '@material-ui/core';
import React from 'react';

const CardArea = ({ cart }) => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
    }
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99
    }

    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div style={{ borderBottom: '4px double #f1f1f1', textAlign: 'center' }}>
            <h4>Order Summary</h4>
            <p><strong>Items Ordered:</strong> {cart.length}</p>
            <p><strong>Product Price:</strong> {formatNumber(total)}৳</p>
            <p><small><strong>Shiiping Cost:</strong> {shipping}৳</small></p>
            <p><small><strong>Tax + VAT:</strong> {tax}৳</small></p>
            <p><strong>Total Price:</strong> {grandTotal}৳</p>
            
            <Button variant="contained" color="secondary">Place Order</Button>
            <br /><br />
        </div>
    );
};

export default CardArea;