import React from 'react'
import classes from './Hero.module.scss'
import MoreButton from '../UI/buttons/moreButton/MoreButton'
import hero_car from '../../assets/images/hero_car.png'
import hero_scroll from '../../assets/images/hero_scroll.svg'

const Hero = () => {
    return (
        <div className={classes.hero__wrapper}>
            <div className={classes.hero__info}>
                <h1 className={classes.hero__title}>Всё для вашего автомобиля</h1>
                <p className={classes.main_text}>Высокий уровень вовлечения представителей целевой
                    аудитории является четким доказательством простого факта: существующая теория
                    создаёт предпосылки для существующих финансовых и административных условий.</p>
                <MoreButton isLink to="#pros">Подробнее</MoreButton>
                <img className={classes.hero__scroll} src={hero_scroll} alt="Scroll" />
            </div>
            <img className={classes.hero__image} src={hero_car} alt="Hero car" />
        </div>
    );
}

export default Hero;