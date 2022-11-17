import React from "react";
import s from './LandingPage.module.css'
import img from '../../Assets/5.jpg'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className={s.container}>
            <img className={s.bg} src={img} alt="bg" />
            <div className={s.box}>
                <h1 className={s.title}>Countries PI</h1>
                <Link to='/home'>
                    <button className={s.btn}>
                        <span className={s.span}>Start</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;