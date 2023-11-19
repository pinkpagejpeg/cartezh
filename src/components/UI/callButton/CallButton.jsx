import React from 'react'
import classes from './CallButton.module.scss'

const CallButton = ({ children, ...props }) => {
    return (
        <button {...props} className={classes.call_button}>{children}</button>
    );
}

export default CallButton;