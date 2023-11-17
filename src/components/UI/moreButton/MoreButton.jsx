import React from 'react'
import classes from './MoreButton.module.scss'

const MoreButton = ({ children, ...props }) => {
    return ( 
        <button {...props} className={classes.more_button}>{children}</button>
     );
}
 
export default MoreButton;