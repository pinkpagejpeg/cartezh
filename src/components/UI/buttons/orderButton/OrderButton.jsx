import React from 'react'
import classes from './OrderButton.module.scss'

const OrderButton = ({ children, ...props }) => {
    return (
        <button {...props} className={classes.order_button}>{children}</button>
    );
}

export default OrderButton;