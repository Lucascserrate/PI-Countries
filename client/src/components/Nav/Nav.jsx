import React from "react";
import s from './Nav.module.css';
import img from '../../Assets/earth.png'
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import Button from '../Button/Button';


const Nav = ({ setForm }) => {
    return (
        <div className={s.container}>
            <div className={s.flex}>
                <Link to='/'>
                    <div className={s.logo}>
                        <img src={img} alt="logo" className={s.img} />
                        <h1 className={s.title}>PI Countries</h1>
                    </div>
                </Link>
                <Search />
                <Button value='Create' handlerClick={() => setForm(true)} />
            </div>
        </div>
    )
}

export default Nav;