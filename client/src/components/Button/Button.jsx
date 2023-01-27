import React from 'react';
import s from './Button.module.css'

const Button = ({ value, handlerClick }) => {
    return (
        <button className={s.btn} onClick={handlerClick}>
            <span className={s.shadow}></span>
            <span className={s.edge}></span>
            <span className={s.front}>{value}</span>
        </button>
    )
}

export default Button