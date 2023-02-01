import React from "react";
import s from './LandingPage.module.css';
import '../Home/Continents.css';
import { Link } from 'react-router-dom';
import earth from '../../Assets/earth.png';
import cloud1 from '../../Assets/cloud1.png';
import cloud2 from '../../Assets/cloud2.png';
import cloud3 from '../../Assets/cloud3.png';
import cloud4 from '../../Assets/cloud4.png';
import bg from '../../Assets/bg.png';
import linkedin from '../../Assets/linkedin-logo.svg'
import github from '../../Assets/github-logo.svg'


const LandingPage = () => {
    return (
        <div className={s.container}>
            <div className={s.left}>
                <div className={s.div}>
                    <h1 className={s.title}>Countries PI</h1>
                    <p className={s.p}>
                        Welcome to my individual project about countries.<br />
                        In this project you will find current information of different countries from all over the world. <br />
                        Enjoy  {':)'}
                    </p>
                    <Link to='/home'>
                        <button className={s.btn}>Start</button>
                    </Link>
                </div>
            </div>
            <div className={s.right}>
                <img className={s.bg} src={bg} alt="bg" />
                <img className={s.earth} src={earth} alt="earth" />
                <img className={s.cloud1} src={cloud1} alt="cloud1" />
                <img className={s.cloud2} src={cloud2} alt="cloud2" />
                <img className={s.cloud4} src={cloud3} alt="cloud3" />
                <img className={s.cloud3} src={cloud4} alt="cloud4" />
            </div>
            <div className={s.contact}>
                <p>Contact me:</p>
                <a href="https://www.linkedin.com/in/lucascserrate/" target='_blank'><img className={s.logo} src={linkedin} alt="linkedin" /></a>
                <a href="https://github.com/Lucascserrate" target='_blank'><img className={s.logo} src={github} alt="github" /></a>
            </div>
        </div>
    )
}

export default LandingPage;