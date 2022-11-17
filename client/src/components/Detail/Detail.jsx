import React from 'react';
import { Link } from 'react-router-dom';
import s from './Detail.module.css';

const Detail = () => {
    return (
        <div className={s.container}>
            <div className={s.nav}>
                <Link to='/home'>
                    <h2 className={s.back}>{'< Back'}</h2>
                </Link>
            </div>
        </div>
    )
}

export default Detail;