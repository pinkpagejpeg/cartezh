import React, { useState } from 'react'
import classes from './CatalogSlaider.module.scss'
import CatalogSlaiderItem from '../catalogSlaiderItem/CatalogSlaiderItem';

const CatalogSlaider = ({ items }) => {
    const [offset, setOffset] = useState(0);

    const goPrev = () => {
        let newOffset = offset - 388;
        if (newOffset < 0) newOffset = 1164;
        setOffset(newOffset);
    }

    const goNext = () => {
        let newOffset = offset + 388;
        if (newOffset > 1164) newOffset = 0;
        setOffset(newOffset);
    }

    return (
        <div id="prev_button" className={classes.catalog_slaider__wrapper}>
            <a className={classes.catalog_slaider__buttons} onClick={goPrev}>
                <svg className={classes.catalog_slaider__next} xmlns="http://www.w3.org/2000/svg" width="28" height="51" viewBox="0 0 28 51">
                    <path d="M25.0376 1.99927L1.99997 25.0369" />
                    <path d="M25.0376 48.3298L1.99997 25.2922" />
                </svg>
            </a>
            <div className={classes.catalog_slaider__mainbox}>
                <div className={classes.catalog_slaider__line} style={{ left: -offset + "px" }}>
                    {
                        items.map(item => (
                            <CatalogSlaiderItem item={item} key={item.id} />
                        ))
                    }
                </div>
            </div>
            <a className={classes.catalog_slaider__buttons} onClick={goNext}>
                <svg className={classes.catalog_slaider__next} xmlns="http://www.w3.org/2000/svg" width="28" height="51" viewBox="0 0 28 51">
                    <path d="M2 48.3298L25.0376 25.2922" />
                    <path d="M2 1.99927L25.0376 25.0369" />
                </svg>
            </a>
        </div>
    );
}

export default CatalogSlaider;