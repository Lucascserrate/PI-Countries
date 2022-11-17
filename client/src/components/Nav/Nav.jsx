import React from "react";
import s from './Nav.module.css';
import img from '../../Assets/icon.png'
import { Link } from "react-router-dom";
import Search from "../Search/Search";


const Nav = () => {

    return (
        <div className={s.container}>
            <div className={s.flex}>
                <Link to='/home'>
                    <div className={s.logo}>
                        <img src={img} alt="logo" className={s.img} />
                        <h1 className={s.title}>PI Countries</h1>
                    </div>
                </Link>
                <Search />
                <Link to='/create'>
                    <button className={s.btn}>
                        <span className={s.shadow}></span>
                        <span className={s.edge}></span>
                        <span className={s.front}>Create</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Nav;