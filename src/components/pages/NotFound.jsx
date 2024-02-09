import React from 'react'
import { useNavigate } from 'react-router-dom';
import classes from '../../styles/NotFound.module.scss'
import CallButton from '../UI/buttons/callButton/CallButton';
import notFound from '../../assets/images/404.jpg'

const NotFound = () => {
    const navigate = useNavigate();
    const backLanding = () => {
        navigate('/');
    };

    return (
        <div className={classes.notfound__wrapper}>
            <h2 className={classes.notfound__text}>Запрашиваемая страница не найдена</h2>
            <img className={classes.notfound__image} src={notFound} alt="Страница не найдена" />
            <CallButton onClick={backLanding}>Вернуться на главную</CallButton>
        </div>
    );
}

export default NotFound;