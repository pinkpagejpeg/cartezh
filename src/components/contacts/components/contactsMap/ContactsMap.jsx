import React, { useEffect } from 'react'
import classes from './ContactsMap.module.scss'
import { getMap } from '../../../../utils/helpers/getMap'

const ContactsMap = () => {
    useEffect(() => {
        const {map, marker } = getMap()

        return () =>  {
            marker.remove()
            map.remove()
        }
    }, [])

    return (
        <div className={classes.contacts_map__wrapper}>
            <div id="map" className={classes.contacts_map__map}></div>
        </div>
    );
}

export default ContactsMap;